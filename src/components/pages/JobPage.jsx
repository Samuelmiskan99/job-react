import axios from 'axios';
import { FaEdit, FaEnvelope, FaMapMarker, FaPhone, FaTrash } from 'react-icons/fa';
import { useParams, useLoaderData, Link, useNavigate } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';
import PropTypes from 'prop-types';

const toastStyle = {
   position: 'top-right',
   autoClose: 5000,
   hideProgressBar: true,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: 'light',
   transition: Bounce,
};

const JobPage = ({ deleteJob }) => {
   const job = useLoaderData(); // Load job data using React Router's loader
   const { id } = useParams(); // Get job id from route parameters
   const navigate = useNavigate();

   const handleDelete = (jobId) => {
      const confirm = window.confirm('Are you sure you want to delete this job?');
      if (!confirm) return;

      deleteJob(jobId); // Call deleteJob prop passed to the component
      toast.success('Job deleted successfully!', toastStyle);
      navigate('/jobs'); // Navigate to the jobs page after deletion
   };

   return (
      <>
         <section className='bg-indigo-50 py-10'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-70/30 gap-8 px-6'>
               <main className='space-y-6'>
                  {/* Job Info */}
                  <div className='bg-white p-6 rounded-xl shadow-lg'>
                     <div className='text-gray-500 mb-4'>{job.type}</div>
                     <h1 className='text-4xl font-bold text-indigo-900 mb-4'>{job.title}</h1>
                     <div className='text-gray-500 flex items-center justify-center md:justify-start mb-4'>
                        <FaMapMarker className='text-orange-700 mr-2' />
                        <p className='text-lg text-orange-700'>{job.location}</p>
                     </div>
                  </div>

                  {/* Job Description */}
                  <div className='bg-white p-6 rounded-xl shadow-lg'>
                     <h3 className='text-2xl font-semibold text-indigo-800 mb-4'>
                        Job Description
                     </h3>
                     <p className='text-gray-700 leading-relaxed mb-6'>{job.description}</p>

                     <h3 className='text-2xl font-semibold text-indigo-800 mb-2'>Salary</h3>
                     <p className='text-lg font-bold text-gray-800'>{job.salary} / Year</p>
                  </div>
               </main>

               {/* Sidebar */}
               <aside className='space-y-6'>
                  {/* Company Info */}
                  <div className='bg-white p-6 rounded-xl shadow-lg'>
                     <h2 className='text-3xl font-bold text-indigo-900 mb-6'>Company Info</h2>
                     <p className='text-xl font-semibold text-indigo-800'>{job.company.name}</p>
                     <p className='text-gray-700 leading-relaxed mt-4'>{job.company.description}</p>

                     <div className='mt-6 space-y-4'>
                        <div className='flex items-center space-x-2'>
                           <FaEnvelope className='text-indigo-500' />
                           <p className='text-gray-800 font-bold'>{job.company.contactEmail}</p>
                        </div>

                        <div className='flex items-center space-x-2'>
                           <FaPhone className='text-indigo-500' />
                           <p className='text-gray-800 font-bold'>{job.company.contactPhone}</p>
                        </div>
                     </div>
                  </div>

                  {/* Manage Job Section */}
                  <div className='bg-white p-6 rounded-xl shadow-lg'>
                     <h3 className='text-2xl font-bold text-indigo-900 mb-6'>Manage Job</h3>
                     <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Link
                           to={`/edit-job/${job.id}`}
                           className='flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 transition-colors text-white font-bold py-3 px-6 rounded-full w-full text-center'>
                           <FaEdit className='mr-2' /> Edit Job
                        </Link>
                        <button
                           onClick={() => handleDelete(job.id)}
                           className='flex items-center justify-center bg-red-500 hover:bg-red-600 transition-colors text-white font-bold py-3 px-6 rounded-full w-full text-center'>
                           <FaTrash className='mr-2' /> Delete Job
                        </button>
                     </div>
                  </div>
               </aside>
            </div>
         </section>
      </>
   );
};

// Job loader function using axios
const jobLoader = async ({ params }) => {
   try {
      const { data } = await axios.get(`/api/jobs/${params.id}`);
      return data; // Return the job data to be used in useLoaderData
   } catch (error) {
      console.error('Error loading the job data:', error);
      throw error; // You can handle the error with a fallback UI or navigation
   }
};

// fix the children missing props validation
JobPage.propTypes = {
   deleteJob: PropTypes.func.isRequired,
   job: PropTypes.shape({
      type: PropTypes.string.isRequired,
   }),
};

export { JobPage as default, jobLoader };
