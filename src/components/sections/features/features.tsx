import React from "react";
import Image from "next/image";
import styles from "./features.module.scss";
import featureOneImage from "assets/images/feature-1.png";
import featureTwoImage from "assets/images/feature-2.png";
import featureThreeImage from "assets/images/feature-3.png";

const details = [
  {
    id: 1,
    title: `Monitor and test what your members like`,
    description: `   Look at the time-series of your likes. Understand where to put
        your efforts.`,
    image: featureOneImage,
  },
  {
    id: 2,
    title: `Handle unlimited amount of likes`,
    description: `Clickvote can handle and scale your system to match your traffic`,
    image: featureTwoImage,
  },
  {
    id: 3,
    title: `Integrate our system to yours.`,
    description: `Once we receive your likes, we send the Information to your System as you want it: API calls or listening to Kafka topics.`,
    image: featureThreeImage,
  },
];
export default function Features() {
  return (
    <section className="my-[10.62rem] ">
      <h3 className={styles.features__title}>features</h3>
      <div className="flex flex-col lg:flex-row items-center  lg:justify-center lg:space-x-8 space-y-8 lg:space-y-0">
        {details.map((detail, idx) => (
          <div className={styles.features__grid} key={idx}>
            <div
              key={detail.id}
              className="relative flex justify-center pt-10  rounded"
            >
              <Image
                src={detail.image}
                alt="feature-1"
                width={316}
                height={157}
                className="rounded"
              />
            </div>
            <div className="flex flex-col items-center px-8">
              <h5 className={styles.features__subtitle}>{detail.title}</h5>
              <p className={styles.features__info}>{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
