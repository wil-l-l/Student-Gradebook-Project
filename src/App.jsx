import "./Reset.css";
import "./App.css";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import { useState } from "react";
import useGrades from "./hooks/useGrades";

function App() {
  const [editMode, setEditMode] = useState(null);
  const [currentStudent, setCurrentStudent] = useState(2);
  const { studentInfo, setStudentInfo, error } = useGrades(
    "/" + currentStudent,
  );

  return (
    <>
      {!studentInfo && !error ? (
        <h1>Loading...</h1>
      ) : !studentInfo && error ? (
        <h1 className="error-text">
          Error Loading Data. Please refresh the page!
        </h1>
      ) : (
        <>
          <Header
            editMode={editMode}
            setEditMode={setEditMode}
            studentInfo={studentInfo}
            setStudentInfo={setStudentInfo}
          />

          <MainSection
            currentStudent={currentStudent}
            setCurrentStudent={setCurrentStudent}
            studentInfo={studentInfo}
            editMode={editMode}
            setStudentInfo={setStudentInfo}
          />
        </>
      )}
    </>
  );
}

export default App;
