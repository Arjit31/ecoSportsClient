import Community from '../../components/Community/Community';
import './Rooms.css';

const Rooms = () => {
  return (
    <div className="app-container">
      <div className="main-content">
        <div className="communities-section">
          <Community name="Basketball" members="No of Members" image="basketball-placeholder.jpg" />
          <Community name="Cricket" members="No of Members" image="cricket-placeholder.jpg" />
          <Community name="Football" members="No of Members" image="football-placeholder.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
