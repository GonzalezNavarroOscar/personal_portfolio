import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Box, TextField, Button, Typography, Paper, Alert } from '@mui/material';
import Select from 'react-select'

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  const options = [
      { value: 'employer', label: 'Employer' },
      { value: 'job_seeker', label: 'Job Seeker' },
   ];

  const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: '#f0f0f0',
        borderColor: state.isFocused ? 'blue' : 'gray',
    }),
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: '#ffffff',
        zIndex: 9999
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'purple' : provided.backgroundColor,
        color: state.isSelected ? 'white' : provided.color,
    }),
   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);

    if(username.length > 6 && password.length >= 8){

        const result = await register({username,email,role,password});
    
        if(result.success){
            navigate('/login');
        }
        else{
            setError(result.error || 'Register failed please try again.')
        }

    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: 400 }}>
        <Typography variant="h4" gutterBottom>Register</Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Select
          defaultValue={role}
          placeholder='Role'
          onChange={(e) => setRole(e.value)}
          options={options}
          styles={customStyles}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{backgroundColor: 'purple'}}
            sx={{ mt: 3 }}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default RegisterPage;