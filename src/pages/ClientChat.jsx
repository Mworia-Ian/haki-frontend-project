import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '/firebase'; // Import the Firestore instance

const ClientChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const navigate = useNavigate();

  const session = JSON.parse(localStorage.getItem('session'));
  const token = session?.accessToken;
  const receiverId = 3; // Replace with the actual lawyer ID
  const currentUserId = 1; // Replace with the actual user ID

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:5000/messages', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch messages: ${response.statusText}`);
        }

        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
        alert('Error fetching messages: ' + error.message);
      }
    };

    fetchMessages();

    const messagesRef = collection(db, 'messages');
    const messagesQuery = query(
      messagesRef,
      where('sender_id', 'in', [currentUserId, receiverId]),
      where('receiver_id', 'in', [currentUserId, receiverId]),
      orderBy('timestamp')
    );

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(newMessages);
    });

    // Cleanup Firestore listener on component unmount
    return () => unsubscribe();
  }, [token, currentUserId, receiverId]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        receiver_id: receiverId,
        message: inputMessage,
      };

      try {
        const response = await fetch('http://localhost:5000/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(newMessage),
        });

        if (response.ok) {
          const messageData = await response.json();
          setInputMessage('');
        } else {
          console.error('Failed to send message');
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F2F5F5]">
      <header className="bg-[#37B9F1] text-white py-4 px-6 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Chat with Lawyer</h1>
          <button
            onClick={() => navigate('/lawyers')}
            className="text-lg bg-white text-[#37B9F1] font-semibold py-2 px-4 rounded-lg hover:bg-gray-200"
          >
            Back to Lawyers
          </button>
        </div>
      </header>

      <div className="flex-grow p-6 bg-white shadow-md rounded-lg overflow-auto mt-4 mx-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500">Start the conversation...</div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender_id === currentUserId ? 'justify-end' : 'justify-start'} mb-4`}
            >
              <div
                className={`max-w-xs p-4 rounded-lg ${
                  message.sender_id === currentUserId ? 'bg-[#37B9F1] text-white' : 'bg-gray-200 text-black'
                }`}
              >
                {message.message}
              </div>
            </div>
          ))
        )}
      </div>

      <footer className="bg-white p-4 shadow-md flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-lg mr-4"
        />
        <button
          onClick={handleSendMessage}
          className="bg-[#37B9F1] text-white py-2 px-4 rounded-lg hover:bg-[#2a9dd3]"
        >
          Send
        </button>
      </footer>
    </div>
  );
};

export default ClientChat;
