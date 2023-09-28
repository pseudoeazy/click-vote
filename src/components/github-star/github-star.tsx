import Github from "assets/icons/github";
import React from "react";
import styles from "./github-star.module.scss";

export default function GithubStar() {
  return (
    <div className={`${styles.github} space-x-[0.62rem]`}>
      <div className="flex space-x-[0.62rem] items-center">
        <Github />
        <span>Star us</span>
      </div>
      <div className={styles.github__spacer}></div>
      <div className="flex items-center">21.9K</div>
    </div>
  );
}
