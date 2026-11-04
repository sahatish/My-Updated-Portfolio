// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import ManualTestingLogo from './assets/tech_logo/ManualTesting.png';
import BugTrackingLogo from './assets/tech_logo/BugTracking.png';
import TestCaseDesignLogo from './assets/tech_logo/TestCaseDesign.png';
import SDLCLogo from './assets/tech_logo/SDLC.png';
import STLCLogo from './assets/tech_logo/STLC.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import SwasthyaChetnaLogo from './assets/company_logo/SwasthyaChetna_logo.jpg';
import VaultsphereLogo from './assets/company_logo/vaultsphere_logo.jpg';


// Education Section Logo's

import ParulLogo from './assets/education_logo/Parul_logo.jpg';
import NEBLogo from './assets/education_logo/NEB_logo.jpg';


// Project Section Logo's

import bookstoreappLogo from './assets/work_logo/bookstore_app.jpg';
import agritechLogo from './assets/work_logo/agri_tech.jpg';
import weatherappLogo from './assets/work_logo/weather_app.jpg';
import hotelappLogo from './assets/work_logo/hotel_app.jpg';
import crowdfundingLogo from './assets/work_logo/crowdfunding.jpg';
import nutriSnapLogo from './assets/work_logo/nutrisnap.jpg';
import ipmpLogo from './assets/work_logo/ipmp.jpg';
import assessSphereLogo from './assets/work_logo/assesssphere.jpg';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },

      { name: 'Redux', logo: reduxLogo },

      { name: 'Tailwind CSS', logo: tailwindcssLogo },

      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [

      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'ManualTesting', logo: ManualTestingLogo },
      { name: 'TestCaseDesign', logo: TestCaseDesignLogo },
      { name: 'BugTracking', logo: BugTrackingLogo },
      { name: 'SDLC', logo: SDLCLogo },
      { name: 'STLC', logo: STLCLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },

    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: SwasthyaChetnaLogo,
    role: "UI/UX Developer",
    company: "Swasthya Chetna Private Limited Vadodara Gujarat India",
    date: " 2026 - 3 months",
    desc: "Crowdfunding Platform for Social Causes - Developed a full-stack crowdfunding platform using the MERN stack that empowers users to create, discover, and support social causes. Implemented secure authentication, campaign management, donation tracking, and admin controls using modern web technologies.",
    skills: [
      "MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"
    ],
  },

  {
    id: 1,
    img: VaultsphereLogo,
    role: "Full Stack Developer",
    company: "Vaultsphereai Technologies Pvt Ltd Bangalore",
    date: "2025 - 6 months",
    desc: "Quiz Application (AssessSphere) - Developed a full-stack quiz application using the MERN stack that enables organizations to conduct secure recruitment assessments with instant evaluation and performance insights. Implemented admin dashboard, quiz management, student tracking, and result analytics.",
    skills: [
      "MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"
    ],
  },

];

export const education = [
  {
    id: 0,
    img: ParulLogo,
    school: "Parul University(PU), Vadodara, Gujarat India",
    date: "june 2022 - June 2026",
    grade: "7.8 CGPA",
    desc: "I am  pursing my Bachelor of Technology (B.Tech) in Computer Science from Parul University, Gujarat. During my time at PU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. ",
    degree: "Bachelor of Technology in Computer Science & Engineering - B.Tech",
  },

  {
    id: 1,
    img: NEBLogo,
    school: "Mithila institute of Technology , Janakpur Nepal",
    date: "2019 - 2021",
    grade: "81%",
    desc: "I have completed my intermediate from Mithila institute of Technology , Janakpur Nepal, where I studied Physics, Chemistry, and Mathematics.",
    degree: "Grade(XII) - PCM(Physics, Chemsitry and Mathematics) ",
  },
  {
    id: 3,
    img: NEBLogo,
    school: "Bhadrakali Secondary English Boarding School, Janakpur Nepal.",
    date: "2019",
    grade: "76.25%",
    desc: "I have completed my secondary education fromBhadrakali Secondary English Boarding School, Janakpur Nepal.",
    degree: "Grade(X), Mathematics, Science and English",
  },
];

