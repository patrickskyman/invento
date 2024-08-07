'use client'
import React from 'react';
import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import ReactDatePicker from "react-datepicker";
import { AllowBackOrders, LowStock, PreOrder, RestockDate, SKU, StockAvailability, StockQuantity } from '@/Constant';
import { useAppDispatch } from '@/Redux/Hooks';
import { setFormValue } from '@/Redux/Reducers/AddProductSlice';

const TabOne = () => {
  const dispatch = useAppDispatch();
  const [manufacturedDate, setManufacturedDate] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date());

  const handleManufacturedDate = (date: Date) => setManufacturedDate(date);
  const handleExpiryDate = (date: Date) => setExpiryDate(date);

  return (
    <div className="meta-body">
      <Form id="advance-tab">
        <Row className="g-3 custom-input">
          <Col sm="6">
            <Label check>{StockAvailability}</Label>
            <Input 
              type="select" 
              name="stock" 
              defaultValue={"In stock"} 
              onChange={(e) => dispatch(setFormValue({name: "stock", value: e.target.value}))}
            >
              <option>{"In stock"}</option>
              <option>{"Out of stock"}</option>
              <option>{"Pre-order"}</option>
            </Input>
          </Col>
          <Col sm="6">
            <Label check>{LowStock}</Label>
            <Input 
              type="select" 
              name="lowStock" 
              defaultValue={"Low Stock (5 or less)"} 
              onChange={(e) => dispatch(setFormValue({name: "lowStock", value: e.target.value}))}
            >
              <option>{"Low Stock (5 or less)"}</option>
              <option>{"Low Stock (10 or less)"}</option>
              <option>{"Low Stock (20 or less)"}</option>
              <option>{"Low Stock (25 or less)"}</option>
              <option>{"Low Stock (30 or less)"}</option>
            </Input>
          </Col>
          <Col lg="3" sm="6">
            <Label check>{SKU} <span className="txt-danger">*</span></Label>
            <Input 
              type="text" 
              name="sku" 
              onChange={(e) => dispatch(setFormValue({name: "sku", value: e.target.value}))}
            />
          </Col>
          <Col lg="3" sm="6">
            <Label check>{StockQuantity} <span className="txt-danger">*</span></Label>
            <Input 
              type="number" 
              name="quantity" 
              defaultValue={7} 
              min={0} 
              onChange={(e) => dispatch(setFormValue({name: "quantity", value: e.target.value}))}
            />
          </Col>
          <Col lg="3" sm="6">
            <Label check>{RestockDate} <span className="txt-danger">*</span></Label>
            <Input 
              type="number" 
              name="restock" 
              onChange={(e) => dispatch(setFormValue({name: "restock", value: e.target.value}))}
            />
          </Col>
          <Col lg="3" sm="6">
            <Label check>{PreOrder} <span className="txt-danger">*</span></Label>
            <Input type="number"/>
          </Col>
          <Col lg="4" sm="6">
          <Label for="validationServer01" check> Manufactured Date </Label>
          <div className="input-group flatpicker-calender product-date">
            <ReactDatePicker className="form-control flatpickr-input" selected={manufacturedDate} onChange={handleManufacturedDate} />
          </div>
        </Col>

        <Col lg="4" sm="6">
          <Label for="validationServer01" check> Expiry Date </Label>
          <div className="input-group flatpicker-calender product-date">
            <ReactDatePicker className="form-control flatpickr-input" selected={expiryDate} onChange={handleExpiryDate} />
          </div>
        </Col>
          <Col xs="12">
          <Button color="primary" type="submit" className="w-100 btn-square">
          <h3>Save</h3>
          </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TabOne;
