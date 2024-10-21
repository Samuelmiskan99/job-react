import { useState } from 'react';

const Blank = () => {
   const [count, setCount] = useState(0);
   const handleClick = () => {
      setCount((prevCount) => prevCount + 1);
   };
   return (
      <div>
         <button onClick={handleClick}></button>
         <h1>{count}</h1>
      </div>
   );
};

export default Blank;
