import "./RequestBtn.css";

const RequestBtn = ({ content, editMode, setEditMode }) => {
  const requestTypes = {
    ADD: "POST",
    UPD: "PATCH",
    DEL: "DELETE",
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
      {content}
    </button>
  );
};

export default RequestBtn;
