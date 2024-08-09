"use client";
import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

interface Product {
  id: number;
  sku: string;
  name: string;
  quantity: number;
  selling_price: string;
}

interface OrderItem {
  id: number;
  quantity: number;
  price: number;
}

function getCSRFToken() {
  const name = "csrftoken";
  const cookieValue = document.cookie
    .split("; ")
    .find(row => row.startsWith(name))
    ?.split("=")[1];
  return cookieValue || "";
}

const PrintBarcode: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response: AxiosResponse<Product[]> = await axios.get("http://127.0.0.1:8000/api/products/");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle search input change
  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Handle adding product to order
  const handleAddToOrder = async (product: Product) => {
    try {
      const csrfToken = getCSRFToken();
      const response: AxiosResponse<{ quantity: number }> = await axios.post(
        "http://127.0.0.1:8000/scan-product/",
        {
          sku: product.sku,
          action: "add_to_basket",
          quantity: 1,
        },
        {
          headers: {
            "X-CSRFToken": csrfToken,
          },
        }
      );
      setOrderItems((prev) => [
        ...prev,
        { id: product.id, quantity: response.data.quantity, price: parseFloat(product.selling_price) },
      ]);
    } catch (error) {
      console.error("Error adding product to order:", error);
    }
  };

  // Handle removing product from order
  const handleRemoveFromOrder = (index: number) => {
    setOrderItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle quantity change
  const handleQuantityChange = (index: number, quantity: number) => {
    setOrderItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity } : item
      )
    );
  };

  // Calculate totals
  const calculateSubtotal = () => {
    return orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return (calculateSubtotal() * 0.05).toFixed(2);
  };

  const calculateShipping = () => {
    return "00.00";
  };

  const calculateDiscount = () => {
    return (calculateSubtotal() * 0.1).toFixed(2);
  };

  const calculateTotal = () => {
    return (
      parseFloat(calculateSubtotal().toFixed(2)) +
      parseFloat(calculateTax()) +
      parseFloat(calculateShipping()) -
      parseFloat(calculateDiscount())
    ).toFixed(2);
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-wrapper pos-pg-wrapper ms-0">
      <div className="content pos-design p-0">
        <div className="row align-items-start pos-wrapper">
          <div className="col-md-12 col-lg-8">
            <div className="pos-products">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">Products</h5>
                <input
                  type="text"
                  className="form-control search-bar-margin"
                  placeholder="Search Products"
                  value={searchTerm}
                  onChange={handleSearchTermChange}
                />
              </div>
              <div className="tabs_container">
                <div className="tab_content active" data-tab="all">
                  <div className="row">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="col-sm-2 col-md-6 col-lg-3 col-xl-3 mb-3"
                      >
                        <div
                          className="product-info default-cover card"
                          style={{ padding: "10px" }}
                        >
                          <div className="product-info-content">
                            <h6 className="product-name">{product.name}</h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>{product.quantity} Pcs</span>
                              <p>Ksh{product.selling_price}</p>
                            </div>
                            <button
                              className="btn btn-primary"
                              onClick={() => handleAddToOrder(product)}
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <aside
              className="product-order-list bg-light p-3 rounded border text-dark"
              style={{ maxWidth: "400px" }}
            >
              <div className="head d-flex align-items-center justify-content-between mb-3">
                <div>
                  <h5>Order List</h5>
                  <span>Transaction ID : #65565</span>
                </div>
                <div>
                  <a className="confirm-text" href="javascript:void(0);">
                    <i className="fa fa-trash-alt text-danger"></i>
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                </div>
              </div>
              <div className="product-added block-section">
                <div className="head-text d-flex align-items-center justify-content-between mb-3">
                  <h6 className="d-flex align-items-center mb-0">
                    Product Added<span className="count ms-2">{orderItems.length}</span>
                  </h6>
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center text-danger"
                    onClick={() => setOrderItems([])}
                  >
                    <i className="fa fa-times me-1"></i>
                    Clear all
                  </a>
                </div>
                <div className="product-wrap">
                  {orderItems.map((item, index) => (
                    <div
                      key={index}
                      className="product-list d-flex align-items-center justify-content-between mb-3"
                    >
                      <div className="d-flex align-items-center product-info">
                        <div className="info">
                          <span>{products.find((p) => p.id === item.id)?.sku ?? "PT0005"}</span>
                          <h6>
                            {products.find((p) => p.id === item.id)?.name ?? "Unknown Product"}
                          </h6>
                          <p>Ksh{item.price}</p>
                        </div>
                      </div>
                      <div className="qty-item text-center">
                        <a
                          href="javascript:void(0);"
                          className="dec d-flex justify-content-center align-items-center"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="minus"
                          onClick={() =>
                            handleQuantityChange(index, Math.max(item.quantity - 1, 1))
                          }
                        >
                          <i className="fa fa-minus-circle"></i>
                        </a>
                        <input
                          type="text"
                          className="form-control text-center"
                          name="qty"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(index, parseInt(e.target.value))
                          }
                        />
                        <a
                          href="javascript:void(0);"
                          className="inc d-flex justify-content-center align-items-center"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="plus"
                          onClick={() => handleQuantityChange(index, item.quantity + 1)}
                        >
                          <i className="fa fa-plus-circle"></i>
                        </a>
                      </div>
                      <div className="d-flex align-items-center action">
                        <a
                          className="btn-icon edit-icon me-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Edit"
                        >
                          <i className="fa fa-edit"></i>
                        </a>
                        <a
                          className="btn-icon delete-icon"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Delete"
                          onClick={() => handleRemoveFromOrder(index)}
                        >
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="invoice-total">
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-between">
                    <span>Subtotal:</span>
                    <span>Ksh {calculateSubtotal().toFixed(2)}</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Tax (5%):</span>
                    <span>Ksh {calculateTax()}</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Shipping:</span>
                    <span>Ksh {calculateShipping()}</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Discount:</span>
                    <span>Ksh {calculateDiscount()}</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Total:</span>
                    <span>Ksh {calculateTotal()}</span>
                  </li>
                </ul>
                <button className="btn btn-primary w-100 mt-3">Checkout</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintBarcode;
