import "./GradeRows.css";
import { useRef, useState } from "react";

const GradeRows = ({ studentInfo, setStudentInfo, editMode }) => {
  const rowsRef = useRef(null);
  const [activeRow, setActiveRow] = useState(null);
  const [cellToEdit, setCellToEdit] = useState(null);
  const TABLE_CELL_CLASS = "grade-row__cell";

  function canEditCell(location) {
    return (
      editMode === "UPD" &&
      cellToEdit !== null &&
      cellToEdit.location === location
    );
  }

  function handleRowClick(rowClicked) {
    if (editMode !== "DEL") return;
    if (activeRow === rowClicked) return;

    rowsRef.current.some((period) => {
      if (period === rowClicked) {
        setActiveRow(rowClicked);
        return true;
      }
    });
  }

  function handleCellClick(cell) {
    if (editMode !== "UPD") return;

    const location = cell.getAttribute("location");
    if (cellToEdit && cellToEdit.location === location) return;

    const cellType = location[2] === "2" ? "course" : "grade"; // location[2] = the col the cell is in the table

    setCellToEdit({
      location,
      content: (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className={`${editMode === "UPD" ? "cell-input-box" : TABLE_CELL_CLASS}`}
            type={`${cellType === "course" ? "text" : "number"}`}
            min={0}
            max={100}
            placeholder={`${cellType === "course" ? "Course..." : "Grade..."}`}
          />
        </form>
      ),
    });
  }

  return studentInfo.courses
    .map(({ pd, name, grade }, row) => ({
      pd,
      courseInfo: (
        <tr
          onClick={() => handleRowClick(pd)}
          ref={() => {
            if (!rowsRef.current) rowsRef.current = [];
            rowsRef.current.push(pd);
          }}
          className={`grade-row ${editMode === "DEL" && pd === activeRow ? "delete-row" : ""}`}
        >
          <td
            location={`${row},1`}
            className={`${TABLE_CELL_CLASS} period-cell`}
          >
            {pd}
          </td>
          <td
            location={`${row},2`}
            onClick={(e) => handleCellClick(e.target)}
            className={`${TABLE_CELL_CLASS} course-cell grade-table__col-2`}
          >
            {canEditCell(`${row},2`) ? cellToEdit.content : name}
          </td>
          <td
            location={`${row},3`}
            onClick={(e) => handleCellClick(e.target)}
            className={`${TABLE_CELL_CLASS} grade-cell`}
          >
            {canEditCell(`${row},3`)
              ? cellToEdit.content
              : !grade
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
