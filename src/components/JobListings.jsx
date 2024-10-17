import JobListing from './JobListing';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'ldrs/newtonsCradle';

export default function JobListings({ isHome = false }) {
   const [jobs, setJobs] = useState([]);
   const [loading, setLoading] = useState(true);
   const urlAPI = isHome ? '/api/jobs?_limit=3' : '/api/jobs';

   useEffect(() => {
      async function getJobs() {
         try {
            const { data } = await axios.get(`${urlAPI}`);
            setJobs(data);
         } catch (error) {
            console.log('Error fetching the data', error);
         } finally {
            setLoading(false);
         }
      }

      getJobs();
   }, [urlAPI]);
   return (
      <>
         <section className='bg-blue-50 px-4 py-10'>
            <div className='container mx-auto'>
               <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                  {isHome ? 'Featured Jobs' : 'All Jobs'}
               </h2>
               {loading ? (
                  <div className='flex justify-center items-center h-max'>
                     <l-newtons-cradle loading={loading} size='78' speed='1.4' color='black' />
                  </div>
               ) : (
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                     {jobs.map((job, index) => (
                        <JobListing job={job} key={index} />
                     ))}
                  </div>
               )}
            </div>
         </section>
      </>
   );
}

JobListings.propTypes = {
   isHome: PropTypes.bool,
};
