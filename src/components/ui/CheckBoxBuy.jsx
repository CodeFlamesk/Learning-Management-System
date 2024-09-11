import React from "react";
import Paragraph from "./Paragraph";
import styles from "./styleCheckBox.module.css";

const CheckBoxBuy = ({ id, children, customStyles, isChecked, onChange }) => {
    return (
        <label className={styles["checkbox-wrapper-buy"]} htmlFor={id}> <input className={styles["checkbox-element-buy"]} type="checkbox"
            checked={isChecked}
            onChange={() => onChange((prev) => !prev)}
            id={id} />
            <Paragraph htmlFor={id} id={id} styles="flex w-full leading-4">{children}</Paragraph>
        </label>
    );
};

export default CheckBoxBuy;

