import { Card, CardBody, Col } from "reactstrap";
import { TopSellerMonth } from "@/Constant";
import TopSellerTable from "./TopSellerTable";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";
import { useEffect, useState } from "react";
import axios from "axios";

const TopSeller = () => {
  const [topSellers, setTopSellers] = useState<any[]>([]);

  useEffect(() => {
    const fetchTopSellers = async () => {
      try {
        const salesResponse = await axios.get('http://127.0.0.1:8000/api/sales/');
        const salesData = salesResponse.data;

        // Fetch product data
        const productsResponse = await axios.get('http://127.0.0.1:8000/api/products/');
        const productsData = productsResponse.data;

        // Calculate revenue for each product
        const revenueByProduct = salesData.reduce((acc: any, sale: any) => {
          const product = productsData.find((p: any) => p.id === sale.product);
          if (product) {
            const revenue = product.selling_price * sale.quantity;
            acc[sale.product] = (acc[sale.product] || 0) + revenue;
          }
          return acc;
        }, {});

        // Transform revenue data into top sellers format
        const sortedProducts = Object.entries(revenueByProduct)
          .map(([productId, revenue]) => {
            const product = productsData.find((p: any) => p.id === Number(productId));
            return {
              id: Number(productId),
              name: product ? product.name : "Unknown",
              brand: product ? product.category : "Unknown", // Assuming category as brand
              product: product ? product.name : "Unknown",
              sold: salesData.filter((sale: any) => sale.product === Number(productId)).reduce((sum: number, sale: any) => sum + sale.quantity, 0),
              price: product ? product.selling_price : 0,
              earning: revenue
            };
          })
          .sort((a: any, b: any) => b.earning - a.earning); // Sort by revenue

        setTopSellers(sortedProducts);
      } catch (error) {
        console.error("Failed to fetch top sellers:", error);
      }
    };

    fetchTopSellers();
  }, []);

  return (
    <Col xl="6" lg="12">
      <Card>
        <DashboardCommonHeader title={TopSellerMonth} />
        <CardBody className="pt-0 seller-month px-0">
          <TopSellerTable topSellers={topSellers} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopSeller;
