import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase'; // Import your Firebase authentication instance

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
