//import './App.css';
// import Header from './componets/Header';
// import CalculadorIMC from './componets/IMC';
// import Form from './componets/Form';
// import FormP from './componets/FormP/Form';
// import Login from './componets/Login/LoginControl'
// import { Heading1 } from './componets/Styles/styles'


import React from 'react';
import {Box,Container} from '@mui/system'

import Card from './componets/Styles/Mui3/Card'


function App() {
  return (
    <React.Fragment>
   
    
    
    <Container maxWidth='sm' sx={{
      display: 'flex', 
      flexDirection: 'row' ,
       gap: '10px', 
       marginTop: '2rem',
       p: 5}} >
    <Box sx={{
      bgcolor:'#c3e1f8' ,
      boxShadow:'1',
      borderRadius: 3,
      p: 2,
      minWidth: 250
    }}>
    
      <Box>Ações</Box>
      <Box sx={{
        fontSize: '2rem',
        fontWeight:500,
      }}> 100k</Box>
      <Box>+10%</Box>
      <Box>Março</Box>
      <Box>Conclui</Box>
    </Box>

    <Box sx={{
      bgcolor:'#a7c4b1' ,
      boxShadow:'1',
      borderRadius: 3,
      p: 2,
      minWidth: 250
    }}>
    
      <Box>Ações</Box>
      <Box sx={{
        fontSize: '1rem'
      }}> 50k</Box>
      <Box>-5%</Box>
      <Box>Fevereiro</Box>
      <Box>Não Conclui</Box>
    </Box>
    </Container>
    
    <Card/>
    
    </React.Fragment>    
    
    
    )
  }
  
  export default App;
  
  
  
  
  