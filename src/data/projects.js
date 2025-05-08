// Your Confirmation Number is:

// 42NP6SZ9FJT
import healthCareImg from '../assets/projects/HealthCareAnalyticsChatBotApp.png';
import PitDash from '../assets/projects/PitDash.png';
import BooksianBookstore from '../assets/projects/BooksianBookstore.png';
import TalkMoneyLLM from '../assets/projects/TalkMoneyLLM.png';
import FlightDelayAnalytics from '../assets/projects/FlightDelayAnalytics.png';
import POS from '../assets/projects/POS.png';
import HRAttritionAnalytics from '../assets/projects/HRAttritionAnalytics.png';
import NetflixDashboard from '../assets/projects/NetflixDashboard.png';
import MemeGenerator from '../assets/projects/MemeGenerator.png';
import CalmCompass from '../assets/projects/CalmCompass.png';
import AirlinePassengerSatisfactionAnalysis from '../assets/projects/AirlinePassengerSatisfactionAnalysis.png';
import PoliticalNetworkAnalysis from '../assets/projects/PoliticalNetworkAnalysis.png';
import FlightCancellationDetection from '../assets/projects/FlightCancellationDetection.png';
import ConvokeSystems from '../assets/projects/ConvokeSystems.png';
import DuckyUI from '../assets/projects/Duckyui2.png';



