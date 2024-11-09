import work from '../assets/images/work.png';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';

export default function Navbar() {
   const [user] = useAuthState(auth); // Get the current authenticated user

   const handleSignOut = async () => {
      try {
         await signOut(auth);
      } catch (error) {
         console.error('Error signing out:', error);
      }
   };

   const styleLink = ({ isActive }) =>
      isActive
         ? 'text-white bg-gradient-to-r from-purple-500 to-indigo-500 px-5 py-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105'
         : 'text-indigo-200 px-5 py-2 rounded-lg hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105';

   return (
      <header className='bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4 shadow-lg'>
         <div className='container mx-auto flex justify-between items-center'>
            <div className='flex items-center space-x-3'>
               <img src={work} alt='React Jobs' className='w-8 h-8' />
               <NavLink to='/' className='text-3xl font-extrabold tracking-wide'>
                  Career Hive
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

               {user ? (
                  <div className='flex items-center space-x-4'>
                     {/* Show user's display name or email */}
                     <span className='text-indigo-200'>{user.displayName || user.email}</span>
                     {/* Sign Out button */}
                     <button
                        onClick={handleSignOut}
                        className='text-indigo-200 px-5 py-2 rounded-lg hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105'>
                        Sign Out
                     </button>
                  </div>
               ) : (
                  <NavLink to='/login' className={styleLink}>
                     Login
                  </NavLink>
               )}
            </nav>
         </div>
      </header>
   );
}
