import React, { useState } from "react";
import styles from "./AddTodoForm.module.css";
import { ic_arrow_forward } from "react-icons-kit/md/ic_arrow_forward";
import MyIcon from "./../Icon/Icon";
import Container from "../Container/Container";

const AddTodoForm = (props) => {
  const [input, setInput] = useState("");

  const onSubmitHanlder = (e) => {
    e.preventDefault();
    props.addTodo({
      id: Math.random() * 1000,
      task: input,
    });
  };

  return (
    <Container>
      <form className={styles.AddTodoForm} onSubmit={onSubmitHanlder}>
        <input
          type="text"
          className={styles.TodoInput}
          placeholder="Add a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span>
          <MyIcon icon={ic_arrow_forward} color="gray" />
        </span>
      </form>
    </Container>
  );
};

export default AddTodoForm;
