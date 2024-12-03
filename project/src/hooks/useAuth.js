import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../services/authService';

export const useAuth = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = useCallback(async (response) => {
    try {
      const result = await authenticateUser(response.credential);
      if (result.success) {
        localStorage.setItem('token', result.token);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  }, [navigate]);

  const handleGoogleError = useCallback(() => {
    console.error('Google Sign-In failed');
  }, []);

  return {
    handleGoogleSuccess,
    handleGoogleError
  };
};