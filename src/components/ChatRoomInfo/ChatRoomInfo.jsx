import './ChatRoomInfo.css';

const ChatRoomInfo = () => {
  return (
    <div className="chat-room-info">
        <div className="contain">
            <img src="https://via.placeholder.com/150" alt="RoomImg"/>
            <h2 className="room-name">Room Name</h2>
        </div>
      <textarea placeholder="Description" className="Description" />
      <button className="leave-btn">Leave</button>
    </div>
  );
};

export default ChatRoomInfo;
