import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';

const JobListing = ({ job }) => {
   const { type, title, description = '', salary, location } = job; // Fallback for description
   const [showFullDesc, setShowFullDesc] = useState(false);

   let desc = description;

   if (!showFullDesc && description) {
      desc = description.substring(0, 100) + '...'; // Show first 100 characters before "Read More"
   }

   return (
      <div className='bg-white rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300'>
         <div className='p-6'>
            <div className='mb-6'>
               <span className='text-sm font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded-md'>
                  {type}
               </span>
               <h3 className='text-2xl font-bold text-gray-900 mt-2'>{title}</h3>
            </div>
            <p className='text-gray-700 mb-4 leading-relaxed'>{desc}</p>
            <button
               onClick={() => setShowFullDesc((prevState) => !prevState)}
               className='text-indigo-500 mb-5 hover:text-indigo-600 focus:outline-none'>
               {showFullDesc ? 'Read Less' : 'Read More'}
            </button>
            <span className='block text-blue-600 font-semibold text-lg mb-2'>{salary}</span>
            <div className='flex items-center mt-4'>
               <CiLocationOn className='text-red-500 mr-2 text-lg' />
               <span className='text-gray-500 text-sm'>{location}</span>
            </div>
            <Link
               to={`/jobs/${job.id}`}
               className='inline-block mt-6 bg-indigo-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-600 transition duration-300 ease-in-out'>
               Read More
            </Link>
         </div>
      </div>
   );
};

// Validasi props dengan PropTypes tanpa mengubah struktur aslinya
JobListing.propTypes = {
   job: PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      salary: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   }).isRequired,
};

export default JobListing;
