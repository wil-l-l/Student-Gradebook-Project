import "./MainSection.css"
import GradeTable from "../GradeTable/GradeTable";
import ProfileBox from "../ProfileBox/ProfileBox";

const MainSection = () => {
  return (
    <main className="main-section">
      <ProfileBox />
      <GradeTable />
    </main>
  );
};

export default MainSection;
