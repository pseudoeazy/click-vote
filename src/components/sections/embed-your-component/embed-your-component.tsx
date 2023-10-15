import React from "react";
import Link from "next/link";
import styles from "./embed.module.scss";

export default function EmbedYourComponent() {
  return (
    <div className={`relative flex flex-col items-center ${styles.embed}`}>
      <h3 className="section__title">Embed Your Components Now</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-0">
        <div className={`${styles.embed__box}`}>
          <h5 className={styles.embed__subtitle}>Self-Hosted</h5>
          <p className={styles.embed__info}>Run locally with docker-compose</p>
          <Link href="#" className={`hover ${styles.embed__cta}`}>
            Read Docs
          </Link>
        </div>
        <div className={`${styles.embed__box}`}>
          <h5 className={styles.embed__subtitle}>Cloud</h5>
          <p className={styles.embed__info}>Use our free managed service</p>
          <Link href="#" className={`${styles.embed__cta} hover`}>
            Get Started
          </Link>
        </div>
      </div>
      <div className="background__community"></div>
    </div>
  );
}
