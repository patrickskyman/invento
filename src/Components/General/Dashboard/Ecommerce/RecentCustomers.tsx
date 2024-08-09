import { useEffect, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Href, ImagePath, RecentCustomer } from "@/Constant";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useAppSelector } from "@/Redux/Hooks";

const formatElapsedTime = (timestamp) => {
  const now = new Date();
  const createdAt = new Date(timestamp);
  const elapsedSeconds = Math.floor((now - createdAt) / 1000);

  if (elapsedSeconds < 60) {
    return `${elapsedSeconds} seconds ago`;
  } else if (elapsedSeconds < 3600) {
    return `${Math.floor(elapsedSeconds / 60)} minutes ago`;
  } else if (elapsedSeconds < 86400) {
    return `${Math.floor(elapsedSeconds / 3600)} hours ago`;
  } else {
    return `${Math.floor(elapsedSeconds / 86400)} days ago`;
  }
};


const RecentCustomers = () => {
  const [recentOrders, setRecentOrders] = useState([]);
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);

  useEffect(() => {
    const fetchRecentOrders = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/orders/');
        const data = response.data;

        // Transform the data to match the format required for the component
        const transformedData = data.map(order => ({
          id: order.id,
          name: order.customer_name,  // Use the customer name from the API
          status: order.fulfilled ? "Paid" : "Pending",  // Display based on order status
          color: order.fulfilled ? "success" : "danger",  // Color based on order status
          time: formatElapsedTime(order.created_at),  // Convert created_at to human-readable time
        }));

        setRecentOrders(transformedData);
      } catch (error) {
        console.error("Failed to fetch recent orders:", error);
      }
    };

    fetchRecentOrders();
  }, []);

  return (
    <Col xl="3" lg="5" sm="6">
      <Card>
        <DashboardCommonHeader title={RecentCustomer} />
        <CardBody className="pt-0">
          <ul className="recent-customers">
            {recentOrders.map((data, i) => (
              <li className="d-flex align-items-center gap-2" key={i}>
                <div className="flex-grow-1">
                  <Link href={`/ecommerce/cart`}><h5>{data.name}</h5></Link>
                  <p className="text-truncate">ID #{data.id} <span className={`text-${data.color}`}>{data.status}</span></p>
                </div>
                <div className="active-status active-online" />
                <div className="recent-text">
             
                  <p>{data.time}</p>  {/* Display formatted elapsed time */}
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentCustomers;
