import "./GradeRows.css";

const GradeRows = ({ studentInfo }) => {
  return [
    {
      pd: "01",
      course: "CHORUS 1",
      grade: "99",
    },
    {
      pd: "02",
      course: "WORLD HIST",
      grade: "",
    },
  ].map(({ pd, course, grade }) => (
    <tr>
      <td>{pd}</td>
      <td>{course}</td>
      <td className="grade-cell">
        {!grade
          ? "NG"
          : `${grade}% ${
              Number(grade) >= 90
                ? "A"
                : Number(grade) >= 80
                ? "B"
                : Number(grade) >= 70
                ? "C"
                : Number(grade) >= 60
                ? "D"
                : "F"
            }`}
      </td>
    </tr>
  ));
};

export default GradeRows;
