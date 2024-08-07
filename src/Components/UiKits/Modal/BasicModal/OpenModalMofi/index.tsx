import React, { useState } from "react";
import CommonModal from "../../Common/CommonModal";
import { OpenModalForm } from "./OpenModalForm";
import { Button } from "reactstrap";
import { OpenModalForinvento, inventoSignUp } from "@/Constant";

const OpenModalinvento = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModaltoggle = () => setOpenModal(!openModal);

  return (
    <>
      <Button color="primary" onClick={openModaltoggle}>{OpenModalForinvento}</Button>
      <CommonModal isOpen={openModal} toggle={openModaltoggle} modalBodyClassName="p-0" heading="invento SIGN-UP">
        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
          <h3 className="modal-header justify-content-center border-0">{inventoSignUp}</h3>
          <OpenModalForm modal={openModaltoggle}/>
        </div>
      </CommonModal>
    </>
  );
};

export default OpenModalinvento;
