import "./MainSection.css";
import GradeTable from "../GradeTable/GradeTable";
import ProfileBox from "../ProfileBox/ProfileBox";
import QuartersBar from "../QuartersBar/QuartersBar";

const MainSection = ({ studentInfo, setStudentInfo, error, editMode }) => {
  return (
    <main className="main-section">
      {!studentInfo && error === null ? (
        <p>Loading...</p>
      ) : error !== null ? (
        <p className="error-text">Error Loading Data. Please refresh page!</p>
      ) : (
        <>
          <ProfileBox studentInfo={studentInfo} />
          <QuartersBar />
          <GradeTable studentInfo={studentInfo} editMode={editMode} setStudentInfo={setStudentInfo}/>
        </>
      )}
    </main>
  );
};

export default MainSection;
