/* eslint-disable react/prop-types */
import './coachCard.css'

const CoachCard = ({ coach }) => {
  return (
    <div className="coach-card">
      <div className='wrapperCoach'>
        <img src={coach.img} alt={coach.name} className="coach-img" />
        <div className="coach-details">
          <h3>{coach.name}</h3>
          <p>{coach.specialties}</p>
          <p>{coach.batches} batches</p>
        </div>
      </div>
      <button className="join-batch-btn">View batches</button>
    </div>
  );
};

export default CoachCard;
