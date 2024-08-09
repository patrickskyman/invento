import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { CollapseFilterData } from "./CollapseFilterData";
import { ProductListFilterHeader } from "./ProductListFilterHeader";
import { SearchTableButton } from "@/Constant";
import ProductListTableAction from "./ProductListTableAction";

const ProductListContainer = () => {
  const [filterText, setFilterText] = useState("");
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/products/");
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredItems = productData.filter(
    (item) => item?.category && typeof item?.category === 'string' && item?.category?.toLowerCase().includes(filterText?.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input
          onChange={(e) => setFilterText(e.target.value)}
          type="search"
          value={filterText}
        />
      </div>
    );
  }, [filterText]);

  const columns = [
    {
      name: 'Name',
      selector: row => row?.name,
      sortable: true,
    },
    {
      name: 'SKU',
      selector: row => row?.sku,
    },
    {
      name: 'Category',
      selector: row => row?.category,
    },
    {
      name: 'Price',
      selector: row => row?.selling_price,
    },
    {
      name: 'Quantity',
      selector: row => row?.quantity,
    },
    {
      name: "Action",
      cell: (row) => <ProductListTableAction product={row} />,
    },
  ];

  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <div className="list-product-header">
                <ProductListFilterHeader />
                <CollapseFilterData />
              </div>
              <div className="list-product">
                <div className="table-responsive">
                  <DataTable
                    className="theme-scrollbar"
                    data={productData}
                    columns={columns}
                    striped
                    highlightOnHover
                    pagination
                    selectableRows
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListContainer;
