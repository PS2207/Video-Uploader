//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes, Navigate } from 'react-router'
import Home from './components/Home'
import Login from './pages/Login'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Upload from './pages/Upload'
import {ThemeProvider,CssBaseline}  from '@mui/material'
import { darkTheme } from './helper/Theme'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  //added here
 <ThemeProvider theme={darkTheme}>
   <CssBaseline/>
   <BrowserRouter>
    <Routes>

      <Route path='/' element ={<Home/>}>
        <Route path='' element={<Navigate to={'/login'}/>}/>
        <Route path='upload' element={<Upload/>}/>
        <Route path='list' element={<h1>this is list</h1>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<App/>}/>

    </Routes>
 </BrowserRouter>
 </ThemeProvider>
)

