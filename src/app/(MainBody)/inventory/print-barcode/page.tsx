import React from 'react';
import { Card, Container, Row } from "reactstrap";
import { ImagePath, Pinned } from "@/Constant";

const PrintBarcode = () => {
  return (
    <Container fluid>
    <div>
      <div>
        <div>
          <div>
            <div className="pb-4">
              <h4>Print Barcode</h4>
              <h6>Manage your barcodes</h6>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <ul className="table-top-head">
              <li>
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh">
                  <i data-feather="rotate-ccw" className="feather-rotate-ccw"></i>
                </a>
              </li>
              <li>
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header">
                  <i data-feather="chevron-up" className="feather-chevron-up"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="barcode-content-list">
          <form>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="row seacrh-barcode-item">
                  <div className="col-sm-6 mb-3 seacrh-barcode-item-one">
                    <label className="form-label">Warehouse</label>
                    <select className="select">
                      <option>Choose</option>
                      <option>Manufacture</option>
                      <option>Transport</option>
                      <option>Customs</option>
                    </select>
                  </div>
                  <div className="col-sm-6 mb-3 seacrh-barcode-item-one">
                    <label className="form-label">Select Store</label>
                    <select className="select">
                      <option>Choose</option>
                      <option>Online</option>
                      <option>Offline</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="input-blocks search-form seacrh-barcode-item">
                  <div className="searchInput">
                    <label className="form-label">Product</label>
                    <input type="text" className="form-control" placeholder="Search Product by Codename" />
                    <div className="resultBox"></div>
                    <div className="icon">
                      <i className="fas fa-search"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="col-lg-12">
            <div className="modal-body-table search-modal-header">
              <div className="table-responsive">
                <table className="table datanew">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>SKU</th>
                      <th>Code</th>
                      <th>Qty</th>
                      <th className="text-center no-sort">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="productimgname">
                          <a href="javascript:void(0);" className="product-img stock-img">
                            <img src="assets/img/products/stock-img-02.png" alt="product" />
                          </a>
                          <a href="javascript:void(0);">Nike Jordan</a>
                        </div>
                      </td>
                      <td>PT002</td>
                      <td>HG3FK</td>
                      <td>
                        <div className="product-quantity">
                          <span className="quantity-btn">
                            <i data-feather="minus-circle" className="feather-search"></i>
                          </span>
                          <input type="text" className="quntity-input" value="4" />
                          <span className="quantity-btn">
                            +<i data-feather="plus-circle" className="plus-circle"></i>
                          </span>
                        </div>
                      </td>
                      <td className="action-table-data justify-content-center">
                        <div className="edit-delete-action">
                          <a className="confirm-text barcode-delete-icon" href="javascript:void(0);">
                            <i data-feather="trash-2" className="feather-trash-2"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="productimgname">
                          <a href="javascript:void(0);" className="product-img stock-img">
                            <img src="assets/img/products/stock-img-03.png" alt="product" />
                          </a>
                          <a href="javascript:void(0);">Apple Series 5 Watch</a>
                        </div>
                      </td>
                      <td>PT003</td>
                      <td>TEUIU7</td>
                      <td>
                        <div className="product-quantity">
                          <span className="quantity-btn">
                            <i data-feather="minus-circle" className="feather-search"></i>
                          </span>
                          <input type="text" className="quntity-input" value="4" />
                          <span className="quantity-btn">
                            +<i data-feather="plus-circle" className="plus-circle"></i>
                          </span>
                        </div>
                      </td>
                      <td className="action-table-data justify-content-center">
                        <div className="edit-delete-action">
                          <a className="barcode-delete-icon confirm-text" href="javascript:void(0);">
                            <i data-feather="trash-2" className="feather-trash-2"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="paper-search-size">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <form className="mb-0">
                  <label className="form-label">Paper Size</label>
                  <select className="select">
                    <option>Choose</option>
                    <option>Recent1</option>
                    <option>Recent2</option>
                  </select>
                </form>
              </div>
              <div className="col-lg-6 pt-3">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="search-toggle-list">
                      <p>Show Store Name</p>
                      <div className="input-blocks m-0">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <input type="checkbox" id="user7" className="check" defaultChecked />
                          <label htmlFor="user7" className="checktoggle mb-0"></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="search-toggle-list">
                      <p>Show Product Name</p>
                      <div className="input-blocks m-0">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <input type="checkbox" id="user8" className="check" defaultChecked />
                          <label htmlFor="user8" className="checktoggle mb-0"></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="search-toggle-list">
                      <p>Show Price</p>
                      <div className="input-blocks m-0">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <input type="checkbox" id="user9" className="check" defaultChecked />
                          <label htmlFor="user9" className="checktoggle mb-0"></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="search-barcode-button">
            <a href="javascript:void(0);" className="btn btn-submit me-2" data-bs-toggle="modal" data-bs-target="#prints-barcode">
              <span>
                <i className="fas fa-eye me-2"></i>
              </span>
              Generate Barcode
            </a>
            <a href="javascript:void(0);" className="btn btn-cancel me-2">
              <span>
                <i className="fas fa-power-off me-2"></i>
              </span>
              Reset Barcode
            </a>
            <a href="javascript:void(0);" className="btn btn-cancel close-btn">
              <span>
                <i className="fas fa-print me-2"></i>
              </span>
              Print Barcode
            </a>
          </div>
        </div>
      </div>
      <div className="modal fade" id="prints-barcode">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Print Barcode</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="barcode-print-wrap">
                <div className="barcode-info text-center">
                <img className="img-fluid" src={`${ImagePath}/barcode/barcode-1.png`} alt="" />
                  <div className="barcode-details">
                    <h4>Classic Management</h4>
                    <p>Price : $50.00</p>
                  </div>
                </div>
                <div className="barcode-info text-center">
                <img className="img-fluid" src={`${ImagePath}/barcode/barcode-1.png`} alt="" />
                  <div className="barcode-details">
                    <h4>Classic Management</h4>
                    <p>Price : $50.00</p>
                  </div>
                </div>
                <div className="barcode-info text-center">
                <img className="img-fluid" src={`${ImagePath}/barcode/barcode-1.png`} alt="" />
                  <div className="barcode-details">
                    <h4>Classic Management</h4>
                    <p>Price : $50.00</p>
                  </div>
                </div>
                <div className="barcode-info text-center">
                <img className="img-fluid" src={`${ImagePath}/barcode/barcode-1.png`} alt="" />
                  <div className="barcode-details">
                    <h4>Classic Management</h4>
                    <p>Price : $50.00</p>
                  </div>
                </div>
                <div className="barcode-info text-center">
                <img className="img-fluid" src={`${ImagePath}/barcode/barcode-1.png`} alt="" />
                  <div className="barcode-details">
                    <h4>Classic Management</h4>
                    <p>Price : $50.00</p>
                  </div>
                </div>
                <div className="barcode-info text-center">
                <img className="img-fluid" src={`${ImagePath}/barcode/barcode-1.png`} alt="" />
                  <div className="barcode-details">
                    <h4>Classic Management</h4>
                    <p>Price : $50.00</p>
                  </div>
                </div>
              </div>
              <div className="barcode-pager text-center">
                <ul className="pagination mb-0">
                  <li className="page-item prev-item">
                    <a className="page-link" href="javascript:void(0);">
                      <i className="fas fa-caret-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0);">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0);">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0);">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0);">4</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0);">5</a>
                  </li>
                  <li className="page-item next-item">
                    <a className="page-link" href="javascript:void(0);">
                      <i className="fas fa-caret-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="barcodes-btn-set text-center">
                <a href="javascript:void(0);" className="btn btn-cancel me-2">
                  <span>
                    <i className="fas fa-power-off me-2"></i>
                  </span>
                  Reset Barcode
                </a>
                <a href="javascript:void(0);" className="btn btn-submit">
                  <span>
                    <i className="fas fa-print me-2"></i>
                  </span>
                  Print Barcode
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default PrintBarcode;
