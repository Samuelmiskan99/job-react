import work from '../assets/images/work.png';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
   const styleLink = ({ isActive }) =>
      isActive
         ? 'text-white bg-gradient-to-r from-purple-500 to-indigo-500 px-5 py-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105'
         : 'text-indigo-200 px-5 py-2 rounded-lg hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105';

   return (
      <>
         <header className='bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4 shadow-lg'>
            <div className='container mx-auto flex justify-between items-center'>
               <div className='flex items-center space-x-3'>
                  <img src={work} alt='React Jobs' className='w-8 h-8' />
                  <NavLink to='/' className='text-3xl font-extrabold tracking-wide'>
                     Ambatujobs
                  </NavLink>
               </div>
               <nav className='flex space-x-6'>
                  <NavLink to='/' className={styleLink}>
                     Home
                  </NavLink>
                  <NavLink to='/jobs' className={styleLink}>
                     Jobs
                  </NavLink>
                  <NavLink to='/add-job' className={styleLink}>
                     Add Job
                  </NavLink>
               </nav>
            </div>
         </header>
      </>
   );
}