const projects = [
  {
    title: "PitDash – Surgical AI Dashboard(VT Capstone)",
    image: PitDash,
    description: "Capstone project that detects real-time surgical actions from videos using PyTorch and OpenCV with a FastAPI backend and React dashboard.",
    tech: ["React", "PyTorch", "OpenCV", "FastAPI"],
    github: "",
    demo: "",
    date: "May 2025",
    institute: "Virginia Tech"
  },
    {
      title: "SystemZombies – AI-Powered Healthcare Analytics Platform",
      // image: "./assets/projects/HealthCareAnalyticsChatBotApp.png",
      image: healthCareImg,
      description: "Real-time analytics platform using LLMs + RAG for medical insights. Features NL2SQL, secure dashboards, telemetry, and CI/CD.",
      tech: ["LangChain", "LLMs", "FastAPI", "SQL", "Streamlit", "Railway"],
      github: "",
      demo: "",
      date: "Sep 2024 – Dec 2024",
      institute: "Virginia Tech"
    },
    {
      title: "Netflix Dashboard",
      image: NetflixDashboard,
      description: "Interactive Tableau dashboard analyzing Netflix catalog trends across genres and regions.",
      tech: ["Tableau"],
      github: "https://github.com/hansapradhan/NetflixDashboard",
      demo: "",
      date: "2019",
      institute: "SRM University"
    },
    {
      title: "CalmCompass – Mental Health App",
      image: CalmCompass,
      description: "A serene React web app with secure login, user affirmations, and soothing design to promote mental well-being.",
      tech: ["React", "CSS", "JavaScript"],
      github: "https://github.com/hansapradhan/CalmCompass",
      demo: "",
      date: "Sep 2024",
      institute: "VT Hacks Hackathon"
    },
    {
      title: "Booksian Bookstore",
      image: BooksianBookstore,
      description: "E-commerce bookstore with persistent cart, checkout, and AI-based recommendations using React, Java, MySQL, and AWS.",
      tech: ["React", "TypeScript", "Java", "MySQL", "AWS"],
      github: "https://github.com/hansapradhan/BooksianBookstore",
      demo: "",
      date: "Jan 2024 – Apr 2024",
      institute: "Virginia Tech"
    },
    {
      title: "Political Network Analysis",
      image: PoliticalNetworkAnalysis,
      description: "Performed sentiment, clustering, and topic modeling on 2008–2017 U.S. Congressional tweets using NLP and network graphs.",
      tech: ["Python", "NLTK", "Topic Modeling", "NetworkX"],
      github: "https://github.com/hansapradhan/PoliticalNetwork_Analysis",
      demo: "",
      date: "Jan 2024 – Apr 2024",
      institute: "Virginia Tech"
    },
    {
      title: "Ducky – AI Coding Assistant",
      image: DuckyUI,
      description: "An intelligent assistant that helps write and debug code with AI-powered responses, integrating speech-to-text and VT's custom chatbot interface.",
      tech: ["React", "Python", "Speech-to-Text", "LLM", "FastAPI"],
      github: "",
      demo: "",
      date: "Jan 2024 – Apr 2024",
      institute: "Virginia Tech"
    },
    {
      title: "Cloud Adoption Strategy for Convoke Systems",
      image: ConvokeSystems,
      description: "Developed a comprehensive cloud strategy for Convoke Systems focused on scalability, compliance, and innovation using AWS.",
      tech: ["AWS", "Tech Strategy", "Cloud Computing"],
      github: "",
      demo: "",
      date: "Jan 2024 – Mar 2024",
      institute: "Virginia Tech"
    },
    {
      title: "Talk Money LLM",
      image: TalkMoneyLLM,
      description: "LLM-based financial advisor chatbot using LangChain, FastAPI, and MongoDB to generate personalized money advice.",
      tech: ["LangChain", "FastAPI", "MongoDB", "React", "Axios"],
      github: "https://github.com/hansapradhan/TalkMoneyLLM",
      demo: "",
      date: "Mar 2024",
      institute: "Hoo Hacks Hackathon"
    },
    {
      title: "Flight Status Prediction Visualization",
      image: FlightDelayAnalytics,
      description: "Data viz dashboard with 20+ graphs built using Plotly, Seaborn, and Dash. Reduced interpretation time by 40%.",
      tech: ["Plotly", "Seaborn", "Dash", "Pandas"],
      github: "https://github.com/hansapradhan/FlightStatusPredictionAnalysis",
      demo: "",
      date: "Sep 2023 – Dec 2023",
      institute: "Virginia Tech"
    },
    {
      title: "Flight Cancellation Prediction",
      image: FlightCancellationDetection,
      description: "ML models predicting flight cancellations and delays using classification and regression with 86–97% accuracy.",
      tech: ["Python", "Scikit-Learn", "Regression", "GCP"],
      github: "https://github.com/hansapradhan/FlightStatusPredictionAnalysis",
      demo: "",
      date: "Sep 2023 – Dec 2023",
      institute: "Virginia Tech"
    },
    {
      title: "HR Attrition Analytics(SRM Capstone)",
      image: HRAttritionAnalytics,
      description: "Flask dashboard with ML model to predict employee attrition and provide HR recommendations for retention.",
      tech: ["Flask", "Scikit-Learn", "Pandas"],
      github: "https://github.com/hansapradhan/HRAttritionAnalytics",
      demo: "",
      date: "2019",
      institute: "SRM University"
    },
    {
      title: "Point of Sale & Inventory Management System",
      image: POS,
      description: "Built using Tkinter App to manage billing and inventory. Alerts for restocking when item quantity falls below minimum threshold.",
      tech: ["Python", "Tkinter"],
      github: "",
      demo: "",
      date: "2020",
      institute: "SRM University"
    },
    {
      title: "Meme Generator",
      image: MemeGenerator,
      description: "React-based app that connects to a public meme API to let users browse and generate memes in real-time.",
      tech: ["React", "JavaScript", "Public API"],
      github: "https://github.com/hansapradhan/MemeGeneratorReact",
      demo: "https://hansapradhan.github.io/MemeGeneratorReact/",
      date: "2019",
      institute: "SRM University"
    },
    {
      title: "Airline Passenger Satisfaction Analysis",
      image: AirlinePassengerSatisfactionAnalysis,
      description: "EDA of airline passenger survey data to uncover satisfaction trends and suggest service improvements.",
      tech: ["Python", "Seaborn", "Pandas", "Matplotlib"],
      github: "https://github.com/hansapradhan/AirlinePassengerSatisfactionAnalysis",
      demo: "",
      date: "2019",
      institute: "SRM University"
    }
  ];
  
  export default projects;
  
  