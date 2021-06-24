import React from "react";

import Container from "./../Container/Container";
import TodoItem from "./TodoItem/TodoItem";
import styles from "./TodosList.module.css";

const TodosList = ({ todos }) => {
  const todosList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return (
    <Container>
      <ul className={styles.TodosList}>{todosList}</ul>
    </Container>
  );
};

export default React.memo(TodosList);
