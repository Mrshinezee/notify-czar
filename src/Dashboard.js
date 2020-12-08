import React from 'react'
import { useNotify } from "./Nofications/NotificationProvider";

const Dashboard = () => {
    const { notify } = useNotify();
    return (
        <div>
            <button onClick={ () => notify.data('The profile was updated successfully')}>click Me ohhh </button>
        </div>
    )
}

export default Dashboard;
