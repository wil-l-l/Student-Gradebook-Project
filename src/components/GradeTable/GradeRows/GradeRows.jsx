import "./GradeRows.css";

const GradeRows = ({ studentInfo }) => {
  return studentInfo.courses
    .map(({ pd, name, grade }) => ({
      pd,
      courseInfo: (
        <tr className="grade-row">
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
      ),
    }))
    .sort((a, b) => (a.pd > b.pd ? 1 : a.pd < b.pd ? -1 : 0))
    .map(({ courseInfo }) => courseInfo);
};

export default GradeRows;
