import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import JobsPage from './pages/jobPage.js'
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { Box } from '@mui/material';
import UsersPage from './pages/usersPage.js';
import LoginPage from './pages/loginPage.js';
import { AuthProvider } from './context/AuthContext.js';
import ProtectedRoute from './components/ProtectedRoute.js';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}>
          <Navbar />
          <Router>
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path='/login' element={<LoginPage />}/>
                <Route path="/" element={
                  <ProtectedRoute>
                    <JobsPage />
                  </ProtectedRoute>
                  } 
                  />
                <Route path='/jobs' element={
                  <ProtectedRoute>
                    <JobsPage />
                  </ProtectedRoute>
                  }
                  />
                <Route path='/users' element={
                  <ProtectedRoute>
                    <UsersPage />
                  </ProtectedRoute>
                  }
                  />
              </Routes>
            </Box>
          </Router>
          <Footer />
        </Box>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;