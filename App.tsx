import React from 'react';
import {Main} from './src/ui/MainUI';
import UserRegistrationProvider from './src/core/context/UserRegistrationContext';

export default function App() {
  return (
    <UserRegistrationProvider>
      <Main />
    </UserRegistrationProvider>
  );
}
