import PropTypes from 'prop-types';

export default function Hero({ subtitle = 'Find your best job out there', title = 'Ambatujobs' }) {
   return (
      <>
         <section className='bg-gradient-to-r from-blue-600 to-indigo-700 py-28 mb-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
               <div className='text-center'>
                  <h1 className='text-5xl font-extrabold text-white sm:text-6xl md:text-7xl'>
                     {title}
                  </h1>
                  <p className='my-6 text-xl text-indigo-200 sm:text-2xl md:text-3xl'>{subtitle}</p>
               </div>
            </div>
         </section>
      </>
   );
}

Hero.propTypes = {
   subtitle: PropTypes.string,
   title: PropTypes.string,
};
