import {
   Route,
   createBrowserRouter,
   RouterProvider,
   createRoutesFromElements,
} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './components/pages/JobsPage';
import NotFound from './components/pages/NotFound';
import JobPage, { jobLoader } from './components/pages/JobPage';
import AddJobPage from './components/pages/AddJobPage';
import EditJobPage from './components/pages/EditJobPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import axios from 'axios';
import ProtectedRoutes from './protectroutes/ProtectedRoutes';

function App() {
   const addJob = async (newJob) => {
      try {
         const res = await axios.post('/api/jobs', newJob, {
            headers: {
               'Content-Type': 'application/json',
            },
         });
         if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed to submit the job');
         }
         return res.data;
      } catch (error) {
         console.error('Error submitting the job:', error);
         throw error;
      }
   };

   const deleteJob = async (id) => {
      try {
         const res = await axios.delete(`/api/jobs/${id}`);
         if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed to delete the job');
         }
         return res.data;
      } catch (error) {
         console.error('Error deleting the job:', error);
         throw error;
      }
   };

   const updateJob = async (job) => {
      try {
         if (!job.id) {
            throw new Error('Job ID is missing');
         }
         const res = await axios.put(`/api/jobs/${job.id}`, job, {
            headers: {
               'Content-Type': 'application/json',
            },
         });
         if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed to update the job');
         }
         return res.data;
      } catch (error) {
         console.error('Error updating the job:', error);
         throw error;
      }
   };

   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path='/' element={<MainLayout />}>
            {/* Protect HomePage */}
            <Route
               index
               element={
                  <ProtectedRoutes>
                     <HomePage />
                  </ProtectedRoutes>
               }
            />
            <Route path='/jobs' element={<JobsPage />} />
            <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route
               path='/jobs/:id'
               element={<JobPage deleteJob={deleteJob} />}
               loader={jobLoader}
            />
            <Route
               path='/edit-job/:id'
               element={<EditJobPage updateJobSubmit={updateJob} />}
               loader={jobLoader}
            />
            <Route path='*' element={<NotFound />} />
         </Route>
      )
   );

   return <RouterProvider router={router} />;
}

export default App;
