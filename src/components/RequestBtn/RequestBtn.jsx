import "./RequestBtn.css";
import UpdateIcon from "../../assets/icons/edit-pen-icon.png";
import AddIcon from "../../assets/icons/plus-icon.png";
import DeleteIcon from "../../assets/icons/trash-can-black-icon.png";
import { useRef, useState } from "react";

const RequestBtn = ({
  content,
  editMode,
  setEditMode,
  setStudentInfo = null,
}) => {
  const [isAddMode, setIsAddMode] = useState(false);
  const abortControllerRef = useRef(null);
  const requestTypes = {
    ADD: {
      method: "POST",
      icon: AddIcon,
    },
    UPD: {
      method: "PATCH",
      icon: UpdateIcon,
    },
    DEL: {
      method: "DELETE",
      icon: DeleteIcon,
    },
  };

  async function onAddButtonClick() {
    const BASE_URL = "http://localhost:3000/students";

    const presetData = {
      id: "5",
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

    if (abortControllerRef.current) abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(presetData),
        signal: abortControllerRef.current.signal,
      });
      const newData = await response.json();
      setStudentInfo(newData);
    } catch (err) {
      if (err.name === "AbortError") return;
    }
  }

  return (
    <button
      onClick={() => {
        setEditMode(
          editMode === null && requestTypes[content]
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
        src={requestTypes[content].icon}
        alt={content}
        className="request-btn__img"
      />
    </button>
  );
};

export default RequestBtn;
