import { createTheme } from "@mui/material";

export const themeOne  = createTheme({
    palette:{
        background: {
            paper: '#aaacff',
        },
        text: {
            primary: '#c7d9a3',
            secondary: '#a5f2d9',
        },
        action: {
            active: '#001e3b',
        },


    },
    
})
export const themeTwo = createTheme({
    palette: {
        background: {
          paper: '#facfdf',
        },
        text: {
          secondary: '#46505A',
          primary: '#173A5E',
        },
        action: {
          active: '#001E3C',
        }
        
    },
   
})

