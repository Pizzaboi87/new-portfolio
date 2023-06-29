import {
  alegria,
  graphker,
  phantom,
  teleperformance,
  krf,
  ke,
  szte,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#projects",
    title: "Projects",
  },
  {
    id: "#contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Development",
    image: "cards/PW87-react-development.webp",
  },
  {
    title: "Creativity",
    image: "cards/PW87-creativity.webp",
  },
  {
    title: "FERN Stack",
    image: "cards/PW87-fern-stack.webp",
  },
  {
    title: "Logical Thinking",
    image: "cards/PW87-logical-thinking.webp",
  },
];

const techLogos = [
  "logos:firebase",
  "logos:html-5",
  "logos:css-3",
  "logos:javascript",
  "devicon:typescript",
  "logos:react",
  "skill-icons:git",
  "logos:figma",
  "logos:bootstrap",
  "logos:c-sharp",
  "logos:unity",
  "logos:nextjs-icon",
  "logos:nodejs-icon",
  "logos:node-sass",
  "logos:redux",
  "logos:tailwindcss-icon",
  "logos:mysql-icon",
  "logos:expo-icon",
];

const education = [
  {
    title: "Computer Science BSc.",
    company_name: "University of Szeged",
    icon: szte,
    iconBg: "#ff8d00",
    date: "2023 -",
    points: ["Szeged, Hungary"],
  },
  {
    title: "Actor MA.",
    company_name: "University of Kaposvar",
    icon: ke,
    iconBg: "#ff8d00",
    date: "2008 - 2013",
    points: ["Kaposvar, Hungary"],
  },
  {
    title: "Tourism and Catering BSc.",
    company_name: "Robert Karoly College",
    icon: krf,
    iconBg: "#ff8d00",
    date: "2006 - 2007",
    points: ["Gyongyos, Hungary"],
  },
];

const experiences = [
  {
    title: "Customer Service Representative",
    company_name: "Teleperformance Greece",
    icon: teleperformance,
    iconBg: "#ff8d00",
    date: "February 2020 -",
    points: [
      "Answered incoming calls or social media messages and managed the complaints and questions of the customers. Documented all call information according to the standard procedures.",
      "Successfully handled around 900 calls per month.",
      "Achieved a constant high QA monitoring score, 98.56% average.",
      "Handled social media with Sprinklr 40-50 issues on a monthly basis.",
      "Reached high position (top 5) in the monthly performance ranking.",
    ],
  },
  {
    title: "Assistant Receptionist",
    company_name: "Alegria Mar Mediterrania",
    icon: alegria,
    iconBg: "#ff8d00",
    date: "May 2019 - Oct 2019",
    points: [
      "Originally started as a bell-boy but developed Spanish language and after a few months accomplished the clerical tasks of the reception as a daily routine in a four star hotel with 140+ rooms.",
      "Provided accurate, valid and complete information to the guests.",
      "Adapted easily to different types of people.",
      "Treated all data and personal information of the guests with the utmost confidentiality.",
    ],
  },
  {
    title: "Account Manager",
    company_name: "Graph-Ker Kft.",
    icon: graphker,
    iconBg: "#ff8d00",
    date: "Jun 2014 - Jun 2018",
    points: [
      "Built and operated strong, long-lasting client relationships for 4 years while ensured and delivered timely and successfully the products according to the needs of the customers.",
      "Trained and motivated over 300 partners in order to resell products and helped with recommendations.",
      "In the second year promoted and from this time reached more than 150 educational institutions monthly.",
      "Increased book sales around 20% annually.",
    ],
  },
  {
    title: "Junior Project Manager",
    company_name: "Phantom-Csoport Kft.",
    icon: phantom,
    iconBg: "#ff8d00",
    date: "Aug 2013 - Mar 2014",
    points: [
      "Coordinated over 150+ the mystery shoppers monthly in order to collect all necessary data.",
      "Gathered and documented all project (5-7 per month) results and reported to the management.",
      "Recommended innovative ideas that facilitated the daily tasks for a 30+ member team.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: alegria,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: alegria,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: alegria,
    source_code_link: "https://github.com/",
  },
];

export { services, education, experiences, testimonials, projects, techLogos };
