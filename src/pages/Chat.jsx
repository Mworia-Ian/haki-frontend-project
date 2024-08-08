import React from 'react';

const Chat = () => {
  const sendMessage = () => {
    alert('This feature is disabled.');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-black">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="h-64 overflow-y-scroll mb-4 space-y-4">
          <p className="bg-gray-700 text-white p-3 rounded-lg shadow-md">
            No messages available.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex">
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="flex-1 bg-gray-900 border border-blue-500 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              id="message"
              placeholder="Type a message"
              className="flex-1 bg-gray-900 border border-blue-500 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              id="sendBtn"
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
