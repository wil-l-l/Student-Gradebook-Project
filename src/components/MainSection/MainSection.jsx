import GradeTable from "../GradeTable/GradeTable";
import StudentDropdown from "../StudentDropdown/StudentDropdown";

const MainSection = ({ studentInfo, setStudentInfo, editMode }) => {
  return (
    <main className="main-section">
      <>
        <StudentDropdown />
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
