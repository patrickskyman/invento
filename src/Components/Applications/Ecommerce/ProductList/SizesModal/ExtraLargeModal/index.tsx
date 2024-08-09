import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Input, FormGroup, Label } from "reactstrap";
import CommonModal from "../Common/CommonModal";
import { ExtraLargeModals } from "@/Constant";

const ExtraLargeModal = ({ product, isOpen, toggle }) => {
  const [formData, setFormData] = useState(product || {});
  const [fileData, setFileData] = useState({ barcode: null, qr_code: null });

  useEffect(() => {
    setFormData(product || {});
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFileData({ ...fileData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key !== 'barcode' && key !== 'qr_code') {
        data.append(key, formData[key]);
      }
    });
    Object.keys(fileData).forEach(key => {
      if (fileData[key]) data.append(key, fileData[key]);
    });
    
    try {
      await axios.put(`https://inventoryr.online/api/products/${formData.id}/`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      toggle(); // Close modal on successful update
    } catch (error) {
      console.error("Error updating product:", error.response?.data || error.message);
    }
  };

  return (
    <CommonModal size="xl" isOpen={isOpen} toggle={toggle} sizeTitle="Edit Product">
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name || ""}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="sku">SKU</Label>
          <Input
            type="text"
            id="sku"
            name="sku"
            value={formData.sku || ""}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">Category</Label>
          <Input
            type="text"
            id="category"
            name="category"
            value={formData.category || ""}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="selling_price">Price</Label>
          <Input
            type="number"
            id="selling_price"
            name="selling_price"
            value={formData.selling_price || ""}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Quantity</Label>
          <Input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity || ""}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type="submit" color="primary">Save</Button>
        <Button color="secondary" onClick={toggle}>Close</Button>
      </form>
    </CommonModal>
  );
};

export default ExtraLargeModal;
