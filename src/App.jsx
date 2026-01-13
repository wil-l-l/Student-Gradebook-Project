import "./Reset.css";
import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import { useEffect, useState } from "react";

function App() {
  const [studentInfo, setStudentInfo] = useState(null);

  const API_URL = "http://localhost:3500/students";
  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await fetch(API_URL + "/1");
        const studentInfo = await response.json();
        setStudentInfo(studentInfo.info);
      } catch (err) {
        console.log(`Student Grade Fetching Error: ${err}`);
      }
    };
    fetchGrades();
  }, []);

  return (
    <>
      <MainSection studentInfo={studentInfo} />
    </>
  );
}

export default App;
