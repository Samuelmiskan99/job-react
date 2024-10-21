import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase/firebaseConfig';

export default function LoginPage() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const navigate = useNavigate();

   // Ensure that user is logged out when visiting the login page
   useEffect(() => {
      const checkUser = async () => {
         if (auth.currentUser) {
            await signOut(auth);
         }
      };
      checkUser();
   }, []);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');

      try {
         await signInWithEmailAndPassword(auth, email, password);
         navigate('/protected'); // Redirect to protected route or home page
      } catch (err) {
         setError('Invalid login credentials. Please try again.', err);
      }
   };

   const handleGoogleSignIn = async () => {
      try {
         await signInWithPopup(auth, googleProvider);
         navigate('/protected'); // Redirect after successful login
      } catch (err) {
         setError('Failed to sign in with Google.', err);
      }
   };

   return (
      <section className='min-h-screen flex flex-col items-center justify-center bg-gray-50'>
         <div className='max-w-md w-full bg-white p-8 rounded-xl shadow-lg'>
            <h1 className='text-3xl font-bold text-center mb-6'>
               Login with <span className='text-yellow-500'>🔥</span>
            </h1>
            {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
            <form onSubmit={handleSubmit} className='space-y-6'>
               <div>
                  <label className='block text-sm font-medium text-gray-700'>Email</label>
                  <input
                     type='email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                     className='w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-300 focus:border-indigo-300'
                  />
               </div>
               <div>
                  <label className='block text-sm font-medium text-gray-700'>Password</label>
                  <input
                     type='password'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                     className='w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-300 focus:border-indigo-300'
                  />
               </div>
               <div>
                  <button
                     type='submit'
                     className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-bold transition-all duration-200'>
                     Login
                  </button>
               </div>
            </form>

            {/* Google Sign-In Button */}
            <div className='mt-6 text-center'>
               <button
                  onClick={handleGoogleSignIn}
                  className='w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-bold transition-all duration-200'>
                  Sign in with Google
               </button>
            </div>

            <div className='mt-6 text-center'>
               <p>
                  Don't have an account?{' '}
                  <Link to='/signup' className='text-indigo-600 hover:underline'>
                     Sign Up
                  </Link>
               </p>
            </div>
         </div>
      </section>
   );
}
