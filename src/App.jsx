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
import axios from 'axios';

function App() {
   const addJob = async (newJob) => {
      try {
         const res = await axios.post('/api/jobs', newJob, {
            headers: {
               'Content-Type': 'application/json',
            },
         });
         // If the response status code is not in the 2xx range, throw an error
         if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed to submit the job');
         }
         // Return the created/updated job data
         return res.data;
      } catch (error) {
         console.error('Error submitting the job:', error);
         throw error; // rethrow the error so it can be handled by the caller
      }
   };
   const deleteJob = async (id) => {
      try {
         const res = await axios.delete(`/api/jobs/${id}`);
         // If the response status code is not in the 2xx range, throw an error
         if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed to delete the job');
         }
         // Return the created/updated job data
         return res.data;
      } catch (error) {
         console.error('Error deleting the job:', error);
         throw error; // rethrow the error so it can be handled by the caller
      }
   };

   const updateJob = async (job) => {
      try {
         // Ensure job.id exists and is passed in the URL
         if (!job.id) {
            throw new Error('Job ID is missing');
         }
         const res = await axios.put(`/api/jobs/${job.id}`, job, {
            headers: {
               'Content-Type': 'application/json',
            },
         });
         // Check if the response status code is within the 2xx range
         if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed to update the job');
         }
         // Return the updated job data
         return res.data;
      } catch (error) {
         console.error('Error updating the job:', error);
         throw error; // Rethrow the error so it can be handled by the caller
      }
   };

   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/jobs' element={<JobsPage />} />
            <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
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
   return <RouterProvider path='/about' router={router} />;
}

export default App;
