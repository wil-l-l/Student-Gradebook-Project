import "./MainSection.css";
import GradeTable from "../GradeTable/GradeTable";
import ProfileBox from "../ProfileBox/ProfileBox";
import QuartersBar from "../QuartersBar/QuartersBar";

const MainSection = () => {
  return (
    <main className="main-section">
      <ProfileBox />
      <QuartersBar />
      <GradeTable />
    </main>
  );
};

export default MainSection;
