import { useState, useEffect } from 'react';
import axios from 'axios';
import JobListing from '../JobListing';

const ClearPage = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      async function getUsers() {
         try {
            const { data } = await axios.get('http://localhost:3030/jobs');
            setUsers(data);
         } catch (error) {
            console.log(error);
         }
      }
      getUsers();
   }, []);
   return (
      <>
         <ol>
            {users?.map((user, key) => (
               <div key={key}>
                  <JobListing job={user} />
               </div>
            ))}
         </ol>
      </>
   );
};

export default ClearPage;
