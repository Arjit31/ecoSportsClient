import { useState, useEffect } from 'react';
import './ChatArea.css';

const ChatArea = () => {
  // Initial set of messages to simulate existing chat history
  const initialMessages = [
    { text: "Hey, how’s it going?", sender: "Alice" },
    { text: "Good, how about you?", sender: "Bob" },
    { text: "All good here! Excited for the meeting?", sender: "Alice" },
    { text: "Absolutely!", sender: "You" },
    { text: "Hey, how’s it going?", sender: "Alice" },
    { text: "Good, how about you?", sender: "Bob" },
    { text: "All good here! Excited for the meeting?", sender: "Alice" },
    { text: "Absolutely!", sender: "You" },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  // Scrolls to the bottom of the chat area whenever a new message is added
  useEffect(() => {
    const chatArea = document.querySelector('.messages');
    chatArea.scrollTop = chatArea.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-area">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === "You" ? "sent" : "received"}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="message-input"
        />
        <button onClick={handleSend} className="send-btn">Send</button>
      </div>
    </div>
  );
};

export default ChatArea;
