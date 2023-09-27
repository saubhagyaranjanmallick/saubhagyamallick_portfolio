//Home Page
const greeting = {
  title: "Hello 👋",
  title2: "Saubhagya",
  logo_name: "Srm",
  nickname: "pintu",
  fullname: "Saubhagya Ranjan Mallick",
  subTitle:
    "I am a Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1pjFUz3iU0WQJG_4lzd4gFL51UoAvhg34/view?usp=sharing",
  portfolio_repository: "https://github.com/saubhagyaranjanmallick",
  githubProfile: "https://github.com/saubhagyaranjanmallick",
  mail: "mailto:saubhagyaranjanmallick99@gmail.com",
};

const socialMediaLinks = [
  /* My Social Media Link */
  {
    name: "Github",
    link: "https://github.com/SOUBHAGYA32",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/soubhagya32/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/c/DesignAndCoding",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
  {
    name: "Gmail",
    link: "mailto:soubhagyakhuku851@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/soubhagya_khuku",
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/soubhagya32_/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using HTML5,CSS, JS, Tailwind CSS, Bootstrap, React",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node, Express & Django",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          icon: "bxl:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          icon: "bxl:css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Tailwind CSS",
          icon: "bxl:tailwind-css",
          style: {
            color: "#38BDF8",
          },
        },
        {
          skillName: "JavaScript",
          icon: "bxl:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          icon: "bxl:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          icon: "fa-brands:node-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          icon: "fa-brands:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          icon: "fa-brands:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Python",
          icon: "fa-brands:python",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          icon: "bxl:aws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          icon: "bxl:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          icon: "bxl:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          icon: "file-icons:adobe-xd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          icon: "bxl:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          icon: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Photoshop",
          icon: "file-icons:adobe-photoshop",
          style: {
            color: "#38BDF8",
          },
        },
      ],
    },
  ],
};

//Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      icon: "fa-brands:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/soubhagya801832",
    },
    {
      siteName: "Codechef",
      icon: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/",
    },
    {
      siteName: "Codeforces",
      icon: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/",
    },
    {
      siteName: "Hackerearth",
      icon: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/",
    },
    {
      siteName: "Kaggle",
      icon: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "College of IT and Management Education(CIME), Bhubaneswar",
      subtitle: "Master in Computer Application(MCA)",
      logo_path:
        "https://drive.google.com/file/d/1qe9u3B8muFB1hr9ul9UbyMXSHBNf_57I/view?usp=sharing",
      alt_name: "CIME Bhubaneswar",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on SAP ABAP, Python, Cloud Computing(AWS, Azure) and Full Stack Development.",
        "⚡ I have received award from respected director for consistently best performance in academics.",
        "⚡ I have Globaly Certified on SAP ABAP and completed my Internship on RPA Blue Prism. Currently donig my internship on AWS Cloud.",
        "⚡ I have done my academic projects on Python Django, MERN Stack",
        "⚡ I have done my Final year project on MERN Stack with AWS and Stripe Payment Gateway Subscription.",
      ],
      website_link: "http://www.cime.ac.in/",
    },
    {
      title: "North Odisha University (NOU), Baripada",
      subtitle: "BSc. in Physics",
      logo_path: "",
      alt_name: "NOU Baripada",
      duration: "2014-2017",
      descriptions: [
        "⚡ I have studied core subjects like Physics, Math, English, Science etc.",
        "⚡ I have studied in-depth knowledge of the principles of Physics and its practical application & theories.",
        "⚡ B.Sc in Physics Honours are Mechanics, Thermal Physics, Electromagnetic Theory, Mathematics, and many more. The job scope after completing B.Sc Physics Hons is vast with employment opportunities in sectors such as Astronomy, Education Sector, Research, and Development Firms, Hospitals, etc.",
      ],
      website_link:
        "https://images.collegedunia.com/public/college_data/images/logos/1482314364cvbn.png",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Javascript - Basics to Advence",
      subtitle: "Javascript",
      icon: "logos:javascript",
      certificate_link: "",
      alt_name: "JS",
      color: "#f70042",
    },
    {
      title: "React JS - ES6 [2022]",
      subtitle: "Modern Javascript",
      icon: "logos:react",
      certificate_link: "",
      alt_name: "JS",
      color: "#f70042",
    },

    {
      title: "AWS Cloud - Internship",
      subtitle: " amazon web services",
      icon: "logos:java",
      certificate_link:
        "https://www.udemy.com/certificate/UC-75b466e6-e9f3-49bf-b3a9-5ac3b0d8609d/",
      alt_name: "java",
      color: "#D83B0199",
    },
    {
      title: "React JS",
      subtitle: "-Frontend Web Development ",
      icon: "fa-brands:react",
      certificate_link:
        "https://www.udemy.com/certificate/UC-decedaa8-83cd-4f0a-a880-1a90cf8d1256/",
      alt_name: "React JS",
      color: "#61DAFB",
    },
    {
      title: "MERN Stack",
      subtitle: "- Full Stack Development",
      icon: "bi:stack",
      certificate_link:
        "https://www.udemy.com/certificate/UC-8c9dd822-f294-4d3d-a849-f53332fb2ae2/",
      alt_name: "Full Stack Development",
      color: "#D83B0199",
    },
    {
      title: "Node JS",
      subtitle: "- Udemy",
      icon: "logos:nodejs",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2031dba4-a2f8-4b77-a629-cbdba5b33e26/",
      alt_name: "Node JS",
      color: "#339933",
    },
    {
      title: "NPTEL",
      subtitle: "- Cloud Computing",
      icon: "logos:nodejs",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2031dba4-a2f8-4b77-a629-cbdba5b33e26/",
      alt_name: "Node JS",
      color: "#339933",
    },
    {
      title: "NPTEL",
      subtitle: "- Internet Of Things",
      icon: "logos:nodejs",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2031dba4-a2f8-4b77-a629-cbdba5b33e26/",
      alt_name: "Node JS",
      color: "#339933",
    },
    {
      title: "NPTEL",
      subtitle: "- Computer Fraphics",
      icon: "logos:nodejs",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2031dba4-a2f8-4b77-a629-cbdba5b33e26/",
      alt_name: "Node JS",
      color: "#339933",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Leadership",
  description:
    "Currently I am working as an Associate Developer on TV and Mobile Apps - POD. I have done my internship on AWS and Blue Prism under AICTE.I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "Muvi Entertainment Pvt. Ltd.",
          company_url: "https://www.muvi.com/",
          logo_path:
            "https://www.muvi.com/wp-content/themes/muvi/images/muvi-logo.svg",
          duration: "December 2022- PRESENT",
          location: "Bhubaneswar, Odisha",
          description:
            "I am working as an iOS Developer in Mobile and TV Apps - POD. Currently working on the Apple TV Development and iOS Mobile Apps. Building OTT Platform TV Apps in Swift 5 and XCode.",
          color: "#0879bf",
        },
        {
          title: "Associate Software Engineer",
          company: "Muvi Entertainment Pvt. Ltd.",
          company_url: "https://www.muvi.com/",
          logo_path:
            "https://www.muvi.com/wp-content/themes/muvi/images/muvi-logo.svg",
          duration: "Jan 2022 - PRESENT",
          location: "Bhubaneswar, Odisha",
          description:
            "I am working as an Associate Software Engineer in Mobile and TV Apps - POD. Currently working on the LG WebOS Tv and Samsung Tizen OS TV Apps. Building OTT Platform TV Apps in WebOS and Tizen OS.",
          color: "#0879bf",
        },
        {
          title: "Graphics Designer",
          company: "Ztransparency Technologies Pvt. Ltd.",
          company_url: "http://www.ztransparency.com/",
          logo_path:
            "https://media-exp1.licdn.com/dms/image/C510BAQEwmHqs9B99hA/company-logo_200_200/0/1519895237700?e=1656547200&v=beta&t=pcFgJOC3_UrMop484vxFUdxw7FbaNLFJuyBSPxhFa9Y",
          duration: "Aug 2017 - Nov 2018",
          location: "Bhubaneswar, Odisha",
          description:
            "I was working as a Graphics Designer. I had worked on Adobe XD, Adobe Photoshop, Adobe AI for designing and creating vector images and webdesigns. I had also got the player of the Month (September 2018) for creating and marketing the company social media pages.",
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer (Freelancer)",
          company: "Freelance",
          company_url: "",
          logo_path:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--WPQ75f2s--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/epv55hgtsfi8csprpj9u.jpg",
          duration: "Aug 2020 - Current",
          location: "Bhubaneswar, Odisha",
          description:
            "I was working as a MERN Stack Developer. Developing single Page applications using the MERN(MongoDB, Express JS, React Js, Node JS) technology.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Program in AI and Data Analytics",
          company: "NIIT Foundation Microsoft School",
          company_url: "https://niitfoundation.org/",
          logo_path:
            "https://niitfoundation.org/wp-content/uploads/2022/02/niitfoundatinLogo.png",
          duration: "Dec 2021 - Mar 2022",
          location: "NIIT Foundation, New Delhi",
          description:
            "Learn how to analyze data using Python. This course will take you from the basics of Python to exploring many different types of data. You will learn how to prepare data for analysis, perform simple statistical analyses, create meaningful data visualizations, predict future trends from data, and more!. At the end of internship, I had taken the exam and got qualified. .",
          color: "#ee3c26",
        },
        {
          title: "RPA Blue Prism Intern",
          company: "EduSkills Foundation",
          company_url:
            "https://eduskillsfoundation.org/index.php/blue-prism-academy/",
          logo_path:
            "https://media-exp1.licdn.com/dms/image/C560BAQH827651PNzYw/company-logo_200_200/0/1622908370840?e=2147483647&v=beta&t=4Cc9LWmJpSUco9gt_bQE75wC8bQ4Z6J0XpbBgFJVfVE",
          duration: "Aug 2021 - Dec 2021",
          location: "Work From Home",
          description:
            "Training about connected RPA and how to apply cutting-edge AI capabilities to automation. You’ll also gain highly desirable skills and the confidence to successfully deliver them.",
          color: "#0071C5",
        },
        {
          title: "AWS Cloud Intern",
          company: "EduSkills Foundation",
          company_url:
            "https://eduskillsfoundation.org/index.php/blue-prism-academy/",
          logo_path:
            "https://media-exp1.licdn.com/dms/image/C560BAQH827651PNzYw/company-logo_200_200/0/1622908370840?e=2147483647&v=beta&t=4Cc9LWmJpSUco9gt_bQE75wC8bQ4Z6J0XpbBgFJVfVE",
          duration: "Aug 2021 - Dec 2021",
          location: "Work From Home",
          description:
            "The internship is developed for degree programs as well as continuing education, professional development, extension, and vocational education courses. AWS maintains the curriculum, whereas the institution can determine how the curriculum fits into their course catalogue and requirements.",
          color: "#0071C5",
        },
        {
          title: "Technolgy Consulting",
          company: "Deloitte",
          company_url: "https://www2.deloitte.com/global/en.html",
          logo_path:
            "https://www2.deloitte.com/content/dam/assets/logos/deloitte-print.png",
          duration: "Apr 2021 - Jun 2021",
          location: "Work From Home",
          description:
            "I have gained valuable skills and knowledge about the industry and understood the working environment of Deloitte. Each module has offered a unique experience to solve complex problems aligned with project management, consulting service, and business processes.",
          color: "#FFD93D",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create MERN(MongoDB, Express JS, React JS and Node JS) projects and deploy them to web applications using cloud infrastructure(Heroku, Netlifyy, AWS EC2).",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const projectlist = {
  projects: [
    {
      name: "Pizza Delivery App",
      createdAt: "Aug 27, 2021",
      url: "https://github.com/SOUBHAGYA32/MERN-PIZZA-SOUBHAGYA",
      description:
        "MERN Pizza Delivery application with React , Node , Express",
      languages: [
        {
          name: "React",
          icon: "logos:react",
        },
        {
          name: "Node Js",
          icon: "vscode-icons:file-type-node",
        },
        {
          name: "MongoDB",
          icon: "logos:mongodb",
        },
      ],
    },
    {
      name: "Hotel Booking App",
      createdAt: "Jan 03, 2022",
      url: "https://github.com/SOUBHAGYA32/capital-rooms",
      description:
        " MERN Stack : Hotel Booking App with React ,Node ,Mongo without state management tool REDUX",
      languages: [
        {
          name: "React",
          icon: "logos:react",
        },
        {
          name: "Node Js",
          icon: "vscode-icons:file-type-node",
        },
        {
          name: "MongoDB",
          icon: "logos:mongodb",
        },
      ],
    },
    {
      name: "News Blog App",
      createdAt: "Mar 04, 2022",
      url: "https://github.com/SOUBHAGYA32/news-blog-college-project",
      description: "MERN Stack News Application with Tailwind CSS",
      languages: [
        {
          name: "React",
          icon: "logos:react",
        },
        {
          name: "Node Js",
          icon: "vscode-icons:file-type-node",
        },
        {
          name: "MongoDB",
          icon: "logos:mongodb",
        },
      ],
    },
    {
      name: "Campus Talk - Social Media App",
      createdAt: "Dec 14, 2021",
      url: "https://github.com/SOUBHAGYA32/campus-talk",
      description: " MERN Stack Social Media Application : React Redux Node: ",
      languages: [
        {
          name: "React",
          icon: "logos:react",
        },
        {
          name: "Node Js",
          icon: "vscode-icons:file-type-node",
        },
        {
          name: "MongoDB",
          icon: "logos:mongodb",
        },
      ],
    },
    {
      name: "Job Portal App",
      createdAt: "Aug 27, 2021",
      url: "https://github.com/SOUBHAGYA32/Jobportal-Frontend",
      description: "MERN Stack Job Portal App : React ,Redux ,Node ,Mongo",
      languages: [
        {
          name: "React",
          icon: "logos:react",
        },
        {
          name: "Node Js",
          icon: "vscode-icons:file-type-node",
        },
        {
          name: "MongoDB",
          icon: "logos:mongodb",
        },
      ],
    },
    {
      name: "Retail POS Application",
      createdAt: "May 12, 2022",
      url: "",
      description:
        "MERN Stack Retail Store POS: React ,Redux ,Node ,Mongo, antd",
      languages: [
        {
          name: "React",
          icon: "logos:react",
        },
        {
          name: "Node Js",
          icon: "vscode-icons:file-type-node",
        },
        {
          name: "MongoDB",
          icon: "logos:mongodb",
        },
      ],
    },
    {
      name: "Sapphire: LG TV Web APP",
      createdAt: "Jan 03, 2022",
      url: "",
      description: "LG WebOS TV Application - Using WebOS IDE",
      languages: [
        {
          name: "Javascript",
          icon: "logos:javascript",
        },
        {
          name: "LG WebOs",
          icon: "simple-icons:lg",
        },
        {
          name: "jQuery",
          icon: "logos:jquery",
        },
      ],
    },
    {
      name: "Sapphire: Samsung TV APP",
      createdAt: "Jan 03, 2022",
      url: "",
      description: "Samsung Tizen OS TV Application - Using Tizen IDE",
      languages: [
        {
          name: "Tizen OS",
          icon: "logos:samsung",
        },
        {
          name: "Javascript",
          icon: "logos:javascript",
        },
        {
          name: "jQuery",
          icon: "logos:jquery",
        },
      ],
    },
    {
      name: "Simply South Entertainment",
      createdAt: "May 03, 2022",
      url: "",
      description: "Simply South Entertainment is an OTT Application",
      languages: [
        {
          name: "Tizen OS",
          icon: "logos:samsung",
        },
        {
          name: "Javascript",
          icon: "logos:javascript",
        },
        {
          name: "LG WebOs",
          icon: "simple-icons:lg",
        },
      ],
    },
    {
      name: "Netflix Clone - iOS Application",
      createdAt: "Septemeber, 2022",
      url: "",
      description: "Building Netflix Clone using Swif 5 and Core Data",
      languages: [
        {
          name: "Swift 5",
          icon: "logos:swift",
        },
        {
          name: "XCode",
          icon: "vscode-icons:file-type-xcode",
        },
        {
          name: "iOS",
          icon: "logos:apple-app-store",
        },
      ],
    },
    {
      name: "Instagram Clone - iOS Application",
      createdAt: "Septemeber, 2022",
      url: "",
      description: "Building Instagram Clone using Swif 5 and Core Data",
      languages: [
        {
          name: "Swift 5",
          icon: "logos:swift",
        },
        {
          name: "XCode",
          icon: "vscode-icons:file-type-xcode",
        },
        {
          name: "iOS",
          icon: "logos:apple-app-store",
        },
      ],
    },
    {
      name: "Saphhire Clone - iOS Application",
      createdAt: "Septemeber, 2022",
      url: "",
      description: "Building Saphhire Clone using Swif 5 and Core Data",
      languages: [
        {
          name: "Swift 5",
          icon: "logos:swift",
        },
        {
          name: "XCode",
          icon: "vscode-icons:file-type-xcode",
        },
        {
          name: "iOS",
          icon: "logos:apple-app-store",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path:
      "https://res.cloudinary.com/muvi/image/upload/v1665225621/3_fryyol.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with iOS Development, Apple TV Apps, Web Development, SAP ABAP, React, Android, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "B-404, Surekha Vatika, Balianta, Hanspal, Puri Canal Road,Bhubaneswar, Odisha-752101",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Surekha+Vatika,+Balianta,+Bhubaneswar,+Odisha+752101/@20.3111023,85.8894181,17z/data=!3m1!4b1!4m5!3m4!1s0x3a190af5b6688fbd:0xb7a3831ce966871f!8m2!3d20.3109574!4d85.8916328",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7077185311",
  },
};

//Whatsapp Contact Information
const whatsappData = {
  phoneNum: "+91-7008944853",
  name: "Soubhagya Ranjan Mallick",
  // avatar : "https://res.cloudinary.com/muvi/image/upload/v1658026294/Portfolio/DSC_0004_2_nqmwxg.jpg",
  statusMessage: "Typically replies within 1 hour",
  chatMessage: "Hi, I'm Soubhagya. Welcome to my profile.😊",
  placeholder: "Type a Message..",
};
export {
  socialMediaLinks,
  greeting,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  projectlist,
  contactPageData,
  whatsappData,
};
