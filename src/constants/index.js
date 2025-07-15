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
    DLSU,
    self,
    carrent,
    jobit,
    tripguide,
    threejs,
    spacepunk,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Game Developer",
      icon: mobile,
    },
    {
      title: "Application Developer",
      icon: backend,
    },
    {
      title: "Front-End Developer",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "NFT Marketer/Junior Programmer",
      company_name: "SpacePunks",
      icon: spacepunk,
      iconBg: "#383E56",
      date: "March 2020 - July 2020",
      points: [
        "Developing and maintaining NFT applications using opensea using Remix Online IDE.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create NFT Products.",
        "Marketing NFT Products to boost sales of the products using Digital Marketing.",
        "Participating in meetings for upcoming roadmaps of the project.",
      ],
    },
    {
      title: "Computer Science Student",
      company_name: "De La Salle University Of Manila",
      icon: DLSU,
      iconBg: "#E6DEDD",
      date: "June 2021 - Present",
      points: [
        "Learning basics and understanding concepts of programming, logic and algorithms.",
        "Participating in projects within college activities to solve machine learning problems.",
        "Networking within our fellow students and brainstorming ideas for projects.",
        "Understanding real life problems and solutions.",
      ],
    },
    {
      title: "C Developer",
      company_name: "De La Salle University Of Manila",
      icon: DLSU,
      iconBg: "#383E56",
      date: "July 2021 - July 2023",
      points: [
        "Developing machine learning projects using dev c++ and vscode.",
        "Understanding the concept of C language and its implementation in other use cases.",
        "Implementing roadmaps and test cases to furthur our knowledge in documentation.",
        "Learning the foundation for learning other languages and its versatility.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Self-Employed",
      icon: self,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Making projects which can benifit clients in their own business use cases.",
        "Developing a website project for an engineering company (Eurosiatic).",
        "Implementing helpful application based projects to better and optimize solutions.",
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
      name: "ASES-Summit Website",
      description:
        "A Website for my ASES Manila Org a stanford affiliated org, for a summit event in the philippines.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "framermotionjs",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://wavemakerssummit.org/",
    },
    {
      name: "Dash Portfolio",
      description:
        "My Portfolio made with 3d models using threejs and react",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://mydashportfolio.netlify.app/",
    },
    {
      name: "TetrisJS_V1",
      description:
        "A simple Tetris Game made with Javascript, I've made many more games.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/AdiDash101/TetrisJS_v1",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };