import React from "react";
import styles from "./button.module.scss";

interface Props {
  isCustom?: boolean;
  text: string;
  children: React.ReactNode;
}

export default function Button({ isCustom, text, children }: Props) {
  return (
    <button
      type="button"
      className={`flex space-x-1 ${styles.button}  ${
        styles[isCustom ? "button--1" : "button--2"]
      }`}
    >
      {children}
      <span>{text}</span>
    </button>
  );
}
