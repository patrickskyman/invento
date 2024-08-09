import SVG from "@/CommonComponent/SVG";
import { AddProductNav } from "@/Data/Application/Ecommerce";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
//import { setNavId } from "@/Redux/Reducers/AddProductSlice";
import { Col, Nav, NavItem, NavLink } from "reactstrap";

const ProductLeftSidebar = () => {
 // const {navId} = useAppSelector((state) => state.addProduct)
  //const dispatch = useAppDispatch()

  return (
    <Col xxl="3" xl="4" className="box-col-4e sidebar-left-wrapper mb-2 add-product-tab">
    <div className="product-tab-content">
                <h5>title</h5>
                <p>detail</p>
              </div>
    </Col>
  );
};

export default ProductLeftSidebar;
