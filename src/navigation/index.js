import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes from './Routes';

// In our index page, we will provide our AuthProvider class and will check if the user is authorized to access the 
// application or not.
const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default Providers;