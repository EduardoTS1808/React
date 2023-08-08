import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions , ThemeProvider } from '@mui/material';
import {themeOne, themeTwo} from './theme'
import imgPadrinhos from './noivoefriends.png'
import imgMadrinhas from './noivaefriends.jpg'

export default function MultiActionAreaCard() {
  return (
    <React.Fragment>
    
    
    
      <ThemeProvider theme={themeOne}> 
    <Card sx={{ maxWidth: 345, p:'1rem'  ,marginBottom:5, bgcolor: 'Background.paper'}}>
    <CardActionArea>
    <CardMedia
    component="img"
    height="200"
    image={imgPadrinhos}
    alt="padrinhos"
    />
      <CardContent  sx={{ fontSize: '3rem'}}>
      
      <Typography gutterBottom variant="h5" component="div">
      Foto com os padrinhos
      </Typography>
      <Typography variant="body2" color="text.primary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos qui maiores aperiam perferendis harum nisi iure saepe hic doloremque commodi!
      </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Button size="small" color="primary">
    Ver mais
    </Button>
    </CardActions>
    </Card>
    </ThemeProvider>
    
    <ThemeProvider theme={themeTwo}>
      
    <Card sx={{ maxWidth: 345, p: '1.5rem',margin: '2reinerar' }}>
    <CardActionArea>
    <CardMedia
    component="img"
    height='400'
    image={imgMadrinhas}
    alt="madrinhas"

    sx={{
      objectFit: 'cover'
    }}
    />
    <CardContent>
    
    <Typography gutterBottom variant="h5" component="div">
    Foto com as Madrinhas
    </Typography>
    <Typography variant="body2" color="text.secondary">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos qui maiores aperiam perferendis harum nisi iure saepe hic doloremque commodi!
    </Typography>
    </CardContent>
    </CardActionArea>
    <CardActions>
    <Button size="small" color="primary">
    Ver mais
    </Button>
    </CardActions>
    </Card>
    </ThemeProvider>
    
    
    </React.Fragment>
    );
  }