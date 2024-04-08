/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vishnu Preetham",
  title: "Hi, I'm Vishnu Preetham Reddy",
  subTitle: emoji(
    "I am a skilled Data Analyst with experience in Product and Risk Analytics. With expertise in Data Analytics, Advanced SQL, Python, Pandas, Tableau, I have successfully contributed to Product and Risk Analysis, modernised DWH platforms and executed impactful data projects."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1o8zjQVe5ybw_Vnfcs54qAwmUwy2M7uf7/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vdasari2",
  linkedin: "https://www.linkedin.com/in/vishnu-p-5bb0861a0/",
  gmail: "vishnupreethamreddy@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: "Charting success as a Risk - conscious Data Analyst",
  skills: [
    emoji(
      "⚡ Proficiently assess and analyze complex financial data to identify potential risks and opportunities using Python and SQL, enabling informed decision-making by stakeholders."
    ),
    emoji("⚡ Generate predictive insights through trend analysis, identifying emerging risks and opportunities, and contributing to the development of proactive risk mitigation strategies."),
    emoji(
      "⚡ Create dynamic and intuitive visualizations using tools like Tableau, translating intricate data sets into actionable insights for risk mitigation strategies."
    )
  ],
  
  softwareSkills: [
    {
      skillName: "SQL",
      fontAwesomeClassname: "fa fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "Database",
    //   fontAwesomeClassname: "fab fa-diamond"
    // },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/ASU-logo.png"),
      subHeader: "Master of Science in CSE",
      duration: "August 2021 - December 2022",  
      //desc: "Courses: Data Science for Software Engineers, Statistical Machine Learning, Advance Data Structures and Algorithms, Foundations of Software Engineering",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "SQL", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "95%"
    },
    {
      Stack: "Analytical Skills",
      progressPercentage: "85%"
    },
    {
      Stack: "Visualization Skills",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst, Product and Risk Analytics",
      company: "Lending Point",
      companylogo: require("./assets/images/lp1.png"),
      date: "June 2023 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Conducted credit risk analysis on a portfolio of loans using SQL, Python, statistical models and researched on industry trends to assess potential credit risks to identify key areas of losses which reduced overall risk exposure by 12%.",
        "Developed risk strategies upon data science models to optimize financial statistics (Delinquency, Charge-Offs etc), improve channel performances (Offer Selected %, Funded % etc.) through swap set, cohort analysis, in time and out of time sampling.",
        "Developed & oversaw in depth compliance monitoring process for 12 aggregators & partners, strengthening investor relations and driving 30% increase of leads."
      ]
    },
    {
      role: "Data Analyst/Data Engineer",
      company: "National Grid",
      companylogo: require("./assets/images/ng1.png"),
      date: "January 2023 – June 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Part of modernizing National Grid’s DWH platform by migrating legacy Oracle DWH to Snowflake Cloud Datawarehouse and sunset MicroStrategy by migrating reports to Power BI project.",
        "Migration of 47 Downstate DataMart’s – Active (14), Inactive (33) – Lift and shift of 33 inactive DataMart’s from 8370 tables into Snowflake staging layer.",
        "Migrated all active data ingestion flows (688) from Informatica (Downstate) to Matillion for all active DataMart’s using Python and SQL",
        "Used SQL to replace existing transformation logic in Oracle procedures with Snowflake.",
      ]
    },
    {
      role: "Developer (Capstone Project)",
      company: "PICMG",
      project: "Redfish Server Implementation using OpenAPI",
      companylogo: require("./assets/images/picmg.png"),
      date: "August 2022 – December 2022",
      desc: "Redfish Server Implementation using OpenAPI",
      descBullets: [
        "DMTF’s Redfish is a standard designed to deliver simple and secure management for converged, hybrid IT and the Software-Defined Data Center.",
        "Created the database tables and initialized the data for Account, Session, Task, Root, and Event services from the mockups bundle.",
        "Built a Redfish Event Service protocol, that enables the communication between IoT devices.",
        "Worked on Spring Boot Server and used OpenAPI to generate code for some of the endpoints.",
        "Used testing frameworks such as JUnit and Mockito for unit testing of java applications."
      ]
    },
    {
      role: "Junior Data Analyst",
      company: "Kanor Systems Inc",
      companylogo: require("./assets/images/ks.jpeg"),
      date: "July 2020 – June 2021",
      descBullets: [
        "Conducted data analysis using Data Wrangling, Python automation, and SQL optimization on Snowflake data warehouse.",
        "Performed Exploratory Data Analysis (EDA) using Pandas and NumPy for predictive modeling, applying statistical techniques to derive meaningful conclusions and recommendations.",
        "Created Python scripts for task automation, including generating daily reports and facilitating email communications.",
        "Collaborated on reusable code and Data Pipelines, enhancing analytic efficiency by 15%, tracked project progress with JIRA, and organized project-related materials in Confluence."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Players Data Extraction",
      projectDesc:
        "Made use of Python and Web Scraping (Selenium Library) to scrape players information and statistics from a website and extract structured data using pandas.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/vdasari2/Player-Data-Extraction-using-Web-Scraping"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Loan Default Prediction",
      projectDesc:
        "Contributed to improved lending decision-making processes by delivering accurate predictions of loan defaults using Python, Pandas, Machine Learning, highlighting skills in data analysis, preprocessing, modeling, and evaluation.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/vdasari2/Loan-Default-Prediction-"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   // image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Stock Market Real Time Analytics Project",
    //   projectDesc:
    //     "Created a streaming pipeline to fetch data in real – time from API to transform data to JSON format which can be readily inserted to BigQuery, then publish it to Pub Sub topic.",
    //   // footerLink: [
    //   //   {
    //   //     name: "Visit Website",
    //   //     //url: "http://nextu.se/"
    //   //   }
    //   // ]
    // },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "API Data Exploration and Analysis",
      projectDesc:
        "",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/vdasari2/API-Data-Exploration-and-Analysis-"
        }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// const contactInfo = {
//   title: emoji("Contact Me ☎️"),
//   subtitle:
//     "Discuss a project or just want to say hi? My Inbox is open for all.",
//   number: "+1 (315) – 790 – 7654",
//   email_address: "vishnupreethamreddy@gmail.com"
// };

const contactInfo = {
  title: emoji("Contact me!"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all. "
    ,
    
  email_address: "vishnupreethamreddy@gmail.com",
  locationlogo: require("./assets/images/location.png"),
  location:"Atlanta, Georgia",
  subsection: "Open for opportunities: Yes"
};
// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
