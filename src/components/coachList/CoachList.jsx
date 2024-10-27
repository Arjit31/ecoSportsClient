import CoachCard from '../coachCard/CoachCard';
import './coachList.css'

const CoachList = () => {
  const coaches = [
    {
      name: "Meghan Arbogast",
      specialties: "Marathon, half marathon, 10k, 5k",
      img: "meghan_img_url"
    },
    {
      name: "Pam Smith",
      specialties: "Marathon, half marathon, 10k, 5k",
      img: "pam_img_url"
    },
    {
      name: "David Roche",
      specialties: "Marathon, half marathon, 10k, 5k",
      img: "david_img_url"
    },
    {
      name: "Samantha Gash",
      specialties: "Marathon, half marathon, 10k, 5k",
      img: "samantha_img_url"
    },
    {
      name: "Michael Wardian",
      specialties: "Marathon, half marathon, 10k, 5k",
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
