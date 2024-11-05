import Community from '../../components/Community/Community';
import './Rooms.css';

const Rooms = () => {
  return (
    <div className="main-content">
      <div className="communities-section">
        <Community name="Basketball" members="No of Members" image="https://via.placeholder.com/150" />
        <Community name="Cricket" members="No of Members" image="https://via.placeholder.com/150" />
        <Community name="Football" members="No of Members" image="https://via.placeholder.com/150" />
      </div>
    </div>
  );
};

export default Rooms;
