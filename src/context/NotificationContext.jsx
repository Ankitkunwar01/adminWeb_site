import React, { createContext, useContext, useState, useEffect } from 'react';

const NotificationContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifications, setNotifications] = useState([]);

  // Fetch unread count from backend
  const fetchUnreadCount = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('https://backend-website-7ynm.onrender.com/api/contact/count/unread', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setUnreadCount(data.count || 0);
    } catch (error) {
      console.error('Error fetching unread count:', error);
    }
  };

  // Fetch recent notifications
  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('https://backend-website-7ynm.onrender.com/api/contact', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      // With pagination, data is now in result.messages
      const messages = Array.isArray(result) ? result : result.messages || [];
      // Get only unread messages for notifications
      const unreadMessages = messages.filter(msg => msg.status === 'new').slice(0, 5);
      setNotifications(unreadMessages);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  // Mark a notification as read
  const markAsRead = async (id) => {
    try {
      const token = localStorage.getItem('adminToken');
      await fetch(`https://backend-website-7ynm.onrender.com/api/contact/${id}/read`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      // Update local state
      setNotifications(prev => prev.filter(notif => notif._id !== id));
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  // Refresh notifications
  const refreshNotifications = () => {
    fetchUnreadCount();
    fetchNotifications();
  };

  // Initial fetch and set up polling
  useEffect(() => {
    fetchUnreadCount();
    fetchNotifications();

    // Poll for new notifications every 30 seconds
    const interval = setInterval(() => {
      fetchUnreadCount();
      fetchNotifications();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const value = {
    unreadCount,
    notifications,
    markAsRead,
    refreshNotifications,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
