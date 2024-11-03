import React from 'react';
import UserTable from './components/UserTable';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>JSONPlaceholder API Example </h1>
      <UserTable/>
    </div>
  );
};

export default App;