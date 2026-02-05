import GradeTable from "../GradeTable/GradeTable";

const MainSection = ({ studentInfo, setStudentInfo, editMode }) => {
  return (
    <main className="main-section">
      <>
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
