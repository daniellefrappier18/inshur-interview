import React, { createContext, useState, useEffect } from 'react';
export const UserDataContext = createContext();

export const UserDataProvider = props => {

    const [userData, setUserData] = useState ();

    useEffect(() => {
      async function fetchUsersJSON() {
        const response = await fetch('/data');
        const users = await response.json();
        return users;
      }
      
      fetchUsersJSON().then(users => {
        console.log(users)
        setUserData(users);
      });
      }, []);    
    return ( 
      <UserDataContext.Provider value={userData}>
          {props.children} 
      </UserDataContext.Provider>
    );
}