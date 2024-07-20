// components/ChatButton.js

import { useState } from "react";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleChat} style={buttonStyle}>
        Chat
      </button>
      {isOpen && (
        <div style={chatPopupStyle}>
          <iframe
            src="YOUR_CHATBOT_URL" // replace with your chatbot URL
            style={iframeStyle}
          ></iframe>
        </div>
      )}
    </>
  );
};

const buttonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  fontSize: "18px",
  cursor: "pointer",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};

const chatPopupStyle = {
  position: "fixed",
  bottom: "90px",
  right: "20px",
  width: "300px",
  height: "400px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
};

const iframeStyle = {
  width: "100%",
  height: "100%",
  border: "none",
};

export default ChatButton;
