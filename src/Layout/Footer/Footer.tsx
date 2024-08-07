import SVG from "@/CommonComponent/SVG";
import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md="12" className="footer-copyright d-flex flex-wrap align-items-center justify-content-between">
            <p className="mb-0 f-w-600">Copyright {currentYear} © Invento</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
