import React from 'react';
import './App.css';
import SignupForm from './signup-form';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
    <div className="App">
      <SignupForm />
    </div>
    </ThemeProvider>
  );
}

export default App;
