import React from "react";
import { ic_delete } from "react-icons-kit/md/ic_delete";
import { ic_edit } from "react-icons-kit/md/ic_edit";
import MyIcon from "../Icon/Icon";
import Container from "./../Container/Container";
import styles from "./TodosList.module.css";

const todos = [
  { id: 1, task: "learn Node JS and" },
  { id: 2, task: "do a bit of jogging" },
  { id: 3, task: "study Korean Language " },
  { id: 4, task: "flat design colors, Google's Material design scheme " },
  { id: 5, task: "study Korean Language " },
];

const TodosList = () => {
  const todosList = todos.map((todo) => (
    <li key={todo.id} className={styles.TodoItem}>
      <p>{todo.task}</p>
      <div className={styles.TodoItemActions}>
        <MyIcon icon={ic_edit} color="var(--bluish-gray)" />
        <MyIcon icon={ic_delete} color="var(--dark-red)" />
      </div>
    </li>
  ));

  return (
    <Container>
      <ul className={styles.TodosList}>{todosList}</ul>
    </Container>
  );
};

export default TodosList;
