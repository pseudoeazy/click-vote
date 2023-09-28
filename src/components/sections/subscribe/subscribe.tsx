import Image from "next/image";
import React from "react";
import startImage from "assets/images/star.png";
import styles from "./subscribe.module.scss";

export default function Subscribe() {
  return (
    <section className="flex flex-col items-center text-center mb-[12rem]">
      <div className="relative flex justify-center items-center mb-[2.5rem]">
        <Image src={startImage} alt="star" width={138} height={126} />
      </div>
      <h3 className="section__title">Subscribe to our blog updates</h3>
      <div className="section__description">
        Clickvote&apos;s latest articles, right in your inbox. Keep in touch
        with our news and updates.
      </div>

      <div className="mt-[3.75rem]">
        <form className="flex space-x-2">
          <input
            type="text"
            required
            name="subscribe"
            placeholder="Your email"
            className={`${styles.subscribe__input}`}
          />
          <button type="submit" className={`${styles.subscribe__button}`}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
