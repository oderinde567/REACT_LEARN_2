import {useState} from "react";

interface User {
    name: string;
    isAdmin: boolean;
}   



export const UserProfile: React.FC = () => {
    const [user, setUser] = useState<User>({
        name: 'Guest',
        isAdmin: false
    });
    const handleLogin = () => {
        setUser({
            name: 'Administrator',
            isAdmin: true
        });
    };

    const toggleAdmin = () => {
        setUser(prevUser => ({
            ...prevUser,
            isAdmin: !prevUser.isAdmin
        }));
    };

    return (
        <div style={styles.card}>
            <h2>User Profile</h2>
            <p>Name: <strong>{user.name}</strong></p>
            <p>Role: <strong>{user.isAdmin ? 'Admin' : 'Standard User'}</strong></p>

            <div style={styles.buttonGroup}>
                <button onClick={handleLogin} style={styles.button}>
                    Log in as Admin
                </button>

                <button onClick={toggleAdmin} style={styles.secondaryButton}>
                    Toggle Role
                </button>
            </div>
        </div>
    )
}


const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        minWidth: '250px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginTop: '15px',
    },

    button: {
        padding: '10px',
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },

    secondaryButton: {
        padding: '10px',
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    }
} as const;