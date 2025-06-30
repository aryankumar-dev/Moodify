import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import apiClient from '../api/ApiClient'; // Adjust path as needed

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const data = await apiClient.customFetch(`/auth/verifyEmail/${token}`, {
          method: 'GET',
        });

        if (data.success) {
          alert('Email verified successfully!');
          navigate('/login');
        } else {
          alert(data.message || 'Verification failed');
        }
      } catch (err) {
        console.error(err);
        alert('An error occurred during verification.');
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div>
      <h2>Verifying your email...</h2>
    </div>
  );
};

export default VerifyEmail;
