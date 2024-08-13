import React from 'react';

const UserContext = React.createContext(null);

export const UserProvider = UserContext.Provider;
export const useUser = () => React.useContext(UserContext);