import Image from "next/image";
import React from "react";
import heartImage from "assets/images/heart.png";
import styles from "./embed.module.scss";
import Button from "components/button";
import FillHeart from "assets/icons/fill-heart";
import Upvote from "assets/icons/upvote";
import Star from "assets/icons/star";

export default function Embed() {
  return (
    <div className={`flex flex-col items-center ${styles.embed}`}>
      <div className="relative flex justify-center items-center">
        <Image src={heartImage} width={138} height={126} alt="heart" />
      </div>
      <h2 className={styles.embed__title}>
        Easily Embed Your Components Anywhere
      </h2>
      <div className="flex space-x-4 justify-center items-center mt-[3.12rem] mb-[3.75rem]">
        <Button text="Like" isCustom>
          <FillHeart />
        </Button>
        <Button text="Upvote">
          <Upvote />
        </Button>
        <Button text="Review">
          <Star />
        </Button>
      </div>
    </div>
  );
}
