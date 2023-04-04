import React, { useState } from "react";
import Modal from "react-modal";
import "../components/ReactModal.css";

Modal.setAppElement("#root");

const ReactModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      Note : Opening animation/transition works <br /> but Closing
      animation/transition needs a className changing <br />
      <button
        onClick={() => {
          setModal(!modal);
        }}>
        Open Modal
      </button>
      <Modal
        isOpen={true}
        onRequestClose={() => setModal(!modal)}
        className={modal ? "isOpen" : "isClose"}
        overlayClassName={modal ? "overlayIsOpen" : "overlayIsClose"}>
        <h1>Title</h1>

        <p>ParaGragh</p>
        <button
          onClick={() => {
            setModal(!modal);
          }}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ReactModal;
