// RecentOrders.js
import { Card, CardBody, Col, Input, Label, Table } from "reactstrap";
import { RecentOrder } from "@/Constant";
import RecentOrdersBody from "./RecentOrdersBody";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";
import { useMemo, useState, useEffect } from "react";
import axios from "axios";
import PaginationDynamic from "@/utils/Paginations";

const RecentOrders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersData, setOrdersData] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersResponse = await axios.get("http://127.0.0.1:8000/api/orders/");
        const salesResponse = await axios.get("http://127.0.0.1:8000/api/sales/");
        const productsResponse = await axios.get("http://127.0.0.1:8000/api/products/");

        setOrdersData(ordersResponse.data);
        setSalesData(salesResponse.data);
        setProductsData(productsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const itemsPerPage = 4;
  const totalItems = ordersData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return ordersData.slice(startIndex, endIndex);
  }, [currentPage, ordersData]);

  return (
    <Col xxl="7" xl="8" sm="12">
      <Card>
        <DashboardCommonHeader title={RecentOrder} />
        <CardBody className="pt-0 recent-orders px-0">
          <div className="dataTables_wrapper">
            <div className="table-responsive theme-scrollbar">
              <Table className="display mb-2 dataTable" id="recent-orders">
                <thead>
                  <tr>
                    <th>
                      <div className="form-check">
                        <Input type="checkbox" />
                        <Label check />
                      </div>
                    </th>
                    <th>Recent Orders</th>
                    <th>Order Date</th>
                    <th>QTY</th>
                    <th>Customer</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <RecentOrdersBody currentItems={currentItems} salesData={salesData} productsData={productsData} />
              </Table>
            </div>
            <PaginationDynamic totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentOrders;
