import React, {reactDom} from "react";
import './style.css'
export default class Form extends React.Component{
    constructor(props){
        console.log('Construtor- inicial');
        super(props)
        this.state = {
            counter: 0,
            isToggleOn: true,
        }
        this.handleClick = this.handleClick.bind(this)
        this.increment = () => this.setState({counter: this.state.counter + 1})
        this.descrement = () => this.setState({counter: this.state.counter - 1})
        
    }
    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    componentDidMount(){
        console.log('componente montado');
    }
    componentDidUpdate(){
        console.log('componente atualizado');
    }
    render(){
        console.log('Render - Exebição')
        return <div className="form">
           <p>
           <button onClick={this.increment}> Aumenta</button>
            <button onClick={this.descrement}> Diminuir</button>
            <input value={this.state.counter}/>
           </p>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn? 'liga' : 'desliga'}
                </button>
        </div>
    }
}