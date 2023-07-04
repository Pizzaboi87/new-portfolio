import {
  alegria,
  graphker,
  phantom,
  teleperformance,
  krf,
  ke,
  szte,
} from '../assets';

export const navLinks = [
  {
    id: '#about',
    title: 'About',
  },
  {
    id: '#work',
    title: 'Work',
  },
  {
    id: '#portfolio',
    title: 'Portfolio',
  },
  {
    id: '#contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'React Development',
    image: 'cards/PW87-react-development.webp',
  },
  {
    title: 'Creativity',
    image: 'cards/PW87-creativity.webp',
  },
  {
    title: 'FERN Stack',
    image: 'cards/PW87-fern-stack.webp',
  },
  {
    title: 'Logical Thinking',
    image: 'cards/PW87-logical-thinking.webp',
  },
];

const techLogos = [
  'logos:firebase',
  'logos:html-5',
  'logos:css-3',
  'logos:javascript',
  'devicon:typescript',
  'logos:react',
  'skill-icons:git',
  'logos:figma',
  'logos:bootstrap',
  'logos:c-sharp',
  'logos:unity',
  'logos:nextjs-icon',
  'logos:nodejs-icon',
  'logos:node-sass',
  'logos:redux',
  'logos:tailwindcss-icon',
  'logos:mysql-icon',
  'logos:expo-icon',
];

const education = [
  {
    title: 'Computer Science BSc.',
    company_name: 'University of Szeged',
    icon: szte,
    iconBg: '#ff8d00',
    date: '2023 -',
    points: ['Szeged, Hungary'],
  },
  {
    title: 'Actor MA.',
    company_name: 'University of Kaposvar',
    icon: ke,
    iconBg: '#ff8d00',
    date: '2008 - 2013',
    points: ['Kaposvar, Hungary'],
  },
  {
    title: 'Tourism and Catering BSc.',
    company_name: 'Robert Karoly College',
    icon: krf,
    iconBg: '#ff8d00',
    date: '2006 - 2007',
    points: ['Gyongyos, Hungary'],
  },
];

const experiences = [
  {
    title: 'Customer Service Representative',
    company_name: 'Teleperformance Greece',
    icon: teleperformance,
    iconBg: '#ff8d00',
    date: 'February 2020 -',
    points: [
      'Answered incoming calls or social media messages and managed the complaints and questions of the customers. Documented all call information according to the standard procedures.',
      'Successfully handled around 900 calls per month.',
      'Achieved a constant high QA monitoring score, 98.56% average.',
      'Handled social media with Sprinklr 40-50 issues on a monthly basis.',
      'Reached high position (top 5) in the monthly performance ranking.',
    ],
  },
  {
    title: 'Assistant Receptionist',
    company_name: 'Alegria Mar Mediterrania',
    icon: alegria,
    iconBg: '#ff8d00',
    date: 'May 2019 - Oct 2019',
    points: [
      'Originally started as a bell-boy but developed Spanish language and after a few months accomplished the clerical tasks of the reception as a daily routine in a four star hotel with 140+ rooms.',
      'Provided accurate, valid and complete information to the guests.',
      'Adapted easily to different types of people.',
      'Treated all data and personal information of the guests with the utmost confidentiality.',
    ],
  },
  {
    title: 'Account Manager',
    company_name: 'Graph-Ker Kft.',
    icon: graphker,
    iconBg: '#ff8d00',
    date: 'Jun 2014 - Jun 2018',
    points: [
      'Built and operated strong, long-lasting client relationships for 4 years while ensured and delivered timely and successfully the products according to the needs of the customers.',
      'Trained and motivated over 300 partners in order to resell products and helped with recommendations.',
      'In the second year promoted and from this time reached more than 150 educational institutions monthly.',
      'Increased book sales around 20% annually.',
    ],
  },
  {
    title: 'Junior Project Manager',
    company_name: 'Phantom-Csoport Kft.',
    icon: phantom,
    iconBg: '#ff8d00',
    date: 'Aug 2013 - Mar 2014',
    points: [
      'Coordinated over 150+ the mystery shoppers monthly in order to collect all necessary data.',
      'Gathered and documented all project (5-7 per month) results and reported to the management.',
      'Recommended innovative ideas that facilitated the daily tasks for a 30+ member team.',
    ],
  },
];

