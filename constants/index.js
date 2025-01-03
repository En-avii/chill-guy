import GithubIcon from "../public/assets/icons/github.svg";
import LinkedInIcon from "../public/assets/icons/linkedin.svg";
import XIcon from "../public/assets/icons/x.svg";
import InstagramIcon from "../public/assets/icons/instagram.svg";
import FrontendIcon from "../public/assets/icons/frontend.svg";
import LeaderShipIcon from "../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "../public/assets/icons/freelance.svg";
import BackendIcon from "../public/assets/icons/backend.svg";
import FullStackIcon from "../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "PHP",
      icon: "/assets/tech/php.png",
      link: "https://www.php.net/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
};

const projects = [
  {
    name: "Decode",
    description:
      "A platform dedicated to publishing well-structured articles on Git, React, and JavaScript, aimed at simplifying complex concepts and providing valuable resources for developers. It features a clean, user-friendly interface and focuses on enhancing the learning experience for the tech community.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "React.js",
        color: "orange-text-gradient",
      },
      {
        name: "Git",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/decode.png",
    source_code_link: "https://github.com/En-avii/code",
    deployed_link: "https://aviiidecode.netlify.app",
  },
  {
    name: "Egatividhi Website",
    description:
      " A comprehensive platform designed to track and monitor construction progress using image-based analysis. Built as part of the Smart India Hackathon 2024, it leverages tools like Python, OpenCV, TensorFlow, and Flask to streamline project management and enhance efficiency for stakeholders.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "orange-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/egatividhi.png",
    source_code_link: "https://github.com/En-avii/eGatividhi-main.git",
    deployed_link: "https://egatividhi.netlify.app/",
  },
  {
    name: "Mobile App",
    description:
      "A mobile application developed for real-time tracking and monitoring of construction progress through image-based analysis. Built using Kotlin and Java, it integrates with backend technologies like REST APIs to deliver a seamless experience for project managers and stakeholders.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Kotlin",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "Chaquopy",
        color: "orange-text-gradient",
      },
      {
        name: "ML",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/app.jpg",
    source_code_link:
      "https://github.com/",
    deployed_link:
      "https://github.com/",
  },
  {
    name: "MovieNest ",
    description:
      "A movie discovery platform that allows users to search, explore, and review movies. Built using React, TailwindCSS, and TMDB API, the app provides a seamless user experience with features like advanced search, filtering, and detailed movie descriptions.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "TMDB API",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/movieapp.jpeg",
    source_code_link: "https://github.com/En-avii/client",
    deployed_link: "https://https://aviimovienest.vercel.app/",
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Tech Lead at Engify",
    icon: "/assets/company/engify.png",
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Nov 2023 ",
    points: [
      "Served as the Tech Lead at Engify from 2022 to 2023, leading technical initiatives, fostering team collaboration, and contributing to strategic planning.",
      "Led onboarding programs to ensure seamless integration of new members and alignment with Engify's mission, while providing technical mentorship.",
      "Developed the official Engify website, significantly enhancing the organization's online presence.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Web Developer",
    icon: "/assets/company/mod.png",
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Feb 2025 ",
    points: [
      "Developed dynamic and responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap, ensuring cross-browser compatibility and optimized front-end performance.",
      "Integrated REST APIs to enhance functionality and collaborated with the team to refine user experiences and streamline deployment processes.",
      "Gained hands-on experience in debugging, testing, and improving web application performance for seamless user interactions.",
    ],
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/En-avii",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/enaviii04",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/nostalgia_avii",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/_aviii.15",
  },
];

const heroTexts = [
  "Freelancer",
  500,
  "Full-Stack Developer",
  500,
  "Machine Learning Engineer",
  500,
  "Software Engineer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  projects,
  experiences,
  socials,
  heroTexts,
};
