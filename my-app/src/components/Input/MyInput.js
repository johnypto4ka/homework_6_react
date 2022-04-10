import React from "react";
import styles from "./MyInput.module.css";

const MyInput=React.forwardRef((props,ref)=>{
    return(
        <input ref={ref}  {...props} className={styles.myInput} onChange={props.onChange}></input>
    )
});
export default MyInput;