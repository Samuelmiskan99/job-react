import { useState } from 'react';
import PropTypes from 'prop-types';

const JobListing = ({ job }) => {
   const { type, title, description, salary, location } = job;

   const [showFullDesc, setShowFullDesc] = useState(false);

   let desc = description;

   if (!showFullDesc) {
      desc = description.substring(0, 100) + '...';
   }

   return (
      <div className='bg-white rounded-xl shadow-md relative'>
         <div className='p-4'>
            <div className='mb-6'>
               <div className='text-gray-600 my-2'>{type}</div>
               <h3 className='text-xl font-bold'>{title}</h3>
            </div>
            <p className='text-gray-600 mb-4'>{desc}</p>
            <button
               onClick={() => setShowFullDesc((prevState) => !prevState)}
               className='text-indigo-500 mb-5 hover:text-indigo-600'>
               {showFullDesc ? 'Read Less' : 'Read More'}
            </button>
            <span className='block text-blue-600 font-semibold'>{salary}</span>
            <div className='flex items-center mt-2 '>
               <span className='text-red-500 mr-2'>📍</span>
               <span className='text-gray-500'>{location}</span>
            </div>
            <a
               href={`/job/${job.id}`}
               className='inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded'>
               Read More
            </a>
         </div>
      </div>
   );
};

// Validasi props dengan PropTypes tanpa mengubah struktur aslinya
JobListing.propTypes = {
   job: PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      salary: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   }).isRequired,
};

export default JobListing;
