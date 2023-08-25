import React from 'react';
import {Main} from './src/ui/MainUI';
import UserRegistrationProvider from './src/core/context/UserRegistrationContext';
import UserAccountProvider from './src/core/context/UserAcccountContext';

export default function App() {
  return (
    <UserRegistrationProvider>
      <UserAccountProvider>
        <Main />
      </UserAccountProvider>
    </UserRegistrationProvider>
  );
}
