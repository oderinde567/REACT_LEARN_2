import { Badge } from "./components/Badge"
import Welcome from "./components/Welcome"
import WelcomeMessage from "./components/WelcomeMessage"
import UserList from "./components/UserList"
import Greetings from "./components/Greetings"
import UserStatus from "./components/UserList"
import Notification from "./components/Notification"


function App() {
  // Simulated app state

  const isLoggedIn: boolean = true;
  const userIsActive:boolean = false;
  const hasUnreadMessage: boolean = false;

 return (
  <>

  {/*Props*/}
  {/* Components are useless if they always display the same things. Pro allow us to pass data down into a component to customize, it just like passing arguments to a function */}

  {/* <Welcome name="Femi"/>
  <WelcomeMessage/>
 <Badge label="New" color="blue" />
 <Badge label="New" color="green" />
    <UserList/>  */}
   
    <div style={{padding: "20px", maxWidth: "600px", margin:"0 auto" }}>
        <h1>React Conditional Rendering examples</h1>

        <Greetings isLoggedIn={isLoggedIn} />

        <UserStatus isActive = {userIsActive} />
        <Notification hasUnreadMessage={hasUnreadMessage}/>

    </div>

  </>
 )
}

export default App
