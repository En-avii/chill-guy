import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

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
function AchievementCard({
  index,
  title,
  description,
  image,
  link,
  photoLink,
  teamIntroLink,
  teamMembers,
}) {
  const gradients = [
    "from-red-500 to-purple-600",
    "from-blue-600 to-indigo-500",
    "from-orange-500 to-red-600",
    "from-teal-500 to-emerald-400",
    "from-yellow-500 to-amber-600",
    "from-cyan-500 to-sky-400",
  ];

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-5 rounded-2xl sm:w-[370px] w-full h-fit min-h-[650px] shadow-sm shadow-primary"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt={`${title}-image`}
            layout="fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-between m-3 card-img_hover gap-2">
            {[
              { link, title: "Visit Website", icon: "link" },
              { link: photoLink, title: "View Certificate", icon: "certificate" },
              { link: teamIntroLink, title: "Meet the Team", icon: "team" },
            ].map((item, i) => (
              <div
                key={i}
                onClick={() => window.open(item.link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
                title={item.title}
              >
                {item.icon === "link" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h8m0 0v8m0-8L7 21"
                    />
                  </svg>
                ) : item.icon === "certificate" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path d="M12 0L9.66 7.75H1.5L8.58 12.5L6.34 20.25L12 15.5L17.66 20.25L15.42 12.5L22.5 7.75H14.34L12 0Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V5a3 3 0 1 1 6 0v2m-9 4h12m-7 4h2"
                    />
                  </svg>
                )}
              </div>
            ))}
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
        <div className="mt-4">
          <h4 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-semibold">
            Team Members:
          </h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {teamMembers.map((member, idx) => (
              <span
                key={idx}
                className={`text-[14px] font-medium px-2 py-1 rounded-md bg-gradient-to-r ${gradients[idx % gradients.length]} text-transparent bg-clip-text`}
              >
                {member}
              </span>
            ))}
          </div>
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
        {achievements.length > 0 ? (
          achievements.map((achievement, index) => (
            <AchievementCard key={index} index={index} {...achievement} />
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

// Updated Data Exports
const achievements = [
  {
    title: "Smart India Hackathon 2024 Finalist",
    description:
      "Finalist at IIT Gandhinagar. Built a platform using Python, OpenCV, TensorFlow, and Flask to monitor construction progress through image-based analysis.",
    image: "/assets/projects/Team.jpg",
    link: "https://www.sih.gov.in/",
    photoLink: "https://res.cloudinary.com/dl2nwcls0/image/upload/v1735483727/certificate_wb1zlo.jpg",
    teamIntroLink: "https://teammembers.intro",
    teamMembers: [
      "Alaukik Patel",
      "Ganesh Kumar",
      "Apoorva Yadav",
      "Apoorva Singh",
      "Shantanu Baban Kumbhirkar",
    ],
  },
];
