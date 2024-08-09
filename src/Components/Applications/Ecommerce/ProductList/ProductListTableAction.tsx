import React, { useState } from "react";
import SVG from "@/CommonComponent/SVG";
import ExtraLargeModal from "../../Ecommerce/ProductList/SizesModal/ExtraLargeModal"; // Adjust import path if needed
import SmallModal from "../../Ecommerce/ProductList/SizesModal/SmallModal"; // Adjust import path if needed
import axios from "axios";

const ProductListTableAction = ({ product }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleEditModalToggle = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleDeleteModalToggle = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/products/${product.id}/`);
      handleDeleteModalToggle();
      // Optional: Add a callback or state update to refresh the product list
    } catch (error) {
      console.error("Error deleting product:", error.response?.data || error.message);
    }
  };

  return (
    <div className="product-action">
      <button onClick={handleEditClick}>
        <SVG iconId="edit-content" />
      </button>
      <button onClick={handleDeleteClick}>
        <SVG iconId="trash1" />
      </button>
      
      {/* Edit Modal Component */}
      {isEditModalOpen && (
        <ExtraLargeModal 
          product={product} 
          isOpen={isEditModalOpen} 
          toggle={handleEditModalToggle} 
        />
      )}

      {/* Delete Modal Component */}
      {isDeleteModalOpen && (
        <SmallModal 
          onConfirm={handleDeleteConfirm} 
          isOpen={isDeleteModalOpen} 
          toggle={handleDeleteModalToggle} 
        />
      )}
    </div>
  );
};

export default ProductListTableAction;
