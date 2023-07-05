import React, { useState } from "react"
import logo from "./../../logo.svg"

const Header = (props) => {
    const [count, setCount] = useState(1);
    function increaseCount(){
        setCount(count + 1);
        console.log(count)
    }
    return (
            <header className="App">
                <h1>{props.title}</h1>
                <img src={logo} className="App-logo"/>
                <p>Olha só, que legal!</p>
                <button onClick={increaseCount} >Retornar pela {count} vez</button>
            </header>
    )
}

export default Header