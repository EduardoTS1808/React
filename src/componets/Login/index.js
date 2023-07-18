import React from "react";
//EXEMPLO DE CONDICIONAL

function UserGreeting(props){
    return <h3>Olá, {props.name}. Bem vindo(a) de volta!</h3>
}
function GustFreeting(props){
    return <h3>Por favor, faça o login da sua conta</h3>
}


function Greeting (props){
    const isLoggedIn = props.isLoggedIn
    //operação comum
//     if(isLoggedIn)
//     return <UserGreeting name={props.name}/>

// return <GustFreeting/>

    // operção ternáriA
    return isLoggedIn ? <UserGreeting name={props.name} /> : <GustFreeting/>
}

export default Greeting