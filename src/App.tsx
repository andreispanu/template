import React from 'react';
import SignupForm from './signup-form';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme'; 
import TestPage from './test-page';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './navigation';
import PageLayout from './layout';

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
       <Router>
        <Navigation />
        <PageLayout>
          <Routes>
            <Route path="/form" element={<SignupForm />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </PageLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
