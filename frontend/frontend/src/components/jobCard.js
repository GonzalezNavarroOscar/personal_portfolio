import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const JobCard = ({ job }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 5}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {job.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {job.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => alert(`Applying for ${job.title}`)}>Apply for this job</Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;