import React from "react";
import styles from "./SearchBar.module.css";
import { search } from "react-icons-kit/icomoon/search";
import MyIcon from "../Icon/Icon";

const SearchBar = () => {
  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchButton}>
        <MyIcon icon={search} color="gray" width={18} height={18} />
      </div>
    </div>
  );
};

export default SearchBar;
