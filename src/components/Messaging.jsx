import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Messaging({ isOpen, onClose }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [receiverId, setReceiverId] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isOpen) {
            fetchMessages();
        }
    }, [isOpen]);

    const fetchMessages = async () => {
        try {
            const session = JSON.parse(localStorage.getItem('session'));
            const token = session?.accessToken;
            const response = await axios.get('http://localhost:5000/messages', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setMessages(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error('Error fetching messages:', error);
            setError('Failed to fetch messages');
        }
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        try {
            const session = JSON.parse(localStorage.getItem('session'));
            const token = session?.accessToken;
            await axios.post('http://localhost:5000/messages', 
                { receiver_id: receiverId, message: newMessage },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setNewMessage('');
            setReceiverId('');
            fetchMessages();
        } catch (error) {
            console.error('Error sending message:', error);
            setError('Failed to send message');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Messages</h3>
                    <button onClick={onClose} className="text-black">&times;</button>
                </div>
                
                {error && <div className="text-red-500 mb-2">{error}</div>}

                <div className="mb-4 h-64 overflow-y-auto">
                    {messages.map((msg) => (
                        <div key={msg.id} className="mb-2">
                            <span className="font-medium">{msg.id}: </span>
                            <span>{msg.message}</span>
                        </div>
                    ))}
                </div>
                
                <form onSubmit={sendMessage} className="space-y-2">
                    <input
                        type="text"
                        value={receiverId}
                        onChange={(e) => setReceiverId(e.target.value)}
                        placeholder="Receiver ID"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Messaging;