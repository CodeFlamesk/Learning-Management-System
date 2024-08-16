import React from "react";

import styles from "./styleCheckBox.module.css";

const CheckBoxRating = ({ id, children, customStyles, isChecked, onChange }) => {
  return (
    <div className={`flex ${customStyles}`}>
      <label className={styles["checkbox-reating-wrapper"]} htmlFor={id}>
        <input className={styles["checkbox-reating-element"]} type="checkbox" 
        checked = {isChecked}
        onChange={()=> onChange((prev)=> !prev)}
        
        id={id} />
        
       <div className="flex gap-1">{children}</div>
      </label>
      
    </div>
  );
};

export default CheckBoxRating;