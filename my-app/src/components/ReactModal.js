import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ReactModal = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setModal(!modal);
        }}>
        Open Modal
      </button>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(!modal)}
        style={{
          overlay: {
            // width: "300px",
            // height: "300px",
            // left: "50%",
            // top: "50%",
            // transform: "translate(-50%, -50%)",
            // backgroundColor: "red",
          },
          content: { color: "orange" },
        }}>
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
