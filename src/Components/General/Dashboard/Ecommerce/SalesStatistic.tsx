import React, { useState, useEffect } from 'react';
import { ImagePath, SalesStatistics } from "@/Constant";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import { CommonDropdown } from "../common/CommonDropdown";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import axios from 'axios';

const SalesStatistic = () => {
  const [salesData, setSalesData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [totalOrdersValue, setTotalOrdersValue] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const salesResponse = await axios.get('https://inventoryr.online/api/sales/');
        setSalesData(salesResponse.data);

        const productsResponse = await axios.get('https://inventoryr.online/api/products/');
        setProductsData(productsResponse.data);

        // Calculate total orders value and total customers
        const customerSet = new Set();
        let totalValue = 0;
        let totalCost = 0;

        salesResponse.data.forEach(sale => {
          const product = productsResponse.data.find(p => p.id === sale.product);
          if (product) {
            const value = product.selling_price * sale.quantity;
            const cost = product.buying_price * sale.quantity;
            totalValue += value;
            totalCost += cost;
            customerSet.add(sale.customer);
          }
        });

        setTotalOrdersValue(totalValue);
        setTotalCustomers(customerSet.size);
        setTotalProfit(totalValue - totalCost);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSalesData();
  }, []);

  const monthlyOrdersValue = salesData.reduce((acc, sale) => {
    const month = new Date(sale.sales_date).getMonth();
    const product = productsData.find(p => p.id === sale.product);
    const value = product ? product.selling_price * sale.quantity : 0;
    acc[month] = (acc[month] || 0) + value;
    return acc;
  }, {});

  const chartData = {
    series: [{
      name: 'Orders Value',
      data: Array.from({ length: 12 }, (_, i) => monthlyOrdersValue[i] || 0)
    }],
    options: {
      chart: {
        height: 270,
        type: 'line',
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          top: 4,
          left: 1,
          blur: 8,
          color: '#7A70BA',
          opacity: 0.4,
        },
      },
      stroke: {
        curve: 'smooth',
        width: 3,
      },
      grid: {
        show: true,
        borderColor: "rgba(106, 113, 133, 0.30)",
        strokeDashArray: 3,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          style: {
            fontFamily: "Outfit, sans-serif",
            fontWeight: 500,
            colors: "#8D8D8D",
          },
        },
      },
      yaxis: {
        title: {
          text: 'Orders Value'
        },
        labels: {
          formatter: function (value) {
            return "$" + value.toFixed(2);
          },
          style: {
            fontFamily: "Outfit, sans-serif",
            fontWeight: 500,
            colors: "#3D434A",
          },
        },
      },
      colors: ["#7A70BA"],
      tooltip: {
        y: {
          formatter: function (val) {
            return "$" + val.toFixed(2);
          }
        }
      }
    },
  };

  const SalesData = [
    {
      img: "revenue.png",
      title: "Orders Value",
      count: `Ksh${totalOrdersValue.toFixed(2)}`,
      icon: "fa-arrow-down",
      color: "danger",
      percentage: "-10.02%",
      detail: "Compared to Aug 2023",
      chartId: "order-value",
      chart: chartData
    },
    {
      img: "customers.png",
      title: "Total customers",
      count: `${totalCustomers}`,
      result: "-0.10%",
      color: "danger",
    },
    {
      img: "profit.png",
      title: "Profit",
      count: `Ksh${totalProfit.toFixed(2)}`,
      result: "+11.6%",
      color: "success",
    },
  ];

  return (
    <Col xxl="7" xl="12" className="box-col-12 proorder-xl-8 proorder-md-9">
      <Card>
        <DashboardCommonHeader title={SalesStatistics} />
        <CardBody className="sale-statistic">
          <Row>
            {SalesData.map((data, i) => (
              <Col xs="3" className="statistic-icon" key={i}>
                <div className="light-card balance-card widget-hover">
                  <div className="icon-box">
                    <img src={`${ImagePath}/dashboard/icon/${data.img}`} alt="icons" />
                  </div>
                  <div>
                    <span className="f-w-500 f-light">{data.title}</span>
                    <h5 className="mt-1 mb-0">{data.count}</h5>
                  </div>
                  <div className="ms-auto text-end">
                    <CommonDropdown days={true}/>
                    <span className={`f-w-600 font-${data.color}`}>{data.result}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <ReactApexChart 
            id="chart-dash-2-line" 
            options={chartData.options} 
            series={chartData.series} 
            height={270} 
            type='line' 
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesStatistic;
