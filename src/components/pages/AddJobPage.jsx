import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Slide } from 'react-toastify';

const toastStyle = {
   position: 'top-right',
   autoClose: 1000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: 'colored',
   transition: Slide,
};

const AddJobPage = ({ addJobSubmit }) => {
   const [title, setTitle] = useState('');
   const [type, setType] = useState('');
   const [location, setLocation] = useState('');
   const [description, setDescription] = useState('');
   const [salary, setSalary] = useState('');
   const [companyName, setCompanyName] = useState('');
   const [companyDescription, setCompanyDescription] = useState('');
   const [contactEmail, setContactEmail] = useState('');
   const [contactPhone, setContactPhone] = useState('');

   const navigate = useNavigate();

   const submitForm = (e) => {
      e.preventDefault();

      const newJob = {
         id: Date.now(),
         title,
         type,
         location,
         description,
         salary,
         company: {
            name: companyName,
            description: companyDescription,
            contactEmail,
            contactPhone,
         },
      };

      addJobSubmit(newJob);
      toast.success('Job added successfully', toastStyle);
      return navigate('/jobs');
   };

   return (
      <section className='bg-gradient-to-br from-indigo-50 to-indigo-100 py-12 min-h-screen'>
         <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-10'>
               <h2 className='text-3xl font-extrabold text-indigo-700 mb-8 text-center'>
                  Post a New Job
               </h2>

               <form className='space-y-8' onSubmit={submitForm}>
                  {/* Two-Column Layout */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                     {/* Job Title */}
                     <div>
                        <label className='block text-indigo-900 font-semibold mb-1' htmlFor='title'>
                           Job Title
                        </label>
                        <input
                           type='text'
                           id='title'
                           name='title'
                           placeholder='Enter job title'
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-300 ease-in-out'
                        />
                     </div>

                     {/* Job Type */}
                     <div>
                        <label className='block text-indigo-900 font-semibold mb-1' htmlFor='type'>
                           Job Type
                        </label>
                        <select
                           id='type'
                           name='type'
                           value={type}
                           onChange={(e) => setType(e.target.value)}
                           className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-300 ease-in-out'>
                           <option value=''>Select Job Type</option>
                           <option value='Full-Time'>Full-Time</option>
                           <option value='Part-Time'>Part-Time</option>
                           <option value='Contract'>Contract</option>
                        </select>
                     </div>

                     {/* Job Location */}
                     <div>
                        <label
                           className='block text-indigo-900 font-semibold mb-1'
                           htmlFor='location'>
                           Location
                        </label>
                        <input
                           onChange={(e) => setLocation(e.target.value)}
                           value={location}
                           type='text'
                           id='location'
                           name='location'
                           placeholder='Enter job location'
                           className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-300 ease-in-out'
                        />
                     </div>

                     {/* Salary */}
                     <div>
                        <label
                           className='block text-indigo-900 font-semibold mb-1'
                           htmlFor='salary'>
                           Salary
                        </label>
                        <input
                           onChange={(e) => setSalary(e.target.value)}
                           value={salary}
                           type='text'
                           id='salary'
                           name='salary'
                           placeholder='e.g. $70K - $80K'
                           className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-300 ease-in-out'
                        />
                     </div>
                  </div>

                  {/* Full-Width Textareas */}
                  <div className='grid grid-cols-1 gap-6'>
                     {/* Job Description */}
                     <div>
                        <label
                           className='block text-indigo-900 font-semibold mb-1'
                           htmlFor='description'>
                           Job Description
                        </label>
                        <textarea
                           onChange={(e) => setDescription(e.target.value)}
                           value={description}
                           id='description'
                           name='description'
                           placeholder='Enter job description'
                           className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-300 ease-in-out'
                           rows='4'></textarea>
                     </div>

                     {/* Company Name */}
                     <div>
                        <label
                           className='block text-indigo-900 font-semibold mb-1'
                           htmlFor='companyName'>
                           Company Name
                        </label>
                        <input
                           onChange={(e) => setCompanyName(e.target.value)}
                           value={companyName}
                           type='text'
                           id='companyName'
                           name='companyName'
                           placeholder='Enter company name'
                           className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-300 ease-in-out'
                        />
                     </div>

                     {/* Company Description */}
                     <div>
                        <label
                           className='block text-indigo-900 font-semibold mb-1'
                           htmlFor='companyDescription'>
                           Company Description
                        </label>
                        <textarea
                           onChange={(e) => setCompanyDescription(e.target.value)}
                           value={companyDescription}
                           id='companyDescription'
                           name='companyDescription'
                           placeholder='Enter company description'
                           className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-300 ease-in-out'
                           rows='4'></textarea>
                     </div>
                  </div>

                  {/* Two-Column Layout for Contact Info */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                     {/* Contact Email */}
                     <div>
                        <label
                           className='block text-indigo-900 font-semibold mb-1'
                           htmlFor='contactEmail'>
                           Contact Email
                        </label>
                        <input
                           onChange={(e) => setContactEmail(e.target.value)}
                           value={contactEmail}
                           type='email'
                           id='contactEmail'
                           required
                           name='contactEmail'
                           placeholder='Enter contact email'
                           className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-300 ease-in-out'
                        />
                     </div>

                     {/* Contact Phone */}
                     <div>
                        <label
                           className='block text-indigo-900 font-semibold mb-1'
                           htmlFor='contactPhone'>
                           Contact Phone
                        </label>
                        <input
                           onChange={(e) => setContactPhone(e.target.value)}
                           value={contactPhone}
                           type='tel'
                           id='contactPhone'
                           name='contactPhone'
                           placeholder='Enter contact phone'
                           className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-300 ease-in-out'
                        />
                     </div>
                  </div>

                  {/* Submit Button */}
                  <div className='flex justify-end'>
                     <button
                        type='submit'
                        className='bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500'>
                        Add Job
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

export default AddJobPage;
