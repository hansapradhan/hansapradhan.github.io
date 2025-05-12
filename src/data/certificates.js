import TrinityCollege from '../assets/logos/TrinityCollege.png';
import Microsoft from '../assets/logos/Microsoft.png';
import SRMIST from '../assets/logos/SRMIST.png';
import Infosys from '../assets/logos/Infosys.jfif';

const certificates = [
    {
      title: "Grade 5 Piano Certification",
      issuer: "Trinity College London",
      date: "2017",
      image:TrinityCollege, // Optional certificate thumbnail
    //   logo: "/assets/logos/trinity-logo.png"
    },
    {
      title: "AZ-900 Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      image: Microsoft,
      //logo: "/assets/logos/microsoft.png",
      link: "" // add link if you have it
    },
    {
      title: "Campus Ambassador Award",
      issuer: "SRM University",
      date: "2019",
      image: SRMIST,
    //   logo: "/assets/logos/srm-logo.png"
    },
    {
      title: "STG Excellence Award",
      issuer: "Infosys",
      date: "2022",
      image: Infosys,
    //   logo: "/assets/logos/infosys-logo.png"
    }
  ];
  
  export default certificates;
  