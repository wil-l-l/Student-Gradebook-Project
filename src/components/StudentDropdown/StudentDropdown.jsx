import "./StudentDropdown.css";

const StudentDropdown = () => {
  return (
    <form className="student-dropdown-box">
      <label htmlFor="">Current Student: </label>
      <select name="" id="" className="student-dropdown">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </form>
  );
};

export default StudentDropdown;
