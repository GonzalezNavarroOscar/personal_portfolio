
const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <button onClick={() => alert(`Applying for ${job.title}`)}>
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;