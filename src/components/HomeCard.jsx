import Card from './Card';

export default function HomeCard() {
   return (
      <>
         <section className='bg-gray-100 py-8 px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Card>
               <div className='space-y-2'>
                  <h3 className='text-xl font-semibold'>For Developers</h3>
                  <p className='mt-2 text-gray-600'>
                     Browse our React jobs and start your career today
                  </p>
                  <a href='' className='inline-block mt-4 bg-black text-white py-2 px-4 rounded'>
                     Browse Jobs
                  </a>
               </div>
            </Card>

            <Card bg='bg-indigo-100'>
               <div className='space-y-2'>
                  <h3 className='text-xl font-semibold'>For Employers</h3>
                  <p className='text-gray-600'>
                     List your job to find the perfect developer for the role
                  </p>
                  <a
                     href=''
                     className='inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded shadow'>
                     Add Job
                  </a>
               </div>
            </Card>
         </section>
      </>
   );
}
