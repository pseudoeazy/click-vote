import Image from "next/image";
import React from "react";
import startImage from "assets/images/star.png";
import styles from "./subscribe.module.scss";

export default function Subscribe() {
  return (
    <section className="flex flex-col items-center text-center mb-[12rem] ">
      <div className="relative flex justify-center items-center mb-[2.5rem]">
        <Image src={startImage} alt="star" width={138} height={126} />
      </div>
      <h3 className="section__title">Subscribe to our blog updates</h3>
      <div className="section__description px-8 lg:px-0">
        Clickvote&apos;s latest articles, right in your inbox.
        <span className="block lg:inline">
          {" "}
          Keep in touch with our news and updates.
        </span>
      </div>

      <div className="mt-[3.75rem]">
        <form className="flex lg:space-x-2 space-y-2 lg:space-y-0 flex-col lg:flex-row">
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
