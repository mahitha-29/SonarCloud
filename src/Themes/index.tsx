import { createTheme } from "@mui/material/styles";

 const baseTheme=createTheme({
    palette:{
        mode:"dark",
        
        primary:{
            main:'#6C5DD3',
            light:'#B4A9FF',

        },
        secondary:{
            main:'#9c27b0',
        },
        warning:{
            main:'#A5A5A6',
        },
        grey:{
            "100":'#C9C8CC',
        }

    },

    typography:{

    h1:{
      fontFamily: "Gilroy",
      fontSize: "34px",
      fontWeight: "100",
      fontStyle: "normal",
      lineHeight: '40px',
        },

    h2:{
     fontFamily: "Gilroy",
     fontSize: "20px",
     fontWeight: "10",
     fontStyle: "normal",
      lineHeight: '5px',
        },

    h3:{
      fontFamily: "Gilroy",
      fontSize: "10px",
      fontWeight: "600",
      fontStyle: "normal",
      lineHeight: '19px',
        },
    h4:{
        fontFamily: "Gilroy",
      fontSize: "5px",
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: '27px',
    },
        
    subtitle1:{
            fontFamily: "Gilroy",
            fontSize: "14px",
            fontWeight: "600",
            fontStyle: "normal",
            lineHeight: '17.15px',
        },
    
    }
})

export default baseTheme