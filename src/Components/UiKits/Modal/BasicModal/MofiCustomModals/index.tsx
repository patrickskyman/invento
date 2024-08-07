import { Card, CardBody, Col, Row } from "reactstrap";
import { ModalOne } from "./ProfileModal";
import ModalTwo from "./ResultModal";
import ModalThird from "./BalanceModal";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { inventoCustomModal } from "@/Constant";
import { CustomModalData } from "@/Data/Uikits/modal";

const inventoCustomModals = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={inventoCustomModal} span={CustomModalData} />
        <CardBody>
          <Row className="g-3">
            <ModalOne />
            <ModalTwo />
            <ModalThird />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default inventoCustomModals;
