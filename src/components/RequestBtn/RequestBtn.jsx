import "./RequestBtn.css";

const RequestBtn = ({ content }) => {
  const requestTypes = {
    "ADD": 'POST',
    "UPD": 'PATCH',
    "DEL": 'DELETE',
  };

  return (
    <button
      onClick={() => {
        console.log(`An RequestBtn was clicked.`);
      }}
      className="request-btn"
    >
      {content}
    </button>
  );
};

export default RequestBtn;
