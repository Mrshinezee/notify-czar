import React from 'react'

const Notification = (props) => {
    return (
        <div>
            <p>{props.message}</p>
            <button onClick={props.clearNotify}> clear</button>
        </div>
    )
}
export default Notification;