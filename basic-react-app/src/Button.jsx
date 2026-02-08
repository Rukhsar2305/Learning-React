function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver() {
    console.log("Bye!");
}

function handledblClick() {
    console.log("you double clicked");
}

export default function Button() {
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Optio reiciendis ducimus magnam distinctio, alias voluptatum maiores eaque saepe? 
                Maiores natus eius libero harum culpa deserunt tenetur corporis et sed quis.
            </p>
            <button onDoubleClick={handledblClick}>Double Click Me!</button>
        </div>
    );
}