export const projects = [
  {
    id: 0,
    title: "CrowdFunding Platform For Social Causes",
    description:
      "A full-stack crowdfunding platform built with the MERN stack that empowers users to create, discover, and support genuine social causes. Supports fundraising for medical emergencies, quality education, disaster relief, and animal welfare with 0% platform fee and audit-certified security. Features direct payouts, campaign management, and transparent fund tracking.",
    image: crowdfundingLogo,
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    github: "https://github.com/sahatish/CrowdFunding-Platform-For-Social-Causes",
  },
  {
    id: 1,
    title: "NutriSnap AI - Smart Food Recognition & Calorie Estimation",
    description:
      "An AI-powered food recognition and calorie estimation web application built with the MERN stack. Uses image processing and machine learning to snap a photo of your plate and instantly decode its nutritional content. Tracks calories, macros, and micro-nutrients in seconds with accurate AI-powered nutritional estimates.",
    image: nutriSnapLogo,
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Image Processing", "AI/ML"],
    github: "https://github.com/sahatish/NutriSnap-AI-Smart-Food-Recognition-and-Calorie-Estimation-Using-Image-Processing-and-Ingredient-",
  },
  {
    id: 2,
    title: "Intellectual Property Management Portal (IPMP)",
    description:
      "A centralized IP management portal built with the MERN stack that helps securely register, track, and protect patents, trademarks, copyrights, and industrial designs. Features document versioning, upcoming renewal monitoring, collab channels, and professional compliance audit exports — all in one unified hub.",
    image: ipmpLogo,
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    github: "https://github.com/sahatish/Intellectual-property-management-portal-IPMP",
  },
  {
    id: 3,
    title: "Quiz Application - AssessSphere",
    description:
      "A full-stack quiz and assessment platform built with the MERN stack that enables organizations to recruit top talent through intelligent online assessments. Features secure exam conduction, instant evaluation, performance insights, an admin dashboard with platform-wide analytics, and support for multiple quiz categories.",
    image: assessSphereLogo,
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    github: "https://github.com/sahatish/Quiz_Application-AssessSphere",
  },
  {
    id: 4,
    title: "BookStore_app",
    description:
      "I developed an online bookstore where users can browse books, add them to the cart, and place orders. The front end is built with React.js for a responsive and interactive interface, while Node.js and Express.js handle the back-end operations. MongoDB is used to manage books, user accounts, and orders securely. This project highlights my skills in full-stack web development and creating smooth user experiences.",
    image: bookstoreappLogo,
    tags: ["HTML5", "CSS", "Javascript", "React.js", "MongoDB", "Node.js", "Express"],
    github: "https://github.com/sahatish/BookStoreApp",

  },
  {
    id: 5,
    title: "AgriTech Solutions",
    description:
      "AgriTech is a smart farming platform designed to make agriculture simpler and more profitable. It offers farmers an online marketplace  to trade products, rent or book farming tools, diagnose crop diseases,and get expert guidance on planting and harvesting by combining modern technology with pratical farming needs. AgriTech helps farmers improve efficency and increase productivity                                                                                             .                                             ",
    image: agritechLogo,
    tags: ["HTML5", "CSS", "Javascript", "Bootstrap", "Flask", "MySQL", "MongoDB", "TensorFlow"],
    github: "https://github.com/sahatish/AgriTech_solutions",

  },
  {
    id: 6,
    title: "Hotel_Booking_App",
    description:
      " This is an hotel booking system website with lots of facilities and luxuries provided to the customers , where a customers can book  rooms with an affordable prices.",
    image: hotelappLogo,
    tags: ["HTML", "CSS", "Bootstarp", "Django", "DSA - Searching & Sorting"],
    github: "https://github.com/sahatish/Hotel_booking_app",

  },

  {
    id: 7,
    title: "Weather_App",
    description:
      "A responsive Weather App built using React.js that fetches real-time weather data from a public API. It displays temperature, humidity, and weather conditions for any city with a clean and user-friendly interface.",
    image: weatherappLogo,
    tags: ["HTML", "CSS", "Javascript", "React.js"],
    github: "https://github.com/sahatish/Weather_app",
    webapp: "https://vercel.com/sahatishs-projects/weather-app",
  },

];
