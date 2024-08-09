import { useEffect, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import axios from "axios";

const RevenueByCategory = () => {
  const [chartData, setChartData] = useState({
    series: [],
    categories: [],
  });

  useEffect(() => {
    const fetchRevenueData = async () => {
      try {
        const [salesResponse, productsResponse, categoriesResponse] = await Promise.all([
          axios.get("https://inventoryr.online/api/sales/"),
          axios.get("https://inventoryr.online/api/products/"),
          axios.get("https://inventoryr.online/api/categories/"),
        ]);

        const salesData = salesResponse.data;
        const productsData = productsResponse.data;
        const categoriesData = categoriesResponse.data;

        // Create a map of category IDs to category names
        const categoryMap = categoriesData.reduce((acc, category) => {
          acc[category.id] = category.name;
          return acc;
        }, {});

        // Calculate total revenue by category
        const revenueByCategory = salesData.reduce((acc, sale) => {
          const product = productsData.find(p => p.id === sale.product);
          if (product) {
            const revenue = product.selling_price * sale.quantity;
            const categoryName = categoryMap[product.category];
            if (categoryName) {
              if (acc[categoryName]) {
                acc[categoryName] += revenue;
              } else {
                acc[categoryName] = revenue;
              }
            }
          }
          return acc;
        }, {});

        // Extract categories and series for the chart
        const categories = Object.keys(revenueByCategory);
        const series = categories.map(categoryName => revenueByCategory[categoryName]);

        // Check if data is correctly processed
        console.log("Categories:", categories);
        console.log("Series:", series);

        setChartData({
          series: [{
            name: "Revenue",
            data: series,
          }],
          categories,
        });
      } catch (error) {
        console.error("Failed to fetch revenue data:", error);
      }
    };

    fetchRevenueData();
  }, []);

  const chartOptions = {
    series: chartData.series,
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 1330,
        options: {
          chart: {
            width: 210,
          },
        },
      },
    ],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "83%",
          labels: {
            show: true,
            name: {
              offsetY: 4,
            },
            total: {
              show: true,
              fontSize: "20px",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              label: "Total",
              formatter: () => chartData.series[0]?.data.reduce((a, b) => a + b, 0).toFixed(2) || '0.00',
            },
          },
        },
      },
    },
    legend: {
      position: "bottom",
      offsetY: 0,
      height: 50,
    },
    colors: ["#FF4560", "#00E396", "#008FFB", "#775DD0"],
    labels: chartData.categories,
  };

  return (
    <Col xl="3" lg="5" sm="6">
      <Card>
        <DashboardCommonHeader title="Revenue by Category" />
        <CardBody className="revenue-category">
          <ReactApexChart
            id="chart"
            options={chartOptions}
            series={chartData.series[0]?.data || []}
            type="donut"
            height={350}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default RevenueByCategory;
