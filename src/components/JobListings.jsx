import jobs from '../jobs.json';

export default function JobListings() {
   return (
      <>
         <section className='bg-blue-50 px-4 py-10'>
            <div className='container mx-auto'>
               <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>Browse Jobs</h2>
               <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  {jobs.map((job, index) => (
                     <div key={index} className='bg-white rounded-xl shadow-md relative'>
                        <div className='p-4'>
                           <div className='mb-6'>
                              <div className='text-gray-600 my-2'>{job.type}</div>
                              <h3 className='text-xl font-bold'>{job.title}</h3>
                           </div>
                           <p className='text-gray-600 mb-4'>
                              {job.description}
                              <span className='text-blue-500'>More</span>
                           </p>
                           <span className='block text-blue-600 font-semibold'>{job.salary}</span>
                           <div className='flex items-center mt-2 '>
                              <span className='text-red-500 mr-2'>📍</span>
                              <span className='text-gray-500'>{job.location}</span>
                           </div>
                           <a
                              href={`/job/${job.id}`}
                              className='inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded'>
                              Read More
                           </a>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </>
   );
}
