import React, { useState, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';
function Messaging({ isOpen, onClose }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [replyToMessageId, setReplyToMessageId] = useState(null);
    const [error, setError] = useState(null);
    const [notificationCount, setNotificationCount] = useState(0);

    useEffect(() => {
        if (isOpen) {
            fetchMessages();
            const interval = setInterval(fetchMessages, 5000); // Poll every 5 seconds
            return () => clearInterval(interval); // Cleanup interval on component unmount
        }
    }, [isOpen]);

    const fetchMessages = async () => {
        try {
            const session = JSON.parse(localStorage.getItem('session'));
            const token = session?.accessToken;
            const response = await fetch('http://localhost:5000/messages', {
                headers: { Authorization: `Bearer ${token}` }
            });
            const messagesData = await response.json();
            setMessages(messagesData);

            // Calculate the number of unread messages
            const unreadCount = messagesData.filter(msg => !msg.read).length;
            setNotificationCount(unreadCount);
        } catch (error) {
            console.error('Error fetching messages:', error);
            setError('Failed to fetch messages');
        }
    };

    const handleReply = (message) => {
        setReplyToMessageId(message.id);
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        try {
            const session = JSON.parse(localStorage.getItem('session'));
            const token = session?.accessToken;
            const messageData = {
                receiver_id: 1,  // The receiver ID is set to replyToMessageId
                message: newMessage,
                reply_to: replyToMessageId,  // The reply_to is also set to replyToMessageId
            };

            // Ensure receiver_id and message are not empty
            if (!messageData.receiver_id || !messageData.message.trim()) {
                setError('Receiver ID and message are required');
                return;
            }

            const response = await fetch('http://localhost:5000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(messageData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || 'Failed to send message');
                return;
            }

            setNewMessage('');
            setReplyToMessageId(null);
            fetchMessages(); // Refresh messages after sending
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
                    <div className="relative">
                        <FaBell className="text-blue-500 text-2xl" />
                        {notificationCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                                {notificationCount}
                            </span>
                        )}
                    </div>
                </div>

                {error && <div className="text-red-500 mb-2">{error}</div>}

                <div className="mb-4 h-64 overflow-y-auto">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`mb-2 flex ${msg.sender_id === JSON.parse(localStorage.getItem('session'))?.userId ? 'justify-end' : 'justify-start'}`}
                            onClick={() => handleReply(msg)}
                        >
                            <div className={`p-2 border rounded-lg ${msg.sender_id === JSON.parse(localStorage.getItem('session'))?.userId ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                                <div className="font-semibold">{msg.sender_name}</div>
                                <div>{msg.message}</div>
                                <button onClick={(e) => { e.stopPropagation(); handleReply(msg); }} className="text-blue-500 mt-1">
                                    Reply
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <form onSubmit={sendMessage} className="space-y-2">
                    {replyToMessageId && (
                        <div className="bg-gray-100 p-2 rounded mb-2">
                            <strong>Replying to:</strong> {messages.find(msg => msg.id === replyToMessageId)?.message}
                        </div>
                    )}
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
