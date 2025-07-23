import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../api/jobsApi';
import JobCard from '../components/jobCard.js';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="jobs-page">
      <h1>Job Listings</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="job-list">
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobsPage;