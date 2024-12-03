import {
  backend,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  python,
  mysql,
  agile,
  nuvama,
  hdfcergo,
  freddy,
  medone,
  machine,
  pythondev,
  guitar,
  genre,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: pythondev,
  },
  {
    title: "Machine Learning Developer",
    icon: machine,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Part time Guitarist",
    icon: guitar,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Agile",
    icon: agile
  },
];

const experiences = [
  {
    title: "AI Engineer - Intern",
    company_name: "HDFC ERGO General Insurance Company",
    icon: hdfcergo,
    iconBg: "#e31d24",
    date: "Jun 2023 - Sep 2023",
    points: [
      "Built an in-house data extraction API using Tesseract OCR and Flask, saving significant operational costs and eliminating dependency on external services",
      "Developed a CNN model achieving 96.52% accuracy, reducing policy file processing time from 2–3 days to 3 hours for 25,000 daily pdf input files",
      "Integrated multiple document recognition models into a single API with 90.37% accuracy, automating diverse document identification and eliminating manual tagging",
      "Optimized document masking via ResNet, cutting processing time by 63% (80s → 30s), streamlining workflows"
    ],
  },
  {
    title: "IT Business Analyst - Intern",
    company_name: "Nuvama Wealth and Investment Limited (previously Edelweiss)",
    icon: nuvama,
    iconBg: "#03002f",
    date: "Nov 2021 - Apr 2022",
    points: [
      "Conducted user data analysis for the Account Opening project, driving a 10% improvement in efficiency by aligning business goals with user insights",
      "Managed over 100 test cases weekly for each new web app update, streamlining the update process and enhancing bug-fix workflows",
      "Coordinated with cross-functional teams using JIRA and Confluence, accelerating project timelines and ensuring smooth sprint transitions",
    ],
  },
  
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "GenreXpert: Multi-Genre Movie Labeler",
    description:
      "A NLP model, using Logistic Regression and OneVsRestClassifier, to achieve precise multi-label genre classification for movies based on both movie titles and plot summaries. ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "Sci-kit learn",
        color: "pink-text-gradient",
      },
    ],
    image: genre,
    source_code_link: "https://github.com/soham0912/GenreXpert",
  },
  {
    name: "FRED-Net",
    description:
      "Fetching economic time-series data from FRED on a real-time basis using scraping techniques and performing TSA and statistical methods for visualization and prediction using various RNN models and time-series models.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Keras",
        color: "green-text-gradient",
      },
      {
        name: "FRED API",
        color: "pink-text-gradient",
      },
    ],
    image: freddy,
    source_code_link: "https://github.com/soham0912/FRED-Net",
  },
  {
    name: "medONE",
    description:
      "A react web application for the pharmacists to manage medicine inventories. Medicines can be bought on the trading platform created.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: medone,
    source_code_link: "https://github.com/soham0912/medONE",
  },
];

export { services, technologies, experiences, testimonials, projects };
