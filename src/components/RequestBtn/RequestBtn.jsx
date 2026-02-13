import "./RequestBtn.css";
import UpdateIcon from "../../assets/icons/edit-pen-icon.png";
import AddIcon from "../../assets/icons/plus-icon.png";
import DeleteIcon from "../../assets/icons/trash-can-black-icon.png";
import { useState } from "react";
import fetchStudents from "../../utils/fetchStudents";

const RequestBtn = ({
  content,
  editMode,
  setEditMode,
  students,
  setStudents,
}) => {
  const [isAddMode, setIsAddMode] = useState(false);
  const requestIcons = {
    ADD: AddIcon,
    UPD: UpdateIcon,
    DEL: DeleteIcon,
  };

  function onAddButtonClick() {
    const presetData = {
      id: "4",
      name: "Bri Stewart",
      grade_level: 11,
      courses: [
        {
          name: "Geography",
          pd: 5,
          grade: 80,
        },
        {
          name: "Science",
          pd: 2,
          grade: 88,
        },
        {
          name: "Math",
          pd: 3,
          grade: 96,
        },
        {
          name: "Music",
          pd: 4,
          grade: 97,
        },
        {
          name: "Art",
          pd: 6,
          grade: 100,
        },
        {
          name: "English",
          pd: 1,
          grade: 95,
        },
      ],
    };
    fetchStudents({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(presetData),
    }).then(
      (result) => {
        setStudents([...students, result]);
      },
      (error) => {
        console.log(error);
      },
    );
  }

  return (
    <button
      onClick={() => {
        setEditMode(
          editMode === null && requestIcons[content]
            ? content
            : content !== editMode
              ? editMode
              : null,
        );
        if (content !== "ADD") return;
        if (isAddMode) {
          setIsAddMode(false);
          setEditMode(null);
        } else {
          setIsAddMode(true);
          onAddButtonClick();
        }
      }}
      className={`request-btn ${editMode === content ? "request-btn--active" : "request-btn--inactive"}`}
    >
      <img
        src={requestIcons[content]}
        alt={content}
        className="request-btn__img"
      />
    </button>
  );
};

export default RequestBtn;
