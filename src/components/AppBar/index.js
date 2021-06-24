import React from "react";
import Container from "../Container/Container";
import styles from "./AppBar.module.css";

const AppBar = (props) => {
  return (
    <div className={styles.AppBar}>
      <Container>
        <div className={styles.AppBarCenter}>
          <h1>TodoList</h1>
        </div>
      </Container>
    </div>
  );
};

export default AppBar;
