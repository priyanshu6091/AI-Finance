import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div>
      <h1>Welcome, {userInfo && userInfo.name}</h1>
      <p>Your personalized financial dashboard will be here.</p>
    </div>
  );
};

export default Dashboard;
