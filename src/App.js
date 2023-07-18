import './App.css';
import Header from './componets/Header';
import CalculadorIMC from './componets/IMC';
import Form from './componets/Form';
import FormP from './componets/FormP/Form';
import Login from './componets/Login/LoginControl'


function App() {
  return (

   <div className="App">
     <Header title="Aula-1 React"/>
    {/* <CalculadorIMC/> */}
    {/* <Form/> */}
    <FormP title="props"/>
    <Login  name={'Eduardo'}/>
   </div>

  )
}

export default App;
