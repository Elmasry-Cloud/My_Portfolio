// Skills Data
import Skill_1 from "../src/assets/HTML.jpeg";
import Skill_2 from "../src/assets/CSS.jpeg";
import Skill_3 from "../src/assets/icon-javascript.d5945e90.svg";
import Skill_4 from "../src/assets/icon-typescript.0f2fa2a9.svg";
import Skill_5 from "../src/assets/icon-react.f09634b9.svg";
import Skill_6 from "../src/assets/icon-nextjs.3f6cd734.svg";
import Skill_7 from "../src/assets/icon-tailwindcss.6649f603.svg";
import Skill_8 from "../src/assets/MUI.jpeg";
import Skill_9 from "../src/assets/Bootstrap.jpeg";
import Skill_10 from "../src/assets/icon-sass.9a084d16.svg";
import Skill_11 from "../src/assets/icon-figma.d571d8e2.svg";
import Skill_12 from "../src/assets/icon-git.e364d254.svg";

// ProjectsData
import ProjectData_1 from "../src/assets/Projects-Images/img (2).png";
import ProjectData_2 from "../src/assets/Projects-Images/img (4).png";
import ProjectData_3 from "../src/assets/Projects-Images/img (3).png";
import ProjectData_4 from "../src/assets/Projects-Images/img (5).png";
import ProjectData_5 from "../src/assets/Projects-Images/img (6).png";
import ProjectData_6 from "../src/assets/Projects-Images/img (7).png";
import ProjectData_7 from "../src/assets/Projects-Images/img (8).png";
import ProjectData_8 from "../src/assets/Projects-Images/img (9).png";
import ProjectData_9 from "../src/assets/Projects-Images/img (10).png";
import ProjectData_10 from "../src/assets/Projects-Images/img (11).png";
import ProjectData_11 from "../src/assets/Projects-Images/img (12).png";
import ProjectData_12 from "../src/assets/Projects-Images/img (13).png";
import ProjectData_13 from "../src/assets/Projects-Images/img (14).png";
import ProjectData_14 from "../src/assets/Projects-Images/img (15).png";
import ProjectData_15 from "../src/assets/Projects-Images/img (16).png";
import ProjectData_16 from "../src/assets/Projects-Images/img (17).png";
import ProjectData_17 from "../src/assets/Projects-Images/img (18).png";
import ProjectData_18 from "../src/assets/Projects-Images/img (22).png";
import ProjectData_19 from "../src/assets/Projects-Images/img (21).png";
import ProjectData_20 from "../src/assets/Projects-Images/img (20).png";
import ProjectData_21 from "../src/assets/Projects-Images/img (19).png";

export let SkillsData = [
  { skill_img: Skill_1, skill_dec: "HTML" },
  { skill_img: Skill_2, skill_dec: "CSS" },
  { skill_img: Skill_3, skill_dec: "Javascript" },
  { skill_img: Skill_4, skill_dec: "Typescript" },
  { skill_img: Skill_5, skill_dec: "React" },
  { skill_img: Skill_6, skill_dec: "Next.js" },
  { skill_img: Skill_7, skill_dec: "Tailwindcss" },
  { skill_img: Skill_8, skill_dec: "Material UI" },
  { skill_img: Skill_9, skill_dec: "Bootstrap" },
  { skill_img: Skill_10, skill_dec: "Sass" },
  { skill_img: Skill_11, skill_dec: "Figma" },
  { skill_img: Skill_12, skill_dec: "Git" },
];

