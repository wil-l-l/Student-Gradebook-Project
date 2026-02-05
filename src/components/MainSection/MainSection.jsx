import "./MainSection.css";
import GradeTable from "../GradeTable/GradeTable";
import QuartersBar from "../QuartersBar/QuartersBar";

const MainSection = ({ studentInfo, setStudentInfo, editMode }) => {
  return (
    <main className="main-section">
      <>
        <QuartersBar />
        <GradeTable
          studentInfo={studentInfo}
          editMode={editMode}
          setStudentInfo={setStudentInfo}
        />
      </>
    </main>
  );
};

export default MainSection;
