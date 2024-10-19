import { Link } from 'react-router-dom';

export default function ViewAllJobs() {
   return (
      <section className='m-auto max-w-lg my-10 px-6'>
         <Link
            to='/jobs'
            className='block bg-gradient-to-r from-gray-800 to-black text-white text-center py-4 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-gray-700 hover:to-black'>
            View All Jobs
         </Link>
      </section>
   );
}
