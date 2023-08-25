import React, {useState, useEffect, createContext, ReactNode} from 'react';

interface UserRegistrationContextType {
  regFormData: any;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  setRegFormData: React.Dispatch<React.SetStateAction<any>>;
}

export const UserRegistrationContext =
  createContext<UserRegistrationContextType | null>(null);

const UserRegistrationProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [regFormData, setRegFormData] = useState<any>({});
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    console.log('user', user);
  }, [user]);

  const contextValue: UserRegistrationContextType = {
    regFormData,
    user,
    setUser,
    setRegFormData,
  };

  return (
    <UserRegistrationContext.Provider value={contextValue}>
      {children}
    </UserRegistrationContext.Provider>
  );
};

export default UserRegistrationProvider;
