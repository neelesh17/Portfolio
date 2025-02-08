import {
  mobile,
  creator,
  web,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  jenkins,
  bash,
  python,
  vmware,
  goldman,
  moogle,
  benzag_labs,
  expense_tracker,
  crown_clothing,
  maynooth,
  yelpcamp,
  springboot,
  rabbitmq,
  zipkin,
  aws,
  mysql
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
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: creator,
  },
  {
    title: "Back End Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  }
];

const technologies = [
  {
    name: "RabbitMQ",
    icon: rabbitmq,
  },
  {
    name: "Zipkin",
    icon: zipkin,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "AWS",
    icon: aws,
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
    name: "Springboot",
    icon: springboot,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "jenkins",
    icon: jenkins,
  },
  {
    name: "bash script",
    icon: bash
  },
  {
    name: "python",
    icon: python
  },
  {
    name: "MySQL",
    icon: mysql
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer Intern",
    company_name: "Benzag Labs",
    icon: benzag_labs,
    iconBg: "#383E56",
    date: "Aug 2020 - Nov 2020",
    points: [
      "Worked with React, Reselect, Redux, Firebase, Razorpay Api, Node-Sass, SailsJS, REST Apis and MongoDB.",
      "Implemented state and async code management using redux and saga, dynamic loading SVG animation generator.",
      "Implemented server functionalities using best practies regarding REST api and sailsJS."
    ],
  },
  {
    title: "Software  Developer Intern",
    company_name: "Moogle",
    icon: moogle,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - May 2021",
    points: [
      "Modernized the application framework by migrating from VueJS to ReactJS. Incorporated design enhancements based on AdobeXD specifications. Implemented a multi-threading strategy using web workers optimize performance.",
      "Developed and deployed multiple AWS Lambda functions to enhance the functionality of the company’s server infrastructure. Additionally, optimized existing applications to achieve improved page load speeds."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "VMware",
    icon: vmware,
    iconBg: "#383E56",
    date: "Jan-2022 - July-2022",
    points: [
      "Established a system for comprehensive performance data collection across the fleet. Utilized Python scripting and MySQL queries to capture and ingest data to VMware Supercollider.",
      "Mode integration facilitated the creation of analytical reports with data visualizations in chart format for monitoring purposes.",
      "Developed workflows and automation scripts leveraging Python, YAML, YAQL, and shell scripting languages to streamline large-scale maintenance activities for VMC on Dell."
    ],
  },
  {
    title: "R&D Software Engineer",
    company_name: "VMware BY Broadcom",
    icon: vmware,
    iconBg: "#E6DEDD",
    date: "July 2022 - July 2024",
    points: [
      "Increased monitoring, triaging & remediating coverage for Software Defined Data Center(SDDC) by 30%.",
      "Automated and patched infrastructure components including AWS, vSphere, NSX, vSAN, and other elements of the VMware Suite using Python, Groovy, YAML, YAQL, and Bash scripting.",
      "Implemented a centralized data store leveraging MySQL and VMware Supercollider Data Lake to synchronize Jenkins pipelines, achieving a 40% reduction in errors across dependent pipelines.",
      "Developed and maintained 15+ Jenkins pipelines for VMware Cloud on Dell EMC fleet. Incorporated certificate & performance monitoring, & patch uploading to Amazon S3 storage, utilizing Java, Python, Groovy, MySQL, and APIs.",
      "Automated the deployment of microcode security patches for VMC on Dell fleets using Python scripts. Minimized human intervention & increased overall efficiency by 25%.",
      "Implemented and Managed 90+ auto triage and remediation workflows creation & bug fixes helping reduce the manual intervention for known issue resolution by 50%."
    ],
  },
  {
    title: "Analyst",
    company_name: "Goldman Sachs",
    icon: goldman,
    iconBg: "#383E56",
    date: "Nov 2024 - Present",
    points: [
      "Created ETL(Extract, Transform, Load) Big Data Pipelines and updated current pipelines to use iceberg, instead of Parquet and Hbase formats.",
      'Worked with Scala, Spark, Java, Sqoop, Datalake and AutoSys to create and maintain data pipelines.",
      "Upgraded the ETL Pipeline Codebase to use Spark 3.5.0 from spark 2.x as a part of integrating iceberg to the whole code base.",
      "Added interactive password to Sqoop for creating datalake sessions instead of static password."
    ],
  }
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
    name: "Yelp Camp",
    description:
      "The 'YelpCamp' project is a web-based platform designed for users to discover, review, and share information about campgrounds and camping experiences. Developed using HTML, CSS, JavaScript, and potentially Node.js with MongoDB, it likely includes features such as campground listings, user registration and authentication, campground reviews, search and filtering options, user profiles, and responsive design for usability across devices. The project is structured with separate directories for frontend and backend files, hosted on GitHub for version control, collaboration, and issue tracking. Documentation may be provided for setup and local development. Overall, 'YelpCamp' aims to offer users a comprehensive platform for exploring and contributing to the camping community.",   
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
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "ejs",
        color: "orange-text-gradient",
      }
    ],
    image: yelpcamp,
    source_code_link: "https://github.com/neelesh17/YelpCamp",
  },
  {
    name: "Crown Clothing",
    description:
      "The 'crown-clothing' project is an e-commerce platform focused on selling clothing items online. Developed with HTML, CSS, and JavaScript, it likely features a catalog of clothing products, user authentication for account creation and login, product filtering and sorting options, a shopping cart for adding items, and payment integration for secure transactions. The project is structured with separate directories for frontend and backend files, hosted on GitHub for version control and collaboration. With a responsive design, it aims to provide users with a seamless shopping experience across various devices.",    
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: crown_clothing,
    source_code_link: "https://github.com/neelesh17/crown-clothing",
  },
  {
    name: "Maynooth Furniture",
    description:
      "The 'Mayooth Furniture' project is an online platform designed for showcasing and potentially selling furniture products. It likely features a catalog of furniture items with descriptions, images, and prices, along with functionality for user registration, authentication, and shopping cart management. Developed using HTML, CSS, JavaScript, and possibly backend technologies, the project is likely structured with separate directories for frontend and backend files. With a responsive design and version control through GitHub, the project aims to provide users with a seamless experience for browsing and purchasing furniture items online.", 
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
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name:"styled-components",
        color: "orange-text-gradient",
      }
    ],
    image: maynooth,
    source_code_link: "https://github.com/neelesh17/Mayooth-Furniture",
  },
  {
    name: "Expense Tracker",
    description:
      "The project hosted on GitHub is an 'Expense Tracker' application designed to help users manage their finances more effectively. It allows users to log their expenses, categorize them, and visualize their spending habits over time. Key features include user authentication, expense logging with details like date and category, responsive design for accessibility across devices, and possibly visualization tools such as charts or graphs. The project is developed using HTML, CSS, JavaScript, and potentially other frameworks like Bootstrap and jQuery. It is structured with separate directories for stylesheets, JavaScript files, and third-party libraries. Overall, the project provides a platform for users to track and analyze their expenses for better financial management.", 
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "speechly",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      }
    ],
    image: expense_tracker,
    source_code_link: "https://github.com/neelesh17/Expense-Tracker",
  },
  {
    name: "SpringBoot Microservices",
    description:
      "This project demonstrates the implementation of microservices architecture using Spring Boot, emphasizing modularity, scalability, and RESTful API design. It features a modular architecture with separate microservices communicating via RESTful APIs, integrated with databases and security measures. Developers can use it as a reference for building their own microservices-based applications, contributing to its development and learning best practices in microservices design.", 
    tags: [
      {
        name: "Springboot",
        color: "blue-text-gradient",
      },
      {
        name: "Microservices",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "RESTful API",
        color: "orange-text-gradient",
      },
      {
        name: "Docker",
        color: "red-text-gradient",
      },
      {
        name: "Containerization",
        color: "yellow-text-gradient",
      },
      {
        name: "Database Integration",
        color:"purple-text-gradient"
      }
    ],
    image: springboot,
    source_code_link: "https://github.com/neelesh17/springboot-microservices-project",
  }
];

export { services, technologies, experiences, testimonials, projects };
