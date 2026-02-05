import "./GradeTable.css";
import GradeRows from "./GradeRows/GradeRows";

const GradeTable = ({ studentInfo, setStudentInfo, editMode }) => {
  return (
    <table className="grade-table">
      <thead className="grade-table__heading-row grade-table__col-1">
        <tr>
          <th>Pd</th>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <GradeRows
          studentInfo={studentInfo}
          setStudentInfo={setStudentInfo}
          editMode={editMode}
        />
      </tbody>
    </table>
  );
};

export default GradeTable;
