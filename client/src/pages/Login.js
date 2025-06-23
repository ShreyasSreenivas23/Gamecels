// client/src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/Button';

const AuthContainer = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${props => props.theme.colors.background};
`;

const AuthCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`;

const AuthHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const AuthTitle = styled.h1`
  color: ${props => props.theme.colors.heading};
  font-size: 1.875rem;
  margin-bottom: 0.5rem;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors.textLight};
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 1rem;
  transition: all ${props => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary}33;
  }
`;

const AuthLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  font-size: 0.875rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/profile');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during login');
    }
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthHeader>
          <AuthTitle>Welcome Back</AuthTitle>
          <p>Sign in to your account</p>
        </AuthHeader>

        <AuthForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </FormGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Button type="submit" variant="primary" fullWidth>
            Sign In
          </Button>
        </AuthForm>

        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <AuthLink to="/register">
            Don't have an account? Sign up
          </AuthLink>
        </div>
      </AuthCard>
    </AuthContainer>
  );
}

export default Login;
