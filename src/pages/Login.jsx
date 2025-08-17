import React from 'react'
import { Button, Box } from '@mui/material'
import  GoogleIcon from '@mui/icons-material/Google'
const Login = () => {
  return (
    <Box component= {'section'}
          sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'100vh'
          }}
    >       

        <Button startIcon={<GoogleIcon/>} 
          variant="contained" 
          size="large"
          onClick={()=>{
              console.log("Logging with google");
          }}
        >Login With Google</Button>
    </Box>
    
  )
}

export default Login