import Card from './Card';
import { Link } from 'react-router-dom';

export default function HomeCard() {
   return (
      <section className='bg-gray-50 py-12 px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
         {/* For Developers */}
         <Card className='transition-transform transform hover:scale-105 hover:shadow-lg'>
            <div className='p-6 bg-white rounded-lg shadow-md space-y-4'>
               <h3 className='text-2xl font-semibold text-gray-800'>For Developers</h3>
               <p className='text-gray-600'>Browse our React jobs and start your career today</p>
               <Link
                  to='/jobs'
                  className='inline-block mt-4 bg-black text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-900 transition-colors'>
                  Browse Jobs
               </Link>
            </div>
         </Card>

         {/* For Employers */}
         <Card className='transition-transform transform hover:scale-105 hover:shadow-lg bg-gradient-to-r from-indigo-100 to-indigo-200'>
            <div className='p-6 rounded-lg space-y-4'>
               <h3 className='text-2xl font-semibold text-gray-800'>For Employers</h3>
               <p className='text-gray-600'>
                  List your job to find the perfect developer for the role
               </p>
               <Link
                  to='/add-job'
                  className='inline-block mt-4 bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>
                  Add Job
               </Link>
            </div>
         </Card>
      </section>
   );
}
