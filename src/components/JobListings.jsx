import JobListing from './JobListing';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'ldrs/newtonsCradle';

export default function JobListings({ isHome = false }) {
   const [jobs, setJobs] = useState([]);
   const [filteredJobs, setFilteredJobs] = useState([]);
   const [loading, setLoading] = useState(true);
   const [searchQuery, setSearchQuery] = useState('');

   const urlAPI = isHome ? '/api/jobs?_limit=3' : '/api/jobs';

   useEffect(() => {
      async function getJobs() {
         try {
            const { data } = await axios.get(urlAPI);
            setJobs(data);
            setFilteredJobs(data);
         } catch (error) {
            console.log('Error fetching the data', error);
         } finally {
            setLoading(false);
         }
      }

      getJobs();
   }, [urlAPI]);

   const handleSearchChange = (e) => {
      const query = e.target.value.toLowerCase();
      setSearchQuery(query);
      const filtered = jobs.filter((job) => {
         return (
            job.title.toLowerCase().includes(query) || job.location.toLowerCase().includes(query)
         );
      });
      setFilteredJobs(filtered);
   };

   return (
      <section className='bg-blue-50 px-6 py-16'>
         <div className='container mx-auto max-w-7xl'>
            <h2 className='text-4xl font-bold text-indigo-600 mb-10 text-center'>
               {isHome ? 'Featured Jobs' : 'All Jobs'}
            </h2>

            {!isHome && (
               <div className='mb-8 flex justify-center'>
                  <input
                     type='text'
                     value={searchQuery}
                     onChange={handleSearchChange}
                     placeholder='Search by job title or location...'
                     className='w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300'
                  />
               </div>
            )}

            {loading ? (
               <div className='flex justify-center items-center h-80'>
                  <l-newtons-cradle loading={loading} size='80' speed='1.4' color='black' />
               </div>
            ) : (
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {filteredJobs.length > 0 ? (
                     filteredJobs.map((job, index) => (
                        <div
                           key={index}
                           className='flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg'>
                           <JobListing job={job} />
                        </div>
                     ))
                  ) : (
                     <p className='text-center col-span-full text-gray-500'>
                        No jobs found matching your search.
                     </p>
                  )}
               </div>
            )}
         </div>
      </section>
   );
}

JobListings.propTypes = {
   isHome: PropTypes.bool,
};
