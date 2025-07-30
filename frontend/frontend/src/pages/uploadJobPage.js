import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { postJob } from "../hooks/jobsService";
import { useAuth } from '../context/AuthContext';
import { Box, TextField, Button, Typography, Paper, Alert } from '@mui/material';


const UploadJobPage = () => {

    const {user} = useAuth();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [salary, setSalary] = useState(0)
    const [employerId] = useState(user?.id || 0)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null);

        if(title.length > 6 && description.length > 10 && salary > 0 && employerId){

            try{

                const result = await postJob({title,description,salary,employerId});

                if(result.success){
                    navigate('/');
                }
                else{
                    setError(result.error || 'Upload Failed please try again.')
                }
            }catch(error){
                const errorMessage = error.response?.data?.error || 
                                    error.message || 
                                    'Upload failed. Please try again.';
                setError(errorMessage);
                console.error("Full error details:", error);
            }
        }
        else{
            setError('Fill all the spaces correctly.')
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
            <Typography variant="h4" gutterBottom>Upload a Job</Typography>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            <form onSubmit={handleSubmit}>
            <TextField
                label="Job Title (6 characters Minimum)"
                variant="outlined"
                fullWidth
                margin="normal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                label="Job Description (10 characters Minimum)"
                variant="outlined"
                fullWidth
                margin="normal"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
                label="Job Salary (Integer value)"
                variant="outlined"
                fullWidth
                margin="normal"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            />
            <Button
                type="submit"
                variant="contained"
                fullWidth
                style={{backgroundColor: 'blue'}}
                sx={{ mt: 3 }}
            >
                Upload
            </Button>
            </form>
        </Paper>
        </Box>
    );
};

export default UploadJobPage