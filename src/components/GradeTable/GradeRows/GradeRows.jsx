import "./GradeRows.css";

const GradeRows = ({ studentInfo }) => {
  return studentInfo.courses.map(({ name, pd, grade }) => (
    <tr>
      <td>{pd}</td>
      <td>{name}</td>
      <td className="grade-cell">
        {!grade
          ? "NG"
          : `${grade}% ${
              grade >= 90
                ? "A"
                : grade >= 80
                ? "B"
                : grade >= 70
                ? "C"
                : grade >= 60
                ? "D"
                : "F"
            }`}
      </td>
    </tr>
  ));
};

export default GradeRows;
