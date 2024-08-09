"use client";
import { useState, useEffect } from "react";
import { ProductForm } from "@/Constant";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import ReactDatePicker from "react-datepicker";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProductContainer: React.FC = () => {
  const [manufactureDate, setManufactureDate] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [reorderLevel, setReorderLevel] = useState('');
  const [buyingPrice, setBuyingPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://inventoryr.online/api/categories/');
        setCategories(response.data);
      } catch (error) {
        console.error('There was an error fetching the categories!', error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (date: Date) => setManufactureDate(date);
  const handleExpiryChange = (date: Date) => setExpiryDate(date);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('quantity', quantity);
    formData.append('reorder_level', reorderLevel);
    formData.append('buying_price', buyingPrice);
    formData.append('selling_price', sellingPrice);
    formData.append('manufacture_date', manufactureDate.toISOString().split('T')[0]);
    formData.append('expiry_date', expiryDate.toISOString().split('T')[0]);

    try {
      const response = await axios.post('https://inventoryr.online/api/products/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success('Product created successfully!');
      setTimeout(() => {
        router.push('/inventory/product_list');
      }, 2000);
    } catch (error) {
      toast.error('There was an error creating the product!');
      console.error('There was an error creating the product!', error);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs="12">
          <Card>
            <CardHeader>
              <h5>{ProductForm}</h5>
            </CardHeader>
            <CardBody>
              <div className="page-wrapper">
                <div className="content">
                  <form onSubmit={handleSubmit}>
                    <div className="card">
                      <div className="card-body add-product pb-0">
                        <div className="accordion-card-one accordion" id="accordionExample">
                          <div className="accordion-item">
                            <div className="accordion-header" id="headingOne">
                              <div className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
                                <div className="addproduct-icon">
                                  <h5>
                                    <i data-feather="info" className="add-info"></i>
                                    <span>Product Information</span>
                                  </h5>
                                  <a href="javascript:void(0);">
                                    <i data-feather="chevron-down" className="chevron-down-add"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <div className="addservice-info">
                                  <div className="row">
                                    <div className="col-lg-4 col-sm-6 col-12">
                                      <div className="mb-3 add-product">
                                        <div className="add-newplus">
                                          <label className="form-label">Category</label>
                                          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-units-category">
                                            <i data-feather="plus-circle" className="plus-down-add"></i>
                                            <span>Add New</span>
                                          </a>
                                        </div>
                                        <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
                                          <option>Choose</option>
                                          {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                          ))}
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-12 pb-4">
                                      <div className="input-blocks add-product">
                                        <label>Name</label>
                                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-sm-6 col-12">
                                      <div className="input-blocks add-product">
                                        <label>Buying Price</label>
                                        <input type="text" className="form-control" value={buyingPrice} onChange={(e) => setBuyingPrice(e.target.value)} />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                      <div className="input-blocks add-product">
                                        <label>Selling Price</label>
                                        <input type="text" className="form-control" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-blocks summer-description-box transfer mb-3">
                                    <label>Description</label>
                                    <textarea className="form-control h-100" rows={5} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                    <p className="mt-1">Maximum 60 Characters</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-card-one accordion" id="accordionExample2">
                          <div className="accordion-item">
                            <div className="accordion-header" id="headingTwo">
                              <div className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo">
                                <div className="text-editor add-list">
                                  <div className="addproduct-icon list icon">
                                    <h5>
                                      <i data-feather="life-buoy" className="add-info"></i>
                                      <span>Pricing & Stocks</span>
                                    </h5>
                                    <a href="javascript:void(0);">
                                      <i data-feather="chevron-down" className="chevron-down-add"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                <div className="tab-content" id="pills-tabContent">
                                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="row">
                                      <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="input-blocks add-product">
                                          <label>Quantity</label>
                                          <input type="text" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="input-blocks add-product">
                                          <label>Quantity Alert</label>
                                          <input type="text" className="form-control" value={reorderLevel} onChange={(e) => setReorderLevel(e.target.value)} />
                                        </div>
                                      </div>
                                    </div>
                          
                                    <div className="row pt-4">
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="input-blocks add-product">
                                          <label>Manufacture Date</label>
                                          <ReactDatePicker className="form-control" selected={manufactureDate} onChange={handleChange} />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="input-blocks add-product">
                                          <label>Expiry Date</label>
                                          <ReactDatePicker className="form-control" selected={expiryDate} onChange={handleExpiryChange} />
                                      </div>
                                    </div>
                                  </div>
                        
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row pt-5">
                          <div className="col-lg-12 col-sm-12 col-12 text-center">
                            <button type="submit" className="btn btn-primary me-2">Submit</button>
                            <button type="reset" className="btn btn-danger">Cancel</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default AddProductContainer;
