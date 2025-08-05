import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const AuthSuccess = () => {
  const navigate = useNavigate();
  const {setIsLoggedIn, setUser} = useAuth();

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get('token');

//     if (token) {
//       localStorage.setItem('token', token);
//       navigate('/profile');
//     } else {
//       navigate('/login');
//     }
//   }, []);

  return <div className="text-white p-10">Logging you in...</div>;
};

export default AuthSuccess;
