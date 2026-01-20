import "./GradeRows.css";
import { useRef, useState } from "react";

const GradeRows = ({ studentInfo, editMode }) => {
  const rowsRef = useRef(null);
  const [rowPdClicked, setRowPdClicked] = useState(null);

  function handleRowClick(pd) {
    if (editMode !== "DEL") return;
    if (rowPdClicked === pd) return;

    rowsRef.current.some((period) => {
      if (period === pd) {
        setRowPdClicked(pd);
        return true;
      }
    });
  }
  function handleCellClick() {
    if (editMode !== "UPD") return;
  }

  return studentInfo.courses
    .map(({ pd, name, grade }) => ({
      pd,
      courseInfo: (
        <tr
          onClick={() => {
            handleRowClick(pd);
          }}
          ref={() => {
            if (!rowsRef.current) rowsRef.current = [];
            rowsRef.current.push(pd);
          }}
          className={`grade-row ${pd === rowPdClicked ? "delete-row" : ""}`}
        >
          <td
            onClick={() => {
              handleCellClick();
            }}
            className="grade-cell"
          >
            {pd}
          </td>
          <td
            onClick={() => {
              handleCellClick();
            }}
            className="grade-cell grade-table__col-2"
          >
            {name}
          </td>
          <td
            onClick={() => {
              handleCellClick();
            }}
            className="grade-cell"
          >
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
