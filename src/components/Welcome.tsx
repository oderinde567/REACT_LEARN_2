// Defining the "shape" of data to ensure our components receive exactly what they expect.

interface WelcomeProps{
        name: string;
}


function Welcome(props: WelcomeProps) {
    
    //** A components is a custom HTML tag you create yourslef. It is  Javascript function that returns JSX(javascript XML).

    /*
    *Imperative (The old way)
    you handle the steps: Create elements -> add text -> append to body
    const div = document.createElement('div);
    div.texttContent = 'Hello World;
    document.body.appendChild(div)

    * Declarative (The React way)
    you hanlde the description: "I want a div with text."

    function app (){
    return <div>Hello World</div>
    }

    * A React component is just a Javascript function that return JSX. JSX looks like HTML, but it allows you to use Javascript logic directly inside it using curly braces {}.

    */

    return (
        <div>
            <h3>Welcome, {props.name}</h3>
        </div>
    )
}

export default Welcome;