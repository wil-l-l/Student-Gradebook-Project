import "./RequestBtn.css";
import UpdateIcon from "../../assets/icons/edit-pen-icon.png";
import AddIcon from "../../assets/icons/plus-icon.png";
import DeleteIcon from "../../assets/icons/trash-can-black-icon.png";

const RequestBtn = ({ content, editMode, setEditMode }) => {
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
      }}
      className={`request-btn ${editMode === content ? "request-btn--active" : "request-btn--inactive"}`}
    >
      <img
        src={requestTypes[content].icon}
        alt=""
        className="request-btn__img"
      />
    </button>
  );
};

export default RequestBtn;
