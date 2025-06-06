/* Change this file to get your personal Portfolio */

/* ---------------------------------------
   1) Website & Splash Screen Settings 
----------------------------------------- */
const settings = {
  isSplash: true,
};

/* ---------------------------------------
   2) SEO Related Settings 
----------------------------------------- */
const seo = {
  title: "Shyam Mehta's Portfolio",
  description:
    "Business Analytics & AI enthusiast passionate about LLMs, computer vision, and building meaningful data-driven solutions.",
  og: {
    title: "Shyam Mehta's Portfolio",
    type: "website",
    url: "https://shyam-portfolio.vercel.app",
  },
};

/* ---------------------------------------
   3) Home Page 
----------------------------------------- */
const greeting = {
  title: "Shyam Mehta",
  logo_name: "ShyamMehta",
  nickname: "Samm",
  subTitle:
    "Hi, I’m Shyam Mehta — a Business Analytics & AI engineer focused on building production-ready solutions with LLMs, Generative AI, and cloud-native ML pipelines. I specialize in transforming unstructured data into real-time insights and deploying intelligent applications that scale.",
  resumeLink:
    "https://drive.google.com/file/d/1MiA7DW0qD4pmRYFF0sae4f9M9jtx0KCl/view?usp=sharing",
  portfolio_repository: "https://github.com/Samm1632/react-portfolio",
  githubProfile: "https://github.com/Samm1632",
};

/* ---------------------------------------
   4) Social Media Links 
----------------------------------------- */
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Samm1632",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shyam-niren-mehta",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:ShyamNiren.Mehta@UTDallas.edu",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

/* ---------------------------------------
   5) Skills Section 
----------------------------------------- */
const skills = {
  data: [
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Develop and fine-tune LLM-based applications",
        "⚡ Build and deploy NLP and Computer Vision models",
        "⚡ Apply deep learning using TensorFlow, PyTorch, and Scikit-learn",
        "⚡ Work with unstructured data, vector databases and semantic search",
        "⚡ Integrate ML models into full-stack applications",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos:tensorflow",
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos:pytorch",
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
        },
      ],
    },
    {
      title: "Data Engineering & Big Data",
      fileName: "FullStackImg",
      skills: [
        "⚡ Design ETL pipelines using Spark, SQL, and Trifacta",
        "⚡ Build real-time data workflows that scale with business needs",
        "⚡ Building efficient ETL workflows and analytics dashboards",
        "⚡ Streamline data infrastructure using Airflow, Hive, and BigQuery",
      ],
      softwareSkills: [
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
        },
        {
          skillName: "BigQuery",
          fontAwesomeClassname: "simple-icons:googlebigquery",
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
        },
      ],
    },
    {
      title: "Data Analytics & Statistics",
      fileName: "DataAnalyticsImg",
      skills: [
        "⚡ Exploratory data analysis using Python, R, and SQL",
        "⚡ Interactive dashboards and reports using Power BI and Tableau",
        "⚡ Apply statistical techniques to derive actionable business insights",
        "⚡ Certified in Google Data Analytics & advanced data viz. tools",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos:r-lang",
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
        },
        {
          skillName: "Google Data Studio",
          fontAwesomeClassname: "simple-icons:googledatastudio",
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploy ML applications on Azure, AWS, and Netlify",
        "⚡ Manage CI/CD pipelines & containerize with Docker",
        "⚡ Utilize cloud tools for monitoring, scalability, and secure delivery",
        "⚡ Automate workflows and APIs for seamless model integration",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
        },
      ],
    },
  ],
};

/* ---------------------------------------
   6) Competitive Programming Sites (Optional) 
----------------------------------------- */
const competitiveSites = {
  competitiveSites: [],
};

/* ---------------------------------------
   7) Education Section 
----------------------------------------- */
const degrees = {
  degrees: [
    {
      title: "The University of Texas at Dallas",
      subtitle: "M.S. in Business Analytics & Artificial Intelligence",
      alt_name: "UTD",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ 2023: Strengthened skills in Machine Learning, Data Analytics, and cloud platforms.",
        "⚡ 2024: Built and deployed LLMs, RAG pipelines, and GenAI apps using Azure, Flask, and React.",
        "⚡ Projects: AI-powered chatbot, resume analyzer, OCR with vector search, and full-stack ML apps.",
      ],
      website_link: "https://www.utdallas.edu/",
    },
    {
      title: "SRM Institute of Science and Technology",
      subtitle: "B.Tech. in Computer Science and Engineering",
      alt_name: "SRM",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ 2019–2020: Gained a strong base in DSA, OS, DBMS, and OOPs.",
        "⚡ 2020–2021: Built academic mini-projects and explored ML fundamentals with Python & R.",
        "⚡ 2021–2022: Specialized in Big Data Analytics, Power BI, and applied ML.",
        "⚡ 2022–2023: Developed NLP apps, sentiment analysis tools, and a blockchain-based voting system.",
      ],
      website_link: "https://www.srmist.edu.in/",
    },
  ],
};

