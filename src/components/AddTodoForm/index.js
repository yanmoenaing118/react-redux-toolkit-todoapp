import React from "react";
import styles from "./AddTodoForm.module.css";
import { ic_arrow_forward } from "react-icons-kit/md/ic_arrow_forward";
import MyIcon from "./../Icon/Icon";

const AddTodoForm = (props) => {
  return (
    <form className={styles.AddTodoForm}>
      <input
        type="text"
        className={styles.TodoInput}
        placeholder="Add a todo"
      />
      <span>
        <MyIcon icon={ic_arrow_forward} color="gray" />
      </span>
    </form>
  );
};

export default AddTodoForm;
