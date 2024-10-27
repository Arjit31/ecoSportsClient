/* eslint-disable react/prop-types */
import './coachCard.css'

const CoachCard = ({ coach }) => {
  return (
    <div className="coach-card">
      <img src={coach.img} alt={coach.name} className="coach-img" />
      <div className="coach-details">
        <h3>{coach.name}</h3>
        <p>{coach.specialties}</p>
      </div>
      <button className="join-batch-btn">Join batch</button>
    </div>
  );
};

export default CoachCard;
