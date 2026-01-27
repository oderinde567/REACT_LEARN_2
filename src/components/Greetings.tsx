/*
    *if....else (outside JSX)
    *Ternary operator (condition ? A : B)
    *Logical AND (condition && <Component/>)
*/


type GreetingsProps = {
    isLoggedIn: boolean;
}
function Greetings({isLoggedIn} : GreetingsProps) {
    let message;

    if (isLoggedIn){
        message = (
             <div>
        <h2>Welcome back, developer!</h2>
        <p>you have full access to the dashboard.</p>
    </div>
        );
    } else{
        message = (
            <div>
                <h2>Hello, Guest!</h2>
                <p>Please log in to continue.</p>
            </div>
        )    
    
}   
 return <>{message}</>  
  
}

export default Greetings