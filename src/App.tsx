import { Badge } from "./components/Badge"
import Welcome from "./components/Welcome"
import WelcomeMessage from "./components/WelcomeMessage"


function App() {

 return (
  <>

  {/*Props*/}
  {/* Components are useless if they always display the same things. Pro allow us to pass data down into a component to customize, it just like passing arguments to a function */}

  <Welcome name="Femi"/>
  <WelcomeMessage/>
 {/* <Badge label="New" color="blue" />
 <Badge label="New" color="purple" /> */}
  <Badge/>

  </>
 )
}

export default App
