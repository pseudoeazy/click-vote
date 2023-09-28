import React from "react";
import styles from "./built-by.module.scss";

export default function BuiltByommunity() {
  return (
    <section className="flex flex-col items-center">
      <h3 className={styles.built__title}>Built by the community</h3>
      <p className={styles.built__info}>
        Open-source is in the heart of Novu. We keep all the source code and
        work publicly available. Join our community driven project with over
        3,000+ developers from around the world who contribute code and help
        building the modern notification infrastructure.
      </p>
    </section>
  );
}
