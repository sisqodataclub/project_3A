import python from "../assets/python.png";
import sql from "../assets/sql.png";



import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "wor",
    title: "Work",
  },

  {
    id: "feedbacks",
    title: "Feedbacks",
  },


  {
    id: "contact",
    title: "Contact",
  },

  



/*
  {
    id: "https://www.google.com",
    title: "Google",
    external: true, 
  },

  {
    id: "/blog",
    title: "Blog",
    external: false, // or simply remove this line
    internal: true   // optional, for clarity
  },

  {
    id: "/logout",
    title: "Logout",
    external: false, // or simply remove this line
    internal: true   // optional, for clarity
  },

  {
    id: "/login",
    title: "Login/Register",
    external: false, // or simply remove this line
    internal: true   // optional, for clarity
  },

  
{
  id: "/profile",
  title: "Profile",
  external: false, // or simply remove this line
  internal: true   // optional, for clarity
}

*/
  


];

const services = [
  {
    title: "Website Developer",
    icon: web,
  },
  {
    title: "Data Analyst/Engineer",
    icon: mobile,
  },
  {
    title: "Market Researcher",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Html/Css",
    icon: html,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];






const testimonials = [
  {
    testimonial:
      "I had never fully grasped the value of data and market research for small businesses until I worked with Francis—his insights were transformative.",
    name: "Dennis",
    designation: "OWNER",
    company: "Ddeep Cleaning Services",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Francis does.",
    name: "Derrick",
    designation: "OWNER",
    company: "DERRICK DESIGNS",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Francis helped me launch my business from the ground up—from building a stunning website to conducting in-depth market research. His support was instrumental every step of the way.",
    name: "Lisa",
    designation: "CTO",
    company: "COMPLEX PROPERTIES",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Data Club Center",
    category: "Websites", // new field
    description:
      "Data Club Center offers comprehensive support solutions for small businesses...",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://www.dataclubcenter.com/",
  },
 



 

  {
    name: "Data Overview",
    category: "Data Science",
    description:
      "Data Overview: Summarize and Preview Your Dataset Like a Pro...",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "django", color: "green-text-gradient" },
      { name: "dataoverview", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/sisqodataclub/ml-ds/blob/e1881098af0298f8b932c7b066e5cb75214c0233/Data_Overview.ipynb/",
  },

/*

  {
    name: "Trip Guide",
    category: "Market Research",
    description:
      "A comprehensive travel booking platform that allows users to book flights...",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },

*/
];

export { services, technologies, experiences, testimonials, projects };

export const ACCESS_TOKEN = "access";
export const REFRESH_TOKEN = "refresh"
