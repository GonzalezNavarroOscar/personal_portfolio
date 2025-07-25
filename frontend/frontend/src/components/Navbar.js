import '../css/navbarStyles.css';
import { useAuth } from '../context/AuthContext';
import { Button, Typography } from '@mui/material';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="nav">
      <a href="/" className="site-title">Job Boarding Page</a>
      
      <ul>
        {user && (
          <>
            <p>
              <Typography 
                component="span" 
                sx={{ 
                  color: 'white',
                  marginRight: '1rem',
                  display: 'inline-block'
                }}
              >
              Hello, {user.username}
              </Typography>
            </p>

            <li>
              <a href='/jobs'>Upload a Job</a>
            </li>
            <li>
              <a href='/users'>Profile</a>
            </li>


          </>
        )}

        <li>
          {user ? (
            <div className="auth-section">
              <Button 
                variant="text"
                sx={{ 
                  color: 'white',
                  marginTop: '.6rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button 
              variant="text"
              href="/login"
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Login
            </Button>
          )}
        </li>
      </ul>
    </nav>
  );
}