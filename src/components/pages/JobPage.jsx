import axios from 'axios';
import { FaEdit, FaEnvelope, FaMapMarker, FaPhone, FaTrash } from 'react-icons/fa';
// import { useState, useEffect } from 'react';
import { useParams, useLoaderData, Link } from 'react-router-dom';

const JobPage = () => {
   //    const [job, setJob] = useState({});
   //    const [loading, setLoading] = useState(true);
   const job = useLoaderData();
   const { id } = useParams();

   //    useEffect(() => {
   //       async function getJob() {
   //          try {
   //             const { data } = await axios.get(`/api/jobs/${id}`);
   //             setJob(data);
   //          } catch (error) {
   //             console.log('Error fetching the data', error);
   //          } finally {
   //             setLoading(false);
   //          }
   //       }
   //       getJob();
   //    }, [id]);
   return (
      <>
         <section className='bg-indigo-50 py-10'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-70/30 gap-8 px-6'>
               <main className='space-y-6'>
                  <div className='bg-white p-6 rounded-xl shadow-lg'>
                     <div className='text-gray-500 mb-4'>{job.type}</div>
                     <h1 className='text-4xl font-bold text-indigo-900 mb-4'>{job.title}</h1>
                     <div className='text-gray-500 flex items-center justify-center md:justify-start mb-4'>
                        <FaMapMarker className='text-orange-700 mr-2' />
                        <p className='text-lg text-orange-700'>{job.location}</p>
                     </div>
                  </div>

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
                  <div className='bg-white p-6 rounded-xl shadow-lg'>
                     <h2 className='text-3xl font-bold text-indigo-900 mb-6'>Company Info</h2>
                     <p className='text-xl font-semibold text-indigo-800'>{job.company.name}</p>
                     <p className='text-gray-700 leading-relaxed mt-4'>{job.company.description}</p>

                     <div className='mt-6 space-y-4'>
                        <div className='flex items-center space-x-2'>
                           <FaEnvelope className='text-indigo-500' />
                           <p className='text-gray-800 font-bold  px-4 py-2 rounded-lg'>
                              {job.company.contactEmail}
                           </p>
                        </div>

                        <div className='flex items-center space-x-2'>
                           <FaPhone className='text-indigo-500' />
                           <p className='text-gray-800 font-bold  px-4 py-2 rounded-lg'>
                              {job.company.contactPhone}
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className='bg-white p-6 rounded-xl shadow-lg'>
                     <h3 className='text-2xl font-bold text-indigo-900 mb-6'>Manage Job</h3>
                     <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Link
                           to={`/edit-job/${job.id}`}
                           className='flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 transition-colors text-white font-bold py-3 px-6 rounded-full w-full text-center'>
                           <FaEdit className='mr-2' /> Edit Job
                        </Link>
                        <button className='flex items-center justify-center bg-red-500 hover:bg-red-600 transition-colors text-white font-bold py-3 px-6 rounded-full w-full text-center'>
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

const jobLoader = async ({ params }) => {
   const { data } = await axios.get(`/api/jobs/${params.id}`);
   return data;
};
export { JobPage as default, jobLoader };
