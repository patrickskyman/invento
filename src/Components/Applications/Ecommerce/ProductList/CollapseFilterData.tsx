import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, Col, Collapse, Input, Row } from "reactstrap";
import { useAppSelector } from "@/Redux/Hooks";

export const CollapseFilterData = () => {
  const [filterData, setFilterData] = useState([]);
  const { filterToggle } = useAppSelector((state: { product: any; }) => state.product);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/categories/");
        const categories = response.data.map((category: { name: any; }) => category.name);
        setFilterData([
          {
            name: "Choose Category",
            options: categories,
          },
        ]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Collapse isOpen={filterToggle}>
      <Card className="shadow-none">
        <CardBody className="list-product-body">
          <Row className="row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3">
            {filterData.map((item, index) => (
              <Col key={index}>
                <Input type="select">
                  <option selected>{item?.name}</option>
                  {item?.options.map((data, optionIndex) => (
                    <option key={optionIndex} value={data}>{data}</option>
                  ))}
                </Input>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Collapse>
  );
};
