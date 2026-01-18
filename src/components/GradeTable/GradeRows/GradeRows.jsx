import "./GradeRows.css";

const GradeRows = ({ studentInfo, editMode }) => {
  function handleRowClick() {
    if (editMode !== "DEL") return;
  }

  return studentInfo.courses
    .map(({ pd, name, grade }) => ({
      pd,
      courseInfo: (
        <tr onClick={handleRowClick} className="grade-row">
          <td className="grade-cell">{pd}</td>
          <td className="grade-cell grade-table__col-2">{name}</td>
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
