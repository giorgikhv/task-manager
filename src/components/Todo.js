import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function backDropHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={backDropHandler} onConfirm={backDropHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={backDropHandler} />}
    </div>
  );
}

export default Todo;
