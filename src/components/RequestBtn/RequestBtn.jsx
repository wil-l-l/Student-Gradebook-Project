import "./RequestBtn.css";

const RequestBtn = ({ content, setEditMode }) => {
  const requestTypes = {
    ADD: "POST",
    UPD: "PATCH",
    DEL: "DELETE",
  };

  return (
    <button
      onClick={() => {
        setEditMode(requestTypes[content] ? content : null);
      }}
      className="request-btn"
    >
      {content}
    </button>
  );
};

export default RequestBtn;