export let ProjectsData = [
  {
    id: 100,
    name: "Clothes-Ecommerce",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "React Slick",
      "Tailwind CSS",
      "motion",
    ],
    link_demo: "https://elmasry-cloud.github.io/Clothes-Ecommerce/",
    img: ProjectData_1,
    description:
      "The website is a clothing e-commerce store with a simple and easy-to-use design. It allows users to log in or create a new account for shopping, with a clean and lightweight interface suitable for all devices.",
    type: "react",
  },
  {
    id: 101,
    name: "Mobile-Ecommerce",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "React Slick",
      "Tailwind CSS",
      "motion",
    ],
    link_demo: "https://elmasry-cloud.github.io/Mobile-Ecommerce/",
    img: ProjectData_2,
    description:
      "The website is a mobile e-commerce store with a simple and modern design. It allows users to browse products, add them to the wishlist or shopping cart, with an easy-to-use and responsive interface for all devices.",
    type: "react",
  },
  {
    id: 1,
    name: "Coffee-Page",
    skills: ["HTML", "CSS", "Javascript"],
    link_demo: "https://elmasry-cloud.github.io/Project_4_Coffee-Page/",
    img: ProjectData_3,
    description:
      "Coffee shop landing page showcasing products, services, and brand identity with an attractive visual design.",
    type: "js",
  },
  {
    id: 2,
    name: "Gym-Page",
    skills: ["HTML", "CSS", "Javascript"],
    link_demo: "https://elmasry-cloud.github.io/Project_3_Gym-Page/",
    img: ProjectData_4,
    description:
      "Gym website template displaying classes, trainers, schedules, and membership information with a modern UI design.",
    type: "js",
  },
  {
    id: 3,
    name: "Anime_Page",
    skills: ["HTML", "CSS", "Javascript"],
    link_demo: "https://elmasry-cloud.github.io/Project_7/",
    img: ProjectData_5,
    description:
      "Web project demonstrating UI layout and content structure with a responsive and user-friendly design.",
    type: "js",
  },
  {
    id: 4,
    name: "Digital",
    skills: ["HTML", "CSS"],
    link_demo: "https://elmasry-cloud.github.io/Project_1/",
    img: ProjectData_6,
    description:
      "Digital marketing landing page showcasing company services, team members, and customer testimonials with a responsive design.",
    type: "html-css",
  },
  {
    id: 5,
    name: "CRUD application",
    skills: ["HTML", "CSS", "Javascript"],
    link_demo: "https://elmasry-cloud.github.io/Project_8_CRUD/",
    img: ProjectData_7,
    description:
      "CRUD application built with JavaScript to create, read, update, and delete data dynamically in the browser.",
    type: "js",
  },
  {
    id: 6,
    name: "Memory-Game",
    skills: ["HTML", "CSS", "Javascript"],
    link_demo: "https://elmasry-cloud.github.io/Project_6_Memory-Game/",
    img: ProjectData_8,
    description:
      "Interactive memory matching game built with JavaScript to improve user engagement and logic skills.",
    type: "js",
  },
  {
    id: 7,
    name: "Book-marker",
    skills: ["HTML", "CSS", "Javascript"],
    link_demo: "https://elmasry-cloud.github.io/Book-marker/",
    img: ProjectData_9,
    description:
      "Bookmark manager application that allows users to save and manage website links using browser local storage.",
    type: "js",
  },
  {
    id: 8,
    name: "Quote-Generator",
    skills: ["HTML", "CSS", "Javascript"],
    link_demo: "https://elmasry-cloud.github.io/Quote-Generator/",
    img: ProjectData_10,
    description:
      "Random quote generator that displays different quotes dynamically with a simple and clean interface.",
    type: "js",
  },
  {
    id: 9,
    name: "CRUD-2",
    skills: ["HTML", "CSS", "Javascript"],
    link_demo: "https://elmasry-cloud.github.io/CRUD-2-Project/",
    img: ProjectData_11,
    description:
      "Second CRUD application project for practicing data management operations using HTML, CSS, and JavaScript.",
    type: "js",
  },
  {
    id: 10,
    name: "Modal-Project",
    skills: ["HTML", "CSS", "Javascript"],
    link_demo: "https://elmasry-cloud.github.io/Modal-Project/",
    img: ProjectData_12,
    description:
      "Simple modal window implementation to display dynamic content in a popup interface.",
    type: "js",
  },
  {
    id: 11,
    name: "Modal-2-Project",
    skills: ["HTML", "CSS", "Javascript"],
    link_demo: "https://elmasry-cloud.github.io/Modal-2-Project/",
    img: ProjectData_13,
    description:
      "Modal popup project demonstrating interactive pop-up windows for better user interaction.",
    type: "js",
  },
  // {
  //   id: 12,
  // name: "Slider",
  //   skills: ["HTML", "CSS", "Javascript"],
  //   link_demo: "https://elmasry-cloud.github.io/Project_5_Slider/",
  //   img: "",
  //   description:
  //     "Interactive image slider project for displaying content with smooth transitions and animations.",
  //   type: "js",
  // },
  // {
  //   id: 13,
  // name: "Login-Page",
  //   skills: ["HTML", "CSS", "Javascript"],
  //   link_demo: "https://elmasry-cloud.github.io/Login-2-Projects/",
  //   img: "",
  //   description:
  //     "Login page UI project demonstrating authentication form design using HTML, CSS, and JavaScript.",
  //   type: "js",
  // },
  {
    id: 14,
    name: "Template-1",
    skills: ["HTML", "CSS"],
    link_demo: "https://elmasry-cloud.github.io/Template_01/",
    img: ProjectData_14,
    description:
      "The website is a demo web template with a simple and organized design. It focuses on presenting a basic user interface with clear sections such as Home",
    type: "html-css",
  },
  {
    id: 15,
    name: "Template-2",
    skills: ["HTML", "CSS"],
    link_demo: "https://elmasry-cloud.github.io/Template_02/",
    img: ProjectData_15,
    description:
      "Business website template including services, portfolio, pricing plans, and contact sections with a fully responsive layout.",
    type: "html-css",
  },
  {
    id: 16,
    name: "Template-3",
    skills: ["HTML", "CSS"],
    link_demo: "https://elmasry-cloud.github.io/Template_03/",
    img: ProjectData_16,
    description:
      "Multi-section website template featuring articles, team members, testimonials, events, and pricing plans for large content projects.",
    type: "html-css",
  },
  {
    id: 17,
    name: "Admin dashboard",
    skills: ["HTML", "CSS"],
    link_demo: "https://elmasry-cloud.github.io/Template_04/",
    img: ProjectData_17,
    description:
      "Admin dashboard UI design for displaying statistics and managing data in a simple and organized layout.",
    type: "html-css",
  },
  {
    id: 18,
    name: "Education",
    skills: ["HTML", "CSS"],
    link_demo: "https://elmasry-cloud.github.io/Template_06_Education-Page/",
    img: ProjectData_18,
    description:
      "Educational landing page template for online courses or training platforms with a modern and user-friendly design.",
    type: "html-css",
  },
  {
    id: 19,
    name: "Shose-Page",
    skills: ["HTML", "CSS"],
    link_demo: "https://elmasry-cloud.github.io/Template_07_Shose-Page/",
    img: ProjectData_19,
    description:
      "Product landing page for shoes showcasing product details with an attractive and responsive design.",
    type: "html-css",
  },
  {
    id: 20,
    name: "Restaurant",
    skills: ["HTML", "CSS"],
    link_demo: "https://elmasry-cloud.github.io/Template_08_Restaurant/",
    img: ProjectData_20,
    description:
      "Restaurant website template to display menu, food items, and restaurant information with a professional layout.",
    type: "html-css",
  },
  {
    id: 21,
    name: "Anime",
    skills: ["HTML", "CSS"],
    link_demo: "https://elmasry-cloud.github.io/Template_09_Anime-Page/",
    img: ProjectData_21,
    description:
      "Anime-themed website template designed to present anime content with a visually appealing interface.",
    type: "html-css",
  },
  // {
  //   id: 22,
  // name: "",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //   ],
  //   link_demo: "https://elmasry-cloud.github.io/Template_10/",
  // img: "",
  //   description: "Bootstrap-based responsive website template suitable for general business and personal projects.",
  //   type: "html-css",
  // },
  // {
  //   id: 23,
  // name: "Anime",
  //   skills: ["HTML", "CSS"],
  //   link_demo: "https://elmasry-cloud.github.io/Project_2/",
  //   img: "",
  //   description:
  //     "General-purpose website template with a clean layout and multiple content sections for practice and demonstration.",
  //   type: "html-css",
  // },
];
