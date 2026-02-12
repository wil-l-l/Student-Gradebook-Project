import "./GradeRows.css";
import { useEffect, useRef, useState } from "react";

const GradeRows = ({
  studentInfo,
  setStudentInfo,
  editMode,
  currentStudent,
}) => {
  const rowsRef = useRef(null);
  const [activeRow, setActiveRow] = useState(null);
  const [cellToEdit, setCellToEdit] = useState(null);
  const [newStudentInfo, setNewStudentInfo] = useState(null);
  const [deleteClicks, setDeleteClicks] = useState(0);
  const inputRef = useRef(null);
  const TABLE_CELL_CLASS = "grade-row__cell";
  const abortControllerRef = useRef(null);
  const BASE_URL = "http://localhost:3000/students";
  const deleteClicksThreshold = 3;

  useEffect(() => {
    const fetchGrades = async () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
      abortControllerRef.current = new AbortController();

      try {
        const response = await fetch(BASE_URL + "/" + currentStudent, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudentInfo),
          signal: abortControllerRef.current.signal,
        });
        const studentInfo = await response.json();
        setStudentInfo(studentInfo);
      } catch (err) {
        if (err.name === "AbortError") return;
      }
    };

    if (newStudentInfo) fetchGrades();
  }, [newStudentInfo, setStudentInfo, currentStudent, deleteClicks]);

  function canEditCell(location) {
    return (
      editMode === "UPD" &&
      cellToEdit !== null &&
      cellToEdit.location === location
    );
  }

  const closeActiveCell = () => {
    inputRef.current.blur();
    setCellToEdit(null);
    inputRef.current = null;
  };

  const onDeletedRow = () => {
    setDeleteClicks(0);
    setActiveRow(null);
  };

  function handleRowClick(rowClicked) {
    if (editMode !== "DEL") return;
    if (activeRow === rowClicked) {
      const currentClicks = deleteClicks + 1;
      setDeleteClicks(currentClicks);
      if (currentClicks === deleteClicksThreshold) {
        const newStudentInfo = { ...studentInfo };
        const updatedCourses = [];
        studentInfo.courses.forEach((studentObj) => {
          if (studentObj.pd !== rowClicked) updatedCourses.push(studentObj);
        });
        newStudentInfo.courses = updatedCourses;

        setNewStudentInfo(newStudentInfo);
        onDeletedRow();
      }
      return;
    }

    rowsRef.current.some((period) => {
      if (period === rowClicked) {
        setActiveRow(rowClicked);
        setDeleteClicks(1);
        return true;
      }
    });
  }

  function handleCellClick(cell, rowPeriod) {
    if (editMode !== "UPD") return;

    const location = cell.getAttribute("location");
    if (cellToEdit && cellToEdit.location === location) return; // Last condition means the same cell that has already been edited was clicked again (just in case)
    if (cellToEdit && location === null) return; // The value of 'cell' parameter is a NESTED input element whose ancestor is a 'td' element. The HTML chain looks like this: td > form > input (the cell). The input element has no 'location' attribute and that also means this cell that was just clicked is the same cell currently being edited anyway (so don't run the rest of this function)

    const cellType = location[2] === "2" ? "course" : "grade"; // location[2] = the col the cell is in the table

    setCellToEdit({
      location,
      content: (
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const newStudentInfo = studentInfo.courses.map(
              ({ name, pd, grade }) => {
                if (rowPeriod === pd) {
                  if (cellType === "course") {
                    name = inputRef.current.value;
                  } else {
                    grade = inputRef.current.value;
                  }
                }
                return {
                  name,
                  pd,
                  grade,
                };
              },
            );

            setNewStudentInfo({ ...studentInfo, courses: newStudentInfo });

            closeActiveCell();
          }}
        >
          <input
            className={`${editMode === "UPD" ? "cell-input-box" : TABLE_CELL_CLASS}`}
            type={`${cellType === "course" ? "text" : "number"}`}
            min={0}
            max={100}
            ref={inputRef}
            autoFocus
            placeholder={`${cellType === "course" ? "Course..." : "Grade..."}`}
            onKeyDown={(e) => {
              if (e.key === "Escape") closeActiveCell();
            }}
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
          key={pd}
          onClick={() => handleRowClick(pd)}
          ref={() => {
            if (!rowsRef.current) rowsRef.current = [];
            rowsRef.current.push(pd);
          }}
          className={`grade-row ${editMode === "DEL" && pd === activeRow ? `${deleteClicks === 1 ? "delete-row" : "delete-row-confirm"}` : ""}`}
        >
          <td location={`${row},1`} className={`${TABLE_CELL_CLASS}`}>
            {pd}
          </td>
          <td
            location={`${row},2`}
            onClick={(e) => handleCellClick(e.target, pd)}
            className={`${TABLE_CELL_CLASS}`}
          >
            {canEditCell(`${row},2`) ? cellToEdit.content : name}
          </td>
          <td
            location={`${row},3`}
            onClick={(e) => handleCellClick(e.target, pd)}
            className={`${TABLE_CELL_CLASS}`}
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
