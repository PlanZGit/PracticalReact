import React, { useState } from "react";
import Modal from "react-modal";
import "../components/ReactModal.css";

Modal.setAppElement("#root");

const ReactModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      react-modal
      <Modal
        isOpen={true}
        onRequestClose={() => setModal(!modal)}
        className={modal ? "isOpen2" : "isClose2"}
        overlayClassName={modal ? "overlayIsOpen" : "overlayIsClose"}>
        {modal ? (
          <div>
            <h1>Title</h1>
            <p>ParaGragh</p>
          </div>
        ) : null}

        <button
          onClick={() => {
            setModal(!modal);
          }}>
          Close
        </button>
      </Modal>
      <div>
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
      <div></div>
      Note : Opening animation/transition works <br /> Closing
      animation/transition needs a className changing
    </div>
  );
};

export default ReactModal;
