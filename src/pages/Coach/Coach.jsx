import BatchesList from "../../components/BatchesList/BatchesList";
import "./Coach.css";

const coach = {
  name: "Michael Wardian",
  specialties: "Football",
  batches: 2,
  img: "https://via.placeholder.com/150"
}

const Coach = () => {
  return (
    <div className="page-layout">
      <div className="content">
        <img src={coach.img} alt="." className="coachMainImg" />
        <h2 className="coachName">{coach.name}</h2>
        <p className="coachSports">{coach.specialties}</p>
        <BatchesList/>
      </div>
    </div>
  );
};

export default Coach;
