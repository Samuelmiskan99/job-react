import logo from '../assets/images/logo.png';

export default function Navbar() {
   return (
      <>
         <header className='bg-blue-700 text-white p-4 flex justify-between items-center'>
            <div className='flex items-center space-x-2'>
               <img src={logo} alt='React Jobs' className='w-6 h-6' />
               <h1 className='text-2xl font-bold'>Daily Jobs</h1>
            </div>
            <nav className='flex space-x-4'>
               <a
                  href='#'
                  className='text-white hover:bg-black hover:text-white px-4 py-2 rounded-md'>
                  Home
               </a>
               <a
                  href='#'
                  className='text-white px-4 py-2 rounded-md hover:bg-black hover:text-white'>
                  Jobs
               </a>
               <a
                  href='#'
                  className='text-white hover:bg-black hover:text-white px-4 py-2 rounded-md'>
                  Add Job
               </a>
            </nav>
         </header>
      </>
   );
}
