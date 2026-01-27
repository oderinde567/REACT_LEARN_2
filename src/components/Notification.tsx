

type NotificationProps = {
    hasUnreadMessage: boolean;
}


function Notification({hasUnreadMessage}: NotificationProps) {
    return(
            <div>Notifications</div>

            {/* Only show alert if there are unread messages */}
            {hasUnreadMessage &&(
                <div>
                 you have unread messages !
                </div>
                 )}

            {/* Always show this footer */}
            <p style={{ fontSize: "0.9em", color: "#666"}}>
                Check your inbox regularly.
            </p>
    ) 
}

export default Notification