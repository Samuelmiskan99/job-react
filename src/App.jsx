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

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
         <Route index element={<HomePage />} />
         <Route path='/jobs' element={<JobsPage />} />
         <Route path='/add-job' element={<AddJobPage />} />
         <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
         <Route path='*' element={<NotFound />} />
      </Route>
   )
);

function App() {
   return <RouterProvider path='/about' router={router} />;
}

export default App;
