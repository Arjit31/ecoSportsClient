import './Community.css';

const Community = ({ name, members, image }) => {
  return (
    <div className="community">
      <img src={image} alt={name} className="community-img"/>
      <div className="community-info">
        <h3>{name}</h3>
        <p>{members}</p>
      </div>
      <button className="join-btn">Join Room</button>
    </div>
  );
};

export default Community;
