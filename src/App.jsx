import "./Reset.css";
import "./App.css";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import { useState } from "react";
import useGrades from "./hooks/useGrades";

function App() {
  const [editMode, setEditMode] = useState(null);
  const { studentInfo, setStudentInfo, error } = useGrades("/2");

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