/* ---------------------------------------
   8) Certifications 
----------------------------------------- */
const certifications = {
  certifications: [
    {
      title: "Google Analytics 4 - Google",
      subtitle: "Course: Web Analytics",
      file: "/certificate/Google Analytics Certification.pdf",
      color_code: "#0C9D58",
    },
    {
      title: "Introduction to Machine Learning - IIT Madras",
      subtitle: "Course: Machine Learinng",
      file: "/certificate/Introduction to Machine Learning-IITM.pdf", // Replace with your actual filename when uploaded
      color_code: "#1F70C1",
    },
    {
      title: "Deep Learning - OneFourthLabs",
      subtitle: "Course: Deep Learning",
      file: "/certificate/Deep Learning-PadhAI.pdf",
      color_code: "#E2405F",
    },
  ],
};

/* ---------------------------------------
   9) Experience Page 
----------------------------------------- */
const experience = {
  title: "Experience",
  subtitle: "Work & Research",
  description:
    "Here are some of the places I've worked and research I've contributed to, spanning AI, ML, computer vision, and NLP.",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Science Intern",
          company: "Mastek Inc.",
          duration: "June 2024 – Aug 2024",
          location: "Dallas, Texas, United States",
          description:
            "Developed a semantic search engine using LLMs and vector DBs (Elasticsearch, Pinecone), achieving 73% precision and 84% recall. Built a Streamlit-based app with autocorrected LLM queries to improve search conversion by 13%.",
          color: "#0879bf",
        },
        {
          title: "Data Analyst Intern",
          company: "ResoluteAI",
          duration: "Apr 2022 – Jul 2022",
          location: "Bangalore, India",
          description:
            "Delivered a Power BI dashboard for real-time hospital capacity monitoring and deployed YOLOv3-based defect detection with 91% accuracy. Built SSIS pipelines to automate daily healthcare analytics.",
          color: "#000000",
        },
        {
          title: "Software Developer Intern",
          company: "Zestech Inc.",
          duration: "Jun 2021 – Jan 2022",
          location: "Dallas, Texas",
          description:
            "Built a stock forecasting model with Python and SQLite that boosted client profit by 12%. Automated real-time alerts using the Pushbullet API and built interactive BI dashboards with Power BI and Tableau.",
          color: "#e35e25",
        },
      ],
    },
    {
      title: "Research",
      work: true,
      experiences: [
        {
          title: "IEEE Author – Blockchain Evidence Management",
          company: "IEEE Conference (DOI: 10.1109/AISP57993.2023.10134799)",
          duration: "2023",
          location: "India",
          description:
            "Developed a blockchain-based decentralized system using Ethereum smart contracts and IPFS to ensure secure digital evidence management with tamper-proof access.",
          color: "#fc1f20",
        },
        {
          title: "IEEE Author – Neural Network Churn Prediction",
          company: "IEEE Conference (DOI: 10.1109/AISP57993.2023.10134827)",
          duration: "2023",
          location: "India",
          description:
            "Built a high-accuracy NN model for telecom churn prediction using SMOTE-ENN, outperforming traditional models with 94% precision on real-world datasets.",
          color: "#aa00ff",
        },
        {
          title: "Racist Sentiment Detection Research",
          company: "Academic NLP Research",
          duration: "2023",
          location: "SRM University",
          description:
            "Proposed a BERT + GCR-LSTM model achieving 97% accuracy in racist tweet detection. Analyzed 30K+ tweets to uncover linguistic bias and sociolinguistic trends.",
          color: "#1b5e20",
        },
      ],
    },
    {
      title: "University Organizations",
      work: true,
      experiences: [
        {
          title: "Member – Data Science Club",
          company: "SRM University",
          duration: "2021 – 2023",
          location: "Chennai, India",
          description:
            "Contributed to campus-wide data projects and mentored juniors in machine learning. Participated in internal workshops and project showcases.",
          color: "#0077b5",
        },
        {
          title: "Organizer – Directorate of Student Affairs",
          company: "SRM University",
          duration: "2020 – 2022",
          location: "Chennai, India",
          description:
            "Managed student-led events, hackathons, and technical symposiums, strengthening leadership and team collaboration experience.",
          color: "#ff6f00",
        },
      ],
    },
  ],
};

/* ---------------------------------------
   10) Projects Page 
----------------------------------------- */
const projectsHeader = {
  title: "Projects",
  description:
    "These are a few of the projects I’ve worked on using AI/ML, NLP, Computer Vision, and full-stack deployments using React and Netlify.",
  avatar_image_path: "projects_image.svg",
};

/* ---------------------------------------
   11) Publications 
----------------------------------------- */
const publicationsHeader = {
  title: "Publications",
  description: "IEEE research papers authored during my undergrad.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: 1,
      name: "Blockchain driven Evidence Management System",
      description: "IEEE DOI: 10.1109/AISP57993.2023.10134799",
      link: "",
    },
    {
      id: 2,
      name: "Customer Churn Prediction using NN and SMOTE-ENN",
      description: "IEEE DOI: 10.1109/AISP57993.2023.10134827",
      link: "",
    },
  ],
};

/* ---------------------------------------
   12) Contact Page 
----------------------------------------- */
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shyam_profile.png",
    description:
      "Open to AI/ML, NLP, or data science roles. Let’s connect and discuss how we can build something impactful together.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Richardson, TX, 75080",
    location_map_link: "https://maps.google.com/?q=Richardson,TX,75080",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (480) 955-8515",
  },
};

/* ---------------------------------------
   13) Final Export 
----------------------------------------- */
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
