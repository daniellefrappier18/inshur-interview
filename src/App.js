import React from 'react';
import Home from './components/Home';
import { UserDataProvider } from './contexts/UserDataContext';

function App() {

  return (
    <UserDataProvider>
      <Home/>
    </UserDataProvider>
  );
}

export default App;
