import ChatRoomInfo from '../../components/ChatRoomInfo/ChatRoomInfo';
import ChatArea from '../../components/ChatArea/ChatArea';
import './ChatRoom.css';

const ChatRoom = () => {
  return (
    <div className="chat-room-page">
      <div className="chat-room-content">
        <ChatRoomInfo />
        <ChatArea />
      </div>
    </div>
  );
};

export default ChatRoom;
