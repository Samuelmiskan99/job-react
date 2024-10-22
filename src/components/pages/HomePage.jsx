import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebaseConfig'; // Ensure db is imported for Firestore access

import Hero from '../Hero';
import HomeCard from '../HomeCard';
import JobListings from '../JobListings';
import ViewAllJobs from '../ViewAllJobs';

const HomePage = () => {
   const [user] = useAuthState(auth); // Get the authenticated user
   const [firstName, setFirstName] = useState(''); // State to store first name

   // Fetch user's first name from Firestore
   useEffect(() => {
      const fetchUserData = async () => {
         if (user) {
            const userRef = doc(db, 'Users', user.uid); // Reference to the user's document
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
               const userData = userSnap.data();
               setFirstName(userData.firstName); // Set the first name in the state
            }
         }
      };

      fetchUserData();
   }, [user]); // Run the effect when the user changes

   // Set subtitle based on the fetched first name or show default message
   const subtitle = firstName
      ? `Halo ${firstName}, sudah menemukan job yang kamu inginkan?`
      : 'Hai, sudah menemukan job yang kamu inginkan?';

   return (
      <>
         <Hero title='Ambatujobs' subtitle={subtitle} />
         <HomeCard />
         <JobListings isHome={true} />
         <ViewAllJobs />
      </>
   );
};

export default HomePage;
