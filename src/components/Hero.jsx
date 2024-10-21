import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function Hero({ subtitle = 'Find your best job out there', title = 'Ambatujobs' }) {
   const navigate = useNavigate();

   const handleGetStarted = () => {
      navigate('/login');
   };

   return (
      <section className='relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 py-28 mb-4'>
         <div className='absolute inset-0 bg-hero-pattern opacity-20'></div>
         <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
            <div className='text-center relative z-10'>
               <h1 className='text-5xl font-extrabold text-white sm:text-6xl md:text-7xl animate-fadeIn'>
                  {title}
               </h1>
               <p className='my-6 text-xl text-indigo-200 sm:text-2xl md:text-3xl animate-slideInUp'>
                  {subtitle}
               </p>
               <button
                  onClick={handleGetStarted}
                  className='mt-8 bg-white text-indigo-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-50 transition-transform transform hover:scale-105'>
                  Get Started
               </button>
            </div>
         </div>
         <div className='absolute top-0 right-0 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply opacity-30 filter blur-2xl'></div>
         <div className='absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply opacity-30 filter blur-3xl'></div>
      </section>
   );
}

Hero.propTypes = {
   subtitle: PropTypes.string,
   title: PropTypes.string,
};
