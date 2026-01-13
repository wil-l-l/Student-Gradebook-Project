import "./GradeTable.css";
import GradeRows from "./GradeRows/GradeRows";

const GradeTable = ({ studentInfo }) => {
  return (
    <table>
      <thead className="grade-table__heading-row">
        <tr>
          <th>Pd</th>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <GradeRows studentInfo={studentInfo} />
      </tbody>
    </table>
  );
};

export default GradeTable;
