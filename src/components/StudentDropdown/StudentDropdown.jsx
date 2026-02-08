import "./StudentDropdown.css";

const StudentDropdown = ({ currentStudent, setCurrentStudent }) => {
  return (
    <div className="student-dropdown-box">
      <p>Current Student: {currentStudent}</p>
      <form>
        <label htmlFor="">Select Different Student:</label>
        <select
          onChange={(e) => setCurrentStudent(e.target.value)}
          className="student-dropdown"
        >
          <option value="" selected disabled hidden></option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </form>
    </div>
  );
};

export default StudentDropdown;
