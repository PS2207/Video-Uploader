Day 4 – YouTube Uploader Frontend Project
(React + Vite + JavaScript + Material-UI)

🚀 Project Setup:
Create a Vite React Project
npm create vite@latest
# Select: React + JavaScript
--------------------------------
Run the Project:
npm run dev
This app will be initially starting at- http://localhost:5173
---------------------------------------------------------
Install Required Packages :
npm install axios react-router react-hot-toast

Install Material-UI & for help go to material-ui website:
npm install @mui/material @emotion/react @emotion/styled
npm install @fontsource/roboto

------------------------------------------------------------
📂 Project Structure
components/ → Shared UI components (e.g., Home, CustomeNavbar)
pages/ → Page-level components (e.g., Login, Upload)
helper/ → Utility files (e.g., Theme.js)

Import components into main.js as needed.
-------------------------------------------------------------
📝 Import Rules:
Default Export-
export default function Home() { ... }
import Home from "./components/Home";

Named Export-
export function Home() { ... }
import { Home } from "./components/Home";
---------------------------------------------------------
🛣️ Routing with React Router :
Parent & Child Routes-
<Route path="/" element={<Home />}>
  <Route path="upload" element={<Upload />} />
  <Route path="list" element={<List />} />
</Route>


Redirect to Login (before home page loads):
<Route path="/" element={<Home />}>
  <Route path="" element={<Navigate to="/login" />} />
</Route>


Render Child Routes inside Parent
Use <Outlet /> inside the parent (Home) component.
------------------------------------------------------------
🎨 Material-UI Usage
Theme Setup (helper/Theme.js)
import { createTheme } from "@mui/material";
export const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});
-------------------------------------------------------------

Main Entry (main.jsx)
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme } from "./helper/Theme";

<ThemeProvider theme={darkTheme}>
  <CssBaseline />
  <App />
</ThemeProvider>

--------------------------------------------------------
Login Page (Google Button Example)

import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";

<Button
  startIcon={<GoogleIcon />}
  variant="contained"
  size="large"
  onClick={() => console.log("Logging in with Google")}
>
  Login With Google
</Button>
-----------------------------------------------------------

Commonly Used MUI Components

Upload Page:
Container, Paper, Typography, Box, TextField, InputAdornment, Button, FormControl, Select, InputLabel, MenuItem
Title, Description, CloudUpload, Visibility, Publish (icons)

Login Page:
Button, Box, GoogleIcon

*****************************************************************************************************************
🔗 Backend Setup (Google Cloud & YouTube API)
First need to this:
1.Sign in to Google Cloud Console.
2.Create a new project → e.g., “YouTube Uploader”.
3.Enable YouTube Data API v3 (search in API dashboard).
4.Create OAuth credentials:
  Go to Credentials → Create Credentials → OAuth Client ID.
  Configure Consent Screen (fill in required details).
  
Get Client ID and Client Secret.
