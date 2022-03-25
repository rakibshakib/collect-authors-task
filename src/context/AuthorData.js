import React, { createContext } from 'react';
import useAuthorData from '../Hooks/useAuthorData';

export const AuhtorDisplayingData = createContext();
const AuthorData = ({ children }) => {
    const authorData = useAuthorData();
    return (
        <AuhtorDisplayingData.Provider value={authorData}>
            {children}
        </AuhtorDisplayingData.Provider>
    );
};

export default AuthorData;
