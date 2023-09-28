import React from "react";
import Heart from "assets/icons/heart";
import styles from "./like.module.scss";

const classes = {};
export default function Like() {
  return (
    <div className={`${styles.like}`}>
      <div className="flex space-x-[0.53rem] items-center">
        <Heart />
        <span>Like</span>
      </div>
      <div className={styles.like__spacer}></div>
      <div className="flex items-center">400</div>
    </div>
  );
}