const projects = [
  {
    id: '01',
    title: 'Food Order App',
    alt: 'React Native Food Order',
    link: 'https://peterweiser.com/portfolio/pizzaboi.apk',
    github: 'https://github.com/Pizzaboi87/react-native-food-order-app',
    cover: '/projects/food-order.webp',
    youTube: 'https://www.youtube.com/watch?v=5uNL8vnNPj8',
    details:
      'This project is a React Native food ordering app with Google login integration, powered by Firebase, Stripe payments, and featuring password reset, order history, address editing, and unique menu generated using Chat GPT. Tested on Android, the app aims to offer a functional, real-life experience in several cities around the world.',
  },
  {
    id: '02',
    title: 'Batman Fan Page',
    alt: 'Batman Fan Page',
    link: 'https://weiser-batman.netlify.app/',
    github: 'https://github.com/Pizzaboi87/batman',
    cover: '/projects/batman.webp',
    details:
      "This fully functional and responsive single page application was built with React from the ground up, without relying on any additional libraries or pre-made components. The data comes from both a modified API provided by Comic Vine and my own sources, which I've organized into a SQL database and stored on my own server. The back-end code is also available on GitHub.",
  },
  {
    id: '03',
    title: 'X-Wing Game',
    alt: 'X-Wing Shooter',
    link: 'https://weiser-x-wing.netlify.app',
    github: 'https://github.com/Pizzaboi87/x-wing',
    cover: '/projects/xwing.webp',
    details:
      "This project is the application of what was I learned in the courses of Frank's Laboratory YouTube channel. My goal was build a playable browser game on my own idea, only with HTML canvas, CSS and vanilla JavaScript.",
  },
  {
    id: '04',
    title: 'React Calculator',
    alt: 'React Calculator',
    link: 'https://weiser-calculator.netlify.app',
    github: 'https://github.com/Pizzaboi87/calculator',
    cover: '/projects/calculator.webp',
    details:
      'This project was built as a freeCodeCamp task where the main goal was build a calculator. It works with formula logic and observes order of operation precedence. The project was built by React.',
  },
  {
    id: '05',
    title: 'Droid Factory',
    alt: 'Industrial Automaton',
    link: 'https://weiser-automatoncorp.netlify.app',
    github: 'https://github.com/Pizzaboi87/industrial-automaton',
    cover: '/projects/automaton.webp',
    details:
      'This project is a fully responsive website about a fictional Droid Factory from the Star Wars universe. One of my first projects where I focused on the new possibilities offered by React, like Hooks, states, props or conditional rendering.',
  },
  {
    id: '06',
    title: 'Quizzical Game',
    alt: 'Quiz',
    link: 'https://weiser-quiz.netlify.app',
    github: 'https://github.com/Pizzaboi87/quizzical',
    cover: '/projects/quiz.webp',
    details:
      "This project is the final task of Bob Ziroll's React course on Scrimba. The main goal was build a quiz game with API call, that is functionally similar and has exactly the same design to the example that he presented on Figma.",
  },
];

const contact = [
  {
    text: '+36 70 206 6450',
    icon: 'mingcute:phone-call-fill',
    link: 'tel:+36-70-206-6450',
  },
  {
    text: 'peterweiser87@gmail.com',
    icon: 'clarity:email-solid',
    link: 'mailto:contact@peterweiser.com',
  },
  {
    text: 'https://linkedin.com/in/peterweiser87',
    icon: 'bi:linkedin',
    link: 'https://linkedin.com/in/peterweiser87',
  },
  {
    text: 'https://www.github.com/Pizzaboi87',
    icon: 'mdi:github',
    link: 'https://www.github.com/Pizzaboi87',
  },
];

const aboutSection = {
  sub: 'Introduction',
  titleFirst: 'About',
  titleSec: 'Me',
  text: 'I am a self-taught front-end developer with growing experience in React development, who gained proficiency in JavaScript, TypeScript, React Native, Firebase, and currently learning C# and Unity Game Engine as well. I enjoy creating visually appealing, user-friendly, and responsive web pages and applications. My humility helps me stay open to learning, while passion ensures my enthusiasm and motivation. Effective communication is crucial for me to understand expectations, accept feedback and collaborate with others.',
};

const experienceSection = {
  sub: 'What I have done so far',
  titleFirst: 'Work',
  titleSec: 'Experience',
};

const educationSection = {
  sub: 'Where have I studied so far?',
  titleFirst: 'Academic',
  titleSec: 'History',
};

const portfolioSection = {
  sub: 'Some of my previous projects',
  titleFirst: 'Portfolio',
  titleSec: 'Gallery',
  text: 'I am happy to share with you a collection of projects that have been instrumental in shaping my journey as a front-end developer, with a strong emphasis on React and React Native. These projects have served as invaluable learning experiences, illustrating my commitment to continuous improvement and honing my skills.',
};

const contactSection = {
  sub: 'Get in touch',
  titleFirst: 'Contact',
  titleSec: 'Me',
};

export {
  services,
  education,
  experiences,
  projects,
  techLogos,
  contact,
  aboutSection,
  experienceSection,
  educationSection,
  portfolioSection,
  contactSection,
};
