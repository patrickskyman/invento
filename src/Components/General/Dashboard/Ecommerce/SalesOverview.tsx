import React, { useState, useEffect } from 'react';
import { Card, CardBody, Col } from "reactstrap";
import { SalesOverviews } from "@/Constant";
import ReactApexChart from "react-apexcharts";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import axios from 'axios';

const SalesOverview = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get('https://inventoryr.online/api/sales/');
        setSalesData(response.data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };

    fetchSalesData();
  }, []);

  const chartData = {
    series: [{
      name: 'Sales Quantity',
      data: salesData.map(sale => sale.quantity)
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: salesData.map(sale => new Date(sale.sales_date).toLocaleDateString()),
      },
      yaxis: {
        title: {
          text: 'Quantity'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " units"
          }
        }
      }
    },
  };

  return (
    <Col xxl="5" xl="4" lg="7" sm="12">
      <Card>
        <DashboardCommonHeader title={SalesOverviews}/>
        <CardBody className="pt-0">
          <ReactApexChart 
            id="sales-overview" 
            options={chartData.options} 
            series={chartData.series} 
            type="bar" 
            height={350} 
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesOverview;