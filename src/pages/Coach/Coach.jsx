import CoachProfile from "../../components/coachProfile/CoachProfile";
import BatchesList from "../../components/BatchesList/BatchesList";
import "./Coach.css";

const Coach = () => {
  return (
    <div className="page-layout">
      <div className="content">
        <h2>Running</h2>
        <p>Running, 4 workouts</p>
        <CoachProfile />
        <BatchesList/>
      </div>
    </div>
  );
};

export default Coach;
