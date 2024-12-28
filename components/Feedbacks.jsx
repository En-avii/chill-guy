import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

// Constants
const achievements = [
  {
    title: "Smart India Hackathon Finalist 2024",
    description:
      "Finalist for the Smart India Hackathon 2024. Developed an innovative solution for monitoring construction progress in building projects.",
    image: "/assets/images/sih-finalist.jpg", // Replace with the actual path to your image
    link: "https://www.sih.gov.in", // Link to the official SIH website
    photoLink: "https://example.com/sih-photo", // Replace with the actual link to the SIH photo
  },
  // Add other achievements as needed
];

// Motion Variants
const fadeIn = (direction = "up", type = "tween", delay = 0, duration = 1) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 50 : -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type,
      delay,
      duration,
    },
  },
});

const textVariant = () => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.1,
    },
  },
});

// AchievementCard Component
function AchievementCard({ index, title, description, image, link, photoLink }) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Tilt
        tiltMaxAngleX="10"
        tiltMaxAngleY="10"
        className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-5 rounded-2xl sm:w-[370px] w-full h-fit min-h-[590px] shadow-sm shadow-primary"
      >
        <div className="relative w-full h-[230px]">
          <div className="w-full h-full object-cover rounded-2xl relative">
            <Image
              src={image}
              alt={`${title}-image`}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
            <div
              onClick={() => window.open(link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              title="Visit Website"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l9-7 9 7M4 12h16v10H4z"
                />
              </svg>
            </div>
            <div
              onClick={() => window.open(photoLink, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              title="View Photo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20l-8-8m0 0l8-8m-8 8h16"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[24px]">
            {title}
          </h3>
          <p className="mt-2 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px]">
            {description}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
}

// Achievements Component
function Achievements() {
  return (
    <section className="xl:my-36 md:mx-36 p-8" id="achievements">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText"}>Milestones</p>
        <h2 className={"sectionHeadText"}>Achievements.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          These achievements highlight key milestones in my career, showcasing
          my ability to excel in competitive environments, deliver innovative
          solutions, and contribute meaningfully to impactful projects.
        </motion.p>
      </div>

      <div className="md:mt-20 mt-10 flex justify-center flex-wrap gap-7">
        {Array.isArray(achievements) && achievements.length > 0 ? (
          achievements.map((achievement, index) => (
            <AchievementCard
              key={`achievement-${index}`}
              index={index}
              {...achievement}
            />
          ))
        ) : (
          <p className="text-center text-ctnSecondaryLight">
            No achievements available at the moment.
          </p>
        )}
      </div>
    </section>
  );
}

export default Achievements;
