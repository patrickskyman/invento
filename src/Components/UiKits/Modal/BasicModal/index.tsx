import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicModal } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import OpenModalinvento from "./OpenModalinvento";
import ScrollingModal from "./ScrollingModal";
import { SimpleModal } from "./SimpleModal";
import { ToolTipAndPopover } from "./ToolTipAndPopover";
import { BasicData } from "@/Data/Uikits/modal";

const BasicModalCart = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={BasicModal} span={BasicData} />
        <CardBody className="badge-spacing">
          <SimpleModal />
          <ScrollingModal />
          <ToolTipAndPopover />
          <OpenModalinvento />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicModalCart;
