import { Badge } from "./components/Badge"
import { Counter } from "./components/Counter"
import Greeting from "./components/Greeting"
import Notification from "./components/Notification"
import UserList from "./components/UserList"
import { UserProfile } from "./components/UserProfile"
import UserStatus from "./components/UserStatus"
import Welcome from "./components/Welcome"
import WelcomeMessage from "./components/WelcomeMessage"


function App() {
  // Simulated app state

  const isLoggedIn:boolean = true;
  const userIsActive:boolean = false;
  const hasUnreadMessage:boolean = false;

  return (
    <>


{/* Props */}
{/* Components are useless if they always display the same things. Prop allow us to pass data down into a component to customize, it just like passing arguments to a function */}
     {/* <Welcome name="Tenny"/>
     <WelcomeMessage />
     <Badge label="New" color="red" />
     <Badge label="Old" color="green" />  
     <UserList /> */}


        {/* <h1>React Conditional Rendering Examples</h1>

        <Greeting isLoggedIn={isLoggedIn} />

        <UserStatus isActive={userIsActive} />
        <Notification hasUnreadMessage={hasUnreadMessage} /> */}

  <h2>React State - Clear Examples</h2>
<div style={styles.container}>

  <Counter />
  <UserProfile />

</div>



    </>
  )
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  }
} as const

export default App