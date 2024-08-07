import { Container, Row } from "reactstrap";
import BasicModalCart from "./BasicModal";
import SizeModalCart from "./SizesModal";
import FullScreenModals from "./FullScreenModal";
import CenteredModal from "./CenteredModal";
import ToggleBetweenModals from "./ToggleBetweenModals";
import StaticBackdropModal from "./StaticBackdropModal";
import inventoCustomModals from "./inventoCustomModals";

const ModalContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicModalCart />
        <SizeModalCart />
        <FullScreenModals />
        <CenteredModal />
        <ToggleBetweenModals />
        <StaticBackdropModal />
        <inventoCustomModals />
      </Row>
    </Container>
  );
};

export default ModalContainer;
