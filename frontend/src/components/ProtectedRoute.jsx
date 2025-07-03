import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null); // null = loading, false = unauthenticated, true = authenticated

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`https://moodify-0lej.onrender.com/api/v1/auth/getme`, {
          credentials: 'include',
        });

        console.log(res);
        const data = await res.json();
        if (res.ok && data.userdata) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      } catch (err) {
        setAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (auth === null) {
    return <p>Loading...</p>; // Show a loader while checking
  }

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
