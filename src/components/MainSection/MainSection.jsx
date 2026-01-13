import "./MainSection.css";
import GradeTable from "../GradeTable/GradeTable";
import ProfileBox from "../ProfileBox/ProfileBox";
import QuartersBar from "../QuartersBar/QuartersBar";

const MainSection = ({ studentInfo }) => {
  return (
    <main className="main-section">
      <ProfileBox studentInfo={studentInfo} />
      <QuartersBar />
      <GradeTable studentInfo={studentInfo} />
    </main>
  );
};

export default MainSection;
