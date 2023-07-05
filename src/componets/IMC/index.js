import './style.css'
import React, { useState } from "react";
function IMC(){

    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [imc, setImc] = useState(0)
    function Calculador (){
        setImc( parseFloat(weight / (height * height)))
        console.log(imc);
    }

    return(
        <div className='Imc'>
            <h4>Calcúladora do IMC</h4>
                <input 
                type='text' 
                placeholder="digite seu peso" 
                value={weight}
                onChange={e => setWeight(e.target.value)}
                />
                <input 
                type='text'
                 placeholder="digite seu altura" 
                 value={height}
                 onChange={e => setHeight(e.target.value)}
                 />

                <button 
                onClick={Calculador}>
                    Calcular
                </button>
                <p>Resultado {imc}</p>
        </div>
    )



}



export default IMC