import '../css/navbarStyles.css';
import { useAuth } from '../context/AuthContext';
import { Button } from '@mui/material';

export default function Navbar() {
  const { user, logout } = useAuth();

  console.log('Navbar user:', user);

  return (
    <nav className="nav">
      
      <a href="/" className="site-title">Job Boarding Page</a>
      
      <ul>
        {user && user.role === 'employer' && (
          <>
            <li>
              <a href='/upload-job'>Upload a Job</a>
            </li>

          </>
        )}

        { user && (
          <>
            <li>
              <a href='/users'>Profile</a>
            </li>
          </>
        )}

        {user ? (
            <li>
              <Button 
                variant="text"
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
                onClick={logout}
              >
                Logout
              </Button>
            </li>
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
      </ul>
    </nav>
  );
}