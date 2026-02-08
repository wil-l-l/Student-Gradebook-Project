import GradeTable from "../GradeTable/GradeTable";
import StudentDropdown from "../StudentDropdown/StudentDropdown";

const MainSection = ({
  studentInfo,
  setStudentInfo,
  editMode,
  currentStudent,
  setCurrentStudent,
}) => {
  return (
    <main className="main-section">
      <>
        <StudentDropdown
          currentStudent={currentStudent}
          setCurrentStudent={setCurrentStudent}
        />
        <GradeTable
          currentStudent={currentStudent}
          studentInfo={studentInfo}
          editMode={editMode}
          setStudentInfo={setStudentInfo}
        />
      </>
    </main>
  );
};

export default MainSection;
