import React, { useState } from "react";
import { Button } from "reactstrap";
import CommonModal from "../Common/CommonModal";

const SmallModal = ({ onConfirm, isOpen, toggle }) => {
  return (
    <CommonModal size="sm" isOpen={isOpen} toggle={toggle} sizeTitle="Delete Product">
      <div className="modal-padding-space">
        <p>Are you sure you want to delete this product?</p>
        <Button color="danger" onClick={onConfirm}>Delete</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </div>
    </CommonModal>
  );
};

export default SmallModal;
