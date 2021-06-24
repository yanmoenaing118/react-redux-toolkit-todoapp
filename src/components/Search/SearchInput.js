import React from "react";
import MyIcon from "../Icon/Icon";
import styles from "./SearchInput.module.css";
import { cross } from "react-icons-kit/icomoon/cross";

const SearchInput = () => {
  return (
    <div className={styles.SearchInput}>
      <input type="text" className={styles.SearchInputForm} />
      <div className={styles.SearchInputClose}>
        <MyIcon icon={cross} />
      </div>
    </div>
  );
};

export default SearchInput;
