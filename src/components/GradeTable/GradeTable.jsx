import "./GradeTable.css";
import GradeRows from "./GradeRows/GradeRows";

const GradeTable = ({ studentInfo, setStudentInfo, editMode }) => {
  return (
    <table className="grade-table">
      <thead className="grade-table__heading-row grade-table__col-1">
        <tr>
          <th className="grade-table__heading-text">Pd</th>
          <th className="grade-table__heading-text grade-table__col-2">
            Course
          </th>
          <th className="grade-table__heading-text grade-table__col-3">
            Grade
          </th>
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
