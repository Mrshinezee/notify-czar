import React, { useState } from 'react';
import Notification from "./Notification";


const NotificationContext = React.createContext();

const NotificationProvider = ({ children, ...rest }) => {
    const [notification, setNotification] = useState('');
    return (
        <NotificationContext.Provider value={{ notify: { data: setNotification } }} {...rest}>
            <div className="notification-wrapper">
             {notification ? <Notification  clearNotify={() => setNotification('')} message={notification} /> : null }
            </div>
           {children} 
        </NotificationContext.Provider>
    )
}

const useNotify = () => React.useContext(NotificationContext);
export { NotificationProvider, useNotify };
