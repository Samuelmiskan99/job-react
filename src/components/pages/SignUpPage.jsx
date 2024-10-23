import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase/firebaseConfig';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');

      try {
         await createUserWithEmailAndPassword(auth, email, password);
         const user = auth.currentUser;
         if (user) {
            await setDoc(doc(db, 'Users', user.uid), {
               email: user.email,
               firstName,
               lastName,
            });
         }
         toast.success('Sign-up successful!'); // Success toast
         navigate('/login'); // Redirect to login page
      } catch (err) {
         if (err.code === 'auth/email-already-in-use') {
            setError('This email is already registered. Please try logging in.');
            toast.error('This email is already registered.');
         } else {
            setError(err.message);
            toast.error(err.message);
         }
      }
   };

   return (
      <div className='flex min-h-screen items-center justify-center bg-gray-100'>
         <div className='bg-white p-8 rounded shadow-lg w-full max-w-md'>
            <h2 className='text-3xl font-bold text-center mb-10'>Create Your Account</h2>
            {error && <p className='text-red-500 text-center'>{error}</p>}
            <form onSubmit={handleSubmit} className='space-y-6'>
               <div>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstName'>
                     First Name
                  </label>
                  <input
                     type='text'
                     id='firstName'
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}
                     className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300'
                     required
                  />
               </div>
               <div>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastName'>
                     Last Name
                  </label>
                  <input
                     type='text'
                     id='lastName'
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value)}
                     className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300'
                     required
                  />
               </div>
               <div>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                     Email
                  </label>
                  <input
                     type='email'
                     id='email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300'
                     required
                  />
               </div>
               <div>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                     Password
                  </label>
                  <input
                     type='password'
                     id='password'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300'
                     required
                  />
               </div>
               <div>
                  <button
                     type='submit'
                     className='w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 transition duration-300'>
                     Sign Up
                  </button>
               </div>
            </form>
            <p className='text-gray-600 text-center mt-6'>
               Already have an account ?{' '}
               <Link to='/login' className='text-indigo-500 hover:underline'>
                  Login
               </Link>
            </p>
         </div>
         <ToastContainer />
      </div>
   );
};

export default SignUpPage;
