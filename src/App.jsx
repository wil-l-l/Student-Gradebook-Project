import "./Reset.css";
import "./App.css";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import { useEffect, useState, useRef } from "react";

function App() {
  const [editMode, setEditMode] = useState(null);
  const [studentInfo, setStudentInfo] = useState(null);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  const API_URL = "http://localhost:3000/students";
  useEffect(() => {
    const fetchGrades = async () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
      abortControllerRef.current = new AbortController();

      try {
        const response = await fetch(API_URL + "/2", {
          signal: abortControllerRef.current.signal,
        });
        const studentInfo = await response.json();
        setStudentInfo(studentInfo.info);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError("Error Loading Data!");
      }
    };
    fetchGrades();
  }, []);

  return (
    <>
      <Header editMode={editMode} setEditMode={setEditMode} />
      <MainSection
        studentInfo={studentInfo}
        error={error}
        editMode={editMode}
        setStudentInfo={setStudentInfo}
      />
    </>
  );
}

export default App;
