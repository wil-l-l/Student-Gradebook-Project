import "./GradeRows.css";
import { useRef, useState } from "react";

const GradeRows = ({ studentInfo, editMode }) => {
  const rowsRef = useRef(null);
  const [rowPdClicked, setRowPdClicked] = useState(null);
  const [cellToEdit, setCellToEdit] = useState(null);

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
  function handleCellClick(target) {
    if (editMode !== "UPD") return;

    let typeOfCell = "grade";
    target.classList.forEach((name) => {
      if (name === "course-cell") {
        typeOfCell = "course";
      }
    });

    let inputElement = null;
    if (typeOfCell === "grade-cell") {
      console.warn("grade-cell clicked!");
      inputElement = (
        <input
          className="cell-input-box"
          type="text"
          placeholder="Change Grade"
        />
      );
    } else {
      inputElement = (
        <input
          className="cell-input-box"
          type="text"
          placeholder="Change Course Name"
        />
      );
    }

    setCellToEdit({
      pd: target.getAttribute("id"),
      innerText: target.innerText,
      content: (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {inputElement}
        </form>
      ),
    });
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
          <td className="grade-cell">{pd}</td>
          <td
            id={pd}
            onClick={(e) => {
              if (cellToEdit && Number(cellToEdit.pd) === Number(pd)) return;
              handleCellClick(e.target);
            }}
            className="grade-row__cell course-cell grade-table__col-2"
          >
            {cellToEdit !== null &&
            cellToEdit.innerText === name &&
            Number(cellToEdit.pd) === Number(pd)
              ? cellToEdit.content
              : name}
          </td>
          <td
            id={pd}
            onClick={(e) => {
              if (cellToEdit && Number(cellToEdit.pd) === Number(pd)) return;

              handleCellClick(e.target);
            }}
            className="grade-row__cell grade-cell"
          >
            {cellToEdit !== null &&
            Number(cellToEdit.pd) === Number(pd) &&
            cellToEdit.innerText ===
              (!grade
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
                  }`)
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
