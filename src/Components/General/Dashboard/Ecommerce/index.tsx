import React from "react";
import { Container, Row } from "reactstrap";
import TotalSells from "./TotalSells";
import RecentOrders from "./RecentOrders";
import SalesOverview from "./SalesOverview";
import RecentCustomers from "./RecentCustomers";
import RevenueByCategory from "./RevenueByCategory";
import TopSeller from "./TopSeller/TopSeller";
import SalesStatistic from "./SalesStatistic";

const EcommerceContainer = () => {
  return (
    <Container fluid className="dashboard-3">
      <Row>
        <TotalSells />
        <RecentOrders />
        <SalesOverview />
        <RecentCustomers />
        <RevenueByCategory />
        <TopSeller />
      
        
        <SalesStatistic/>
      </Row>
    </Container>
  );
};

export default EcommerceContainer;
