// client/src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
`;

const ProfileCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <ProfileContainer>
      <ProfileCard>
        <h2>Profile</h2>
        {user ? (
          <div>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
      </ProfileCard>
    </ProfileContainer>
  );
}

export default Profile;
