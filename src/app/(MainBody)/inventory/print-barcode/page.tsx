"use client"
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '@fortawesome/fontawesome-free/css/all.min.css';

const PrintBarcode = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products/');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownloadQRCode = async (product) => {
    const barcodeUrl = product.barcode;
  
    try {
      const response = await fetch(barcodeUrl);
      const blob = await response.blob();
  
      // Create a temporary anchor element to trigger the download
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.setAttribute('download', `${product.sku}.png`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading barcode:', error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="card p-4">
        <div className="row pb-4">
          <div className="col">
            <h4>Print Barcode</h4>
            <h6>Manage your barcodes</h6>
          </div>
        </div>
        <form>
          <div className="row mb-4">
            <div className="col-lg-6">
              <div className="form-group position-relative">
                <label htmlFor="productSearch">Product</label>
                <input
                  type="text"
                  id="productSearch"
                  placeholder="Search Product by Codename"
                  className="form-control"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="row mb-4">
          <div className="col">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>SKU</th>
                   
                    <th>Qty</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <a href="#">{product.name}</a>
                        </div>
                      </td>
                      <td>{product.sku}</td>
                
                      <td className="d-flex align-items-center">
                        <input type="text" value={product.quantity} className="form-control text-center" />
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-link"
                          onClick={() => handleDownloadQRCode(product)}
                        >
                          <i className="fas fa-download"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <div className="d-flex justify-content-end">
              <button className="btn btn-secondary">
                <i className="fas fa-print me-2"></i>
                Print Barcode
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal code remains the same */}
    </div>
  );
};

export default PrintBarcode;