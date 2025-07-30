import { useEffect, useState } from 'react';
import { fetchJobs } from '../hooks/jobsService.js';
import { useAuth } from '../context/AuthContext';
import JobCard from '../components/jobCard.js';
import '../css/jobPageStyles.css'


const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const {user} = useAuth();

  const [employer_id] = useState(user?.id || 0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchJobs({ employer_id });
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    
    if (employer_id) {
      loadData();
    }
  }, [employer_id]);

  return (    
    <div className="jobs-page">

      <h1 className='jobs-title'>Job Listings</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="job-list">
          {jobs.map(job => (
            <JobCard key={job.id} job={job} className='job-card'/>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobsPage;