import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grow, Slide } from '@mui/material';

const JobCard = ({ job, index }) => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 0.8,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
    >
      <Grow in={true} timeout={1000}>
        <Card 
          sx={{ 
            maxWidth: 345, 
            margin: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }
          }}
        >
          <Slide direction="up" in={true} timeout={800}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {job.title}
              </Typography>
              <Typography variant="body2" sx={{ 
                color: 'text.secondary',
                height: 100,
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {job.description}
              </Typography>
            </CardContent>
          </Slide>
          <CardActions>
            <Button 
              size="small" 
              onClick={() => alert(`Applying for ${job.title}`)}
              sx={{
                transition: 'all 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              Apply for this job
            </Button>
          </CardActions>
        </Card>
      </Grow>
    </motion.div>
  );
};

export default JobCard;