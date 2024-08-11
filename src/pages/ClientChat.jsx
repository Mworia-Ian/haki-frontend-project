import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";

// const socket = io("http://localhost:5000");
const socket = io("http://your-server-address:port");

const ClientChat = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });

    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (username && message) {
      const fullMessage = `${username}: ${message}`;
      socket.emit("message", fullMessage);
      setMessages((prevMessages) => [...prevMessages, fullMessage]);
      setMessage("");
    } else {
      alert("Please enter both username and message.");
    }
  };

  const handleBackClick = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-#c7c55b">
      <div
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
        style={{ background: "linear-gradient(144deg, #1827f5, #131204 75%)" }}
      >
        <button
          onClick={handleBackClick}
          className="bg-blue-600 hover:bg-blue-700 text-lg text-white font-bold py-2 px-4 rounded-lg mb-4 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Back
        </button>
        <div className="h-64 overflow-y-scroll mb-4 space-y-4">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <p
                key={index}
                className="bg-white text-black p-3 rounded-lg shadow-md"
              >
                {msg}
              </p>
            ))
          ) : (
            <p className="bg-white text-black p-3 rounded-lg shadow-md">
              No messages available.
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 bg-gray-900 border border-blue-500 rounded-lg px-2 py-1 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                id="message"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-gray-900 border border-blue-500 rounded-lg px-2 py-1 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              id="sendBtn"
              onClick={sendMessage}
              className="bg-blue-600 text-lg text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientChat;
