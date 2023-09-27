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
    gliffy,
    carrent,
    jobit,
    tripguide,
    threejs,
    perforce,
    invitae,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Devops",
      icon: backend,
    },
    {
      title: "Site Reliability",
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
      title: "Site Reliability Engineer",
      company_name: "Invitae",
      icon: invitae,
      iconBg: "#383E56",
      date: "Jan 2022 - Sept 2022",
      points: [
        "Developed and extended Terraform projects to optimize the management of Postgres, MongoDB, and MySQL databases.",
        "Authored comprehensive documentation for maintenance windows and root cause analysis, ensuring effective communication and execution of critical operational tasks.",
        "Pioneered creation of bash scripts in an effort to streamline onboarding process for new hires.",
        "Collaborated with Devs, QA, and DevOps teams to design and implement new stacks.",
        "Actively pursued and gained knowledge in an array of AWS resources contributing to a heightened level of comfortability in managing cloud services.",
      ],
    },
    {
      title: "Software Engineer II",
      company_name: "Perforce",
      icon: perforce,
      iconBg: "#E6DEDD",
      date: "Sept 2020 - Jan 2022",
      points: [
        "Executed a smooth database split and upgrade for AWS RDS Postgres, enhancing data architecture and performance.",
        "Conducted comprehensive regression and performance testing for Jira and Confluence Atlassian applications .",
        "Functioned as Scrum Master, driving essential Agile practices: sprint planning, retros, backlog grooming, issue resolution.",
        "Implemented Travis CI to enhance workflow automation and streamline development processes.",
        "Designed and established new Terraform module repositories, fostering code reusability and maintainability while enhancing infrastructure provisioning efficiency.",
      ],
    },
    {
      title: "Junior DevOps Engineer",
      company_name: "Gliffy",
      icon: gliffy,
      iconBg: "#383E56",
      date: "Aug 2018 - Sept 2020",
      points: [
        "Successfully migrated AWS Opsworks stack to Elastic Beanstalk, streamlining deployment processes and enhancing scalability.",
        "Orchestrated cross-functional collaboration with international teams in Romania, Canada, Estonia, and India ensuring seamless communication and project alignment.",
        "Leveraged Jenkins to create automation workflows, significantly expediting the deployment of new containers and enhancing release processes.",
        "Terraform experience decoupling a monolithic project, enhancing scalability and manageability, while implementing dynamic configuration to replace hard-coded values.",
        "Utilized Flyway to implement a structured and version-controlled approach to manage database schema changes, ensuring consistency across different environments.",
        
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
      image: carrent,
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
      image: jobit,
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
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };