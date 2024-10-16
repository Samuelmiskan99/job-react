import Hero from './components/Hero';
import HomeCard from './components/HomeCard';
import JobListings from './components/JobListings';
import Navbar from './components/Navbar';

function App() {
   return (
      <>
         <div className='font-sans'>
            {/* Header */}
            <Navbar />
            {/* Hero Section */}
            <Hero />
            {/* For Developers & Employers Section */}
            <HomeCard />
            {/* Browse Jobs Section */}
            <JobListings />
         </div>
      </>
   );
}

export default App;
