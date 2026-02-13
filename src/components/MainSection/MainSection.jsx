import GradeTable from "../GradeTable/GradeTable";
import StudentDropdown from "../StudentDropdown/StudentDropdown";

const MainSection = ({
  students,
  setStudents,
  studentToView,
  editMode,
  setEditMode,
  currentStudent,
  setCurrentStudent,
}) => {
  return (
    <main className="main-section">
      <>
        <StudentDropdown
          students={students}
          currentStudent={currentStudent}
          setCurrentStudent={setCurrentStudent}
          setEditMode={setEditMode}
        />
        <GradeTable
          studentToView={studentToView}
          currentStudent={currentStudent}
          editMode={editMode}
          setStudents={setStudents}
        />
      </>
    </main>
  );
};

export default MainSection;
