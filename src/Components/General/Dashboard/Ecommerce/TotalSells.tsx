'use client'
import { ImagePath } from "@/Constant";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import { useState, useEffect } from "react";
import axios from "axios";

const TotalSells = () => {
  const [salesData, setSalesData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [totalOrdersValue, setTotalOrdersValue] = useState(0);
  const [dailyOrders, setDailyOrders] = useState(0);
  const [dailyProfit, setDailyProfit] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const salesResponse = await axios.get("https://inventoryr.online/api/sales/");
        const ordersResponse = await axios.get("https://inventoryr.online/api/orders/");
        const productsResponse = await axios.get("https://inventoryr.online/api/products/");

        setSalesData(salesResponse.data);
        setOrdersData(ordersResponse.data);
        setProductsData(productsResponse.data);

        setTotalSales(salesResponse.data.length);

        // Calculate total orders value
        const ordersValue = salesResponse.data.reduce((total, sale) => {
          const product = productsResponse.data.find(p => p.id === sale.product);
          return total + (product ? product.selling_price * sale.quantity : 0);
        }, 0);
        setTotalOrdersValue(ordersValue);

        // Calculate daily orders
        const today = new Date().toISOString().split('T')[0];
        const dailyOrdersCount = ordersResponse.data.filter(order => 
          order.created_at.startsWith(today)
        ).length;
        setDailyOrders(dailyOrdersCount);

        // Calculate daily profit
        const dailyProfit = salesResponse.data.reduce((total, sale) => {
          const product = productsResponse.data.find(p => p.id === sale.product);
          if (product) {
            const profit = (product.selling_price - product.buying_price) * sale.quantity;
            return total + profit;
          }
          return total;
        }, 0);
        setDailyProfit(dailyProfit);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const chartData = [
    {
      class: "total-sells",
      title: "Total Sales",
      image: "shopping1.png",
      count: totalSales.toString(),
      icon: "fa-arrow-up",
      color: "success",
      percentage: "+ 20.08%",
      detail: "Compared to Jan 2023",
      chartId: "admissionRatio",
      chart: {
        series: [{ name: "Sales", data: salesData.map(sale => sale.quantity) }],
      }
    },
    {
      class: "total-sells-2",
      title: "Orders Value",
      image: "coin1.png",
      count: totalOrdersValue.toFixed(2),
      icon: "fa-arrow-down",
      color: "danger",
      percentage: "- 10.02%",
      detail: "Compared to Aug 2023",
      chartId: "order-value",
      chart: {
        series: [{ 
          name: "Orders Value", 
          data: salesData.map(sale => {
            const product = productsData.find(p => p.id === sale.product);
            return product ? product.selling_price * sale.quantity : 0;
          })
        }],
      }
    },
    {
      class: "total-sells-3",
      title: "Daily Orders",
      image: "sent1.png",
      count: dailyOrders.toString(),
      icon: "fa-arrow-up",
      color: "success",
      percentage: "+ 13.23%",
      detail: "Compared to may 2023",
      chartId: "daily-value",
      chart: {
        series: [{ name: "Daily Orders", data: [dailyOrders] }],
      }
    },
    {
      class: "total-sells-4",
      title: "Daily Profit",
      image: "revenue1.png",
      count: dailyProfit.toFixed(2),
      icon: "fa-arrow-down",
      color: "danger",
      percentage: "- 17.06%",
      detail: "Compared to july 2023",
      chartId: "daily-profit",
      chart: {
        series: [{ 
          name: "Daily Profit", 
          data: salesData.map(sale => {
            const product = productsData.find(p => p.id === sale.product);
            if (product) {
              return (product.selling_price - product.buying_price) * sale.quantity;
            }
            return 0;
          })
        }],
      }
    },
  ];

  return (
    <Row>
      {chartData.map((data, index) => (
        <Col xl="3" sm="6" key={index} className="daily-revenue-card">
          <Card>
            <DashboardCommonHeader title={data.title} />
            <CardBody className={`pb-0 ${data.class}`}>
              <div className="d-flex align-items-center gap-3">
                <div className="flex-shrink-0">
                  <img src={`${ImagePath}/dashboard-3/icon/${data.image}`} alt="icon" />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center gap-2">
                    <h2>{data.count}</h2>
                    <div className="d-flex total-icon">
                      <p className={`mb-0 up-arrow bg-light-${data.color}`}>
                        <i className={`fa ${data.icon} text-${data.color}`} />
                      </p>
                   
                    </div>
                  </div>

                </div>
              </div>
              <ReactApexChart
                id={data.chartId}
                options={data.chart}
                series={data.chart.series}
                type="area"
                height={90}
              />
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TotalSells;