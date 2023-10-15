import Image from "next/image";
import React from "react";
import heartImage from "assets/images/heart.png";
import styles from "./embed.module.scss";
import Button from "components/button";
import { ArrowBigUp, Heart, Star } from "lucide-react";

export default function Embed() {
  return (
    <div className={`flex flex-col items-center ${styles.embed}`}>
      <div className="relative flex justify-center items-center">
        <Image src={heartImage} width={138} height={126} alt="heart" />
      </div>
      <h2 className={styles.embed__title}>
        Easily Embed Your Components Anywhere
      </h2>
      <div className="flex flex-col  md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center items-center mt-[3.12rem] mb-[3.75rem]">
        <Button text="Like" isCustom>
          <Heart className="text-purple-500" />
        </Button>
        <Button text="Upvote">
          <ArrowBigUp className="text-purple-500 h-8 w-8" />
        </Button>
        <Button text="Review" isCustom>
          <Star className="text-purple-500 h-8 w-8" />
        </Button>
      </div>
    </div>
  );
}
