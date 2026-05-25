export const Greetings = (props) => {
    const greetings = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    } 
    return (
        <div id="greeting-card">
            <p>{greetings[props.lang]} {props.children}</p>
        </div>
    )
}