// import { useQuery } from '@apollo/client';
import React, { useState, useContext } from 'react';
// import { QUERY_USER } from '../utils/queries';

export const UserContext = React.createContext();
export const useUserContext = () => useContext(UserContext);

const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    username: '',
    email: '',
    signSun: '',
    firstName: '',
    lastName: '',
    gender: '',
    desiredRelationshipPref: '',
    aboutMe: '',
    // TO DO --> likes: []
  });
  // const [currentUser, setCurrentUser] = useState({});

  // const { data, loading, error } = useQuery(QUERY_USER, { variables: {username: 'dougdoug' } });
  // console.log(`DATA:  `, data);
  // console.log(`ERROR:  `, error);
  // // console.log('USER:  ', user);
  // if (data && !error) {
  //   setCurrentUser(data.user);
  // }

  return (
    <UserContext.Provider value={[{ currentUser }, { setCurrentUser }]} {...props}>
      {props.children}
    </UserContext.Provider> 
  );
};

export default UserProvider;