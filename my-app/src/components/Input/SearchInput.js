import React from "react";
import styles from "./MyInput.module.css";

const SearchInput=React.forwardRef((props,ref)=>{
    return(
        <input ref={ref}  {...props} className={styles.searchInput} onChange={props.onChange}></input>
    )
});
export default SearchInput;