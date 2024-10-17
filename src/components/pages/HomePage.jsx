import Hero from '../Hero';
import HomeCard from '../HomeCard';
import JobListings from '../JobListings';
import ViewAllJobs from '../ViewAllJobs';

const HomePage = () => {
   return (
      <>
         <Hero />
         <HomeCard />
         <JobListings isHome={true} />
         <ViewAllJobs />
      </>
   );
};

export default HomePage;
