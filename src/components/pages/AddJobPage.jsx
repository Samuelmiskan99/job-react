import React from 'react';

const AddJobPage = () => {
   return (
      <section className='bg-gradient-to-br from-indigo-50 to-indigo-100 py-12 min-h-screen'>
         <div className='container mx-auto px-4'>
            <div className='max-w-lg mx-auto bg-white rounded-xl shadow-2xl p-10 transform hover:scale-105 transition-transform duration-500'>
               <h2 className='text-3xl font-extrabold text-indigo-700 mb-8 text-center'>
                  Post a New Job
               </h2>

               <form className='space-y-8'>
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
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-300 ease-in-out'>
                        <option value='Full-Time'>Full-Time</option>
                        <option value='Part-Time'>Part-Time</option>
                        <option value='Contract'>Contract</option>
                     </select>
                  </div>

                  {/* Job Description */}
                  <div>
                     <label
                        className='block text-indigo-900 font-semibold mb-1'
                        htmlFor='description'>
                        Job Description
                     </label>
                     <textarea
                        id='description'
                        name='description'
                        placeholder='Enter job description'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-300 ease-in-out'
                        rows='5'></textarea>
                  </div>

                  {/* Job Location */}
                  <div>
                     <label className='block text-indigo-900 font-semibold mb-1' htmlFor='location'>
                        Location
                     </label>
                     <input
                        type='text'
                        id='location'
                        name='location'
                        placeholder='Enter job location'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-300 ease-in-out'
                     />
                  </div>

                  {/* Salary */}
                  <div>
                     <label className='block text-indigo-900 font-semibold mb-1' htmlFor='salary'>
                        Salary
                     </label>
                     <input
                        type='text'
                        id='salary'
                        name='salary'
                        placeholder='e.g. $70K - $80K'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-300 ease-in-out'
                     />
                  </div>

                  {/* Company Name */}
                  <div>
                     <label
                        className='block text-indigo-900 font-semibold mb-1'
                        htmlFor='companyName'>
                        Company Name
                     </label>
                     <input
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
                        id='companyDescription'
                        name='companyDescription'
                        placeholder='Enter company description'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-300 ease-in-out'
                        rows='4'></textarea>
                  </div>

                  {/* Contact Email */}
                  <div>
                     <label
                        className='block text-indigo-900 font-semibold mb-1'
                        htmlFor='contactEmail'>
                        Contact Email
                     </label>
                     <input
                        type='email'
                        id='contactEmail'
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
                        type='tel'
                        id='contactPhone'
                        name='contactPhone'
                        placeholder='Enter contact phone'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-300 ease-in-out'
                     />
                  </div>

                  {/* Submit Button */}
                  <div>
                     <button
                        type='submit'
                        className='w-full bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500'>
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
