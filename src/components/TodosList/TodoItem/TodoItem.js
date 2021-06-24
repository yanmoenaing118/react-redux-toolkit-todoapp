import React, { useState } from "react";
import { ic_delete } from "react-icons-kit/md/ic_delete";
import { ic_edit } from "react-icons-kit/md/ic_edit";
import MyIcon from "./../../Icon/Icon";
import styles from "./TodoItem.module.css";
import Modal from "./../../Modal/Modal";
import Container from "./../../Container/Container";

let ConfirmBox = ({ toggleModal }) => {
  const deleteTodoItem = () => {
    toggleModal();
  };
  return (
    <div className={styles.ConfirmBox}>
      <h2>Are you sure to delete the item?</h2>
      <div>
        <button
          onClick={toggleModal}
          className={`${styles.Button} ${styles.ButtonCancel}`}
        >
          Cancel
        </button>
        <button
          onClick={deleteTodoItem}
          className={`${styles.Button} ${styles.ButtonDelete}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

ConfirmBox = React.memo(ConfirmBox);

const TodoItem = ({ todo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  console.log("[TodoItem.js] ", todo.id);
  return (
    <>
      <Modal open={isModalOpen}>
        <Container>
          <ConfirmBox toggleModal={toggleModal} />
        </Container>
      </Modal>
      <li key={todo.id} className={styles.TodoItem}>
        <p>{todo.task}</p>
        <div className={styles.TodoItemActions}>
          <div>
            <MyIcon icon={ic_edit} color="var(--bluish-gray)" />
          </div>
          <div onClick={toggleModal}>
            <MyIcon icon={ic_delete} color="var(--dark-red)" />
          </div>
        </div>
      </li>
    </>
  );
};

export default React.memo(TodoItem);
