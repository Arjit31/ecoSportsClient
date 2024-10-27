import "./CoachProfile.css";

const CoachProfile = () => {
  return (
    <div className="coach-profile">
      <img
        src="https://via.placeholder.com/150"
        alt="Coach"
        className="coach-img"
      />
      <div className="coach-details">
        <p>By Coach</p>
        <h3>Matt Wilpers</h3>
      </div>
      <button className="follow-btn">Follow</button>
    </div>
  );
};

export default CoachProfile;
