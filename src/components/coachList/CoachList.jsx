import CoachCard from '../coachCard/CoachCard';
import './coachList.css'

const CoachList = () => {
  const coaches = [
    {
      name: "Meghan Arbogast",
      specialties: "Football",
      batches: 6,
      img: "meghan_img_url"
    },
    {
      name: "Pam Smith",
      specialties: "Cricket",
      batches: 3,
      img: "pam_img_url"
    },
    {
      name: "David Roche",
      specialties: "Basketball",
      batches: 5,
      img: "david_img_url"
    },
    {
      name: "Samantha Gash",
      specialties: "Cricket",
      batches: 4,
      img: "samantha_img_url"
    },
    {
      name: "Michael Wardian",
      specialties: "Football",
      batches: 2,
      img: "michael_img_url"
    }
  ];

  return (
    <div className="coach-list">
      <h2>Popular coaches</h2>
      {coaches.map((coach, index) => (
        <CoachCard key={index} coach={coach} />
      ))}
    </div>
  );
};

export default CoachList;
