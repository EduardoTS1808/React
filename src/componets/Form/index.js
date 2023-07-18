import React from "react";
import './form.css'


const Form = () =>{
    return(
        <div className="formulario-teste">
            <form className="form" action="https://api.sheetmonkey.io/form/e3Cb86mZekusHup5r5bA2H" method="post">
                <h2> Teste formulário </h2>
                <label>
                    <span>Nome</span>
                <input type="text" name="nome" placeholder="digite seu nome"/>
                </label>
               <label>
               <span>Telefone</span>
               <input type="text" name="telefone"/>
               </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}


export default Form