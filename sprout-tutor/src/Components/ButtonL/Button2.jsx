// import React from 'react'
import styles from "./button2.module.css";

function Button({ name }) {
  return (
    <>
      <button className={styles.button}>{name}</button>
    </>
  );
}

export default Button;
