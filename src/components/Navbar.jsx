import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
   const styleLink = ({ isActive }) =>
      isActive
         ? 'text-white bg-black px-4 py-2 rounded-md hover:bg-gray-900 hover:text-white '
         : 'text-white px-4 py-2 rounded-md hover:bg-gray-900 hover:text-white';
   return (
      <>
         <header className='bg-indigo-800 text-white p-4 flex justify-between items-center'>
            <div className='flex items-center space-x-2'>
               <img src={logo} alt='React Jobs' className='w-6 h-6' />
               <h1 className='text-2xl font-bold'>Daily Jobs</h1>
            </div>
            <nav className='flex space-x-4'>
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
         </header>
      </>
   );
}
