import React from "react";
import Link from "next/link";
import styles from "./embed.module.scss";

export default function EmbedYourComponent() {
  return (
    <div className={styles.embed}>
      <h3 className="section__title ">Embed Your Components Now</h3>
      <div className="flex justify-center space-x-8">
        <div className={`${styles.embed__box}`}>
          <h5 className={styles.embed__subtitle}>Self-Hosted</h5>
          <p className={styles.embed__info}>Run locally with docker-compose</p>
          <Link href="#" className={styles.embed__cta}>
            Read Docs
          </Link>
        </div>
        <div className={`${styles.embed__box}`}>
          <h5 className={styles.embed__subtitle}>Cloud</h5>
          <p className={styles.embed__info}>Use our free managed service</p>
          <Link href="#" className={styles.embed__cta}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
