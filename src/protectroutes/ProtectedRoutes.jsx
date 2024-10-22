// ProtectedRoutes.jsx
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import PropTypes from 'prop-types';

const ProtectedRoutes = ({ children }) => {
   const [user, loading] = useAuthState(auth);

   if (loading) return <p>Loading...</p>;

   if (!user) {
      return <Navigate to='/login' replace />;
   }

   return children;
};

ProtectedRoutes.propTypes = {
   children: PropTypes.node,
};

export default ProtectedRoutes;
