// RecentJobs.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecentJobs = () => {
   const [jobs, setJobs] = useState([]);

   useEffect(() => {
      const fetchJobs = async () => {
         try {
            const response = await axios.get('/api/jobs/recent'); // Adjust this endpoint based on your API
            setJobs(response.data);
         } catch (error) {
            console.error('Error fetching recent jobs:', error);
         }
      };

      fetchJobs();
   }, []);

   return (
      <section className='bg-gray-50 py-12 px-4 md:px-16'>
         <h2 className='text-3xl font-semibold mb-6'>Recent Jobs</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {jobs.map((job) => (
               <div key={job.id} className='p-6 bg-white rounded-lg shadow-md'>
                  <h3 className='text-2xl font-semibold'>{job.title}</h3>
                  <p className='text-gray-600'>{job.description}</p>
                  <p className='text-gray-800 font-bold'>{job.salary}</p>
                  <Link to={`/jobs/${job.id}`} className='text-blue-500 hover:underline'>
                     Read More
                  </Link>
               </div>
            ))}
         </div>
      </section>
   );
};

export default RecentJobs;
