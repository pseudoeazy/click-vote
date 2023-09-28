import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "assets/images/hero.gif";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8 lg:mt-0">
      <div className="relative flex items-center justify-center">
        <Image
          width={600}
          height={500}
          src={heroImage}
          alt="hero"
          unoptimized={true}
        />
      </div>
      <h1 className={`flex flex-col text-center ${styles.hero__title}`}>
        <span>Like, Upvote And Review</span>
        <span>Any Context</span>
      </h1>
      <div className={`mb-10 mt-2 ${styles.hero__info}`}>
        Seamlessly Integrate Like, Upvote, and Review Components into Your App
      </div>
      <Link href="/#" className={styles.hero__cta}>
        Get Started{" "}
      </Link>
    </div>
  );
}
