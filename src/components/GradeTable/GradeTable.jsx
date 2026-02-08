import "./GradeTable.css";
import GradeRows from "./GradeRows/GradeRows";

const GradeTable = ({
  studentInfo,
  setStudentInfo,
  editMode,
  currentStudent,
}) => {
  return (
    <table className="grade-table">
      <thead className="grade-table__heading-row">
        <tr>
          <th>Pd</th>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <GradeRows
          currentStudent={currentStudent}
          studentInfo={studentInfo}
          setStudentInfo={setStudentInfo}
          editMode={editMode}
        />
      </tbody>
    </table>
  );
};

export default GradeTable;
