import './Community.css';

const Community = ({ name, members, image }) => {
  return (
    <div className="roomCardContainer">
      <div className="community">
        <div className='infoImageContainer'>
          <img src={image} alt={name} className="community-img"/>
          <div className="community-info">
            <h3>{name}</h3>
            <p>{members}</p>
          </div>
        </div>
        <button className="join-btn">Join Room</button>
      </div>
    </div>
  );
};

export default Community;
