import React, { useState, createContext, useContext } from 'react';

export const UserContext = React.createContext();
export const useUserContext = () => useContext(UserContext);

const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    username: 'TEST_USERNAME',
    email: 'TEST_EMAIL',
    signSun: 'TEST_SIGNSUN',
  });

  return (
    <UserContext.Provider value={[{ currentUser }, {setCurrentUser}]} {...props}>
      {props.children}
    </UserContext.Provider> 
  );
};

export default UserProvider;