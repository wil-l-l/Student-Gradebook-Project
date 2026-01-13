import "./ProfileBox.css";

const ProfileBox = ({ studentInfo }) => {
  return (
    <div className="profile-box">
      <img src="" alt="" className="profile-img" />
      <div className="profile-name-box">
        <p className="profile-name">{studentInfo.name}</p>
      </div>
    </div>
  );
};

export default ProfileBox;
