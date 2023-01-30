import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
         fetch('https://power-hack-server-seven.vercel.app/users')
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setUsers(data)
        })
    },[])

    const authInfo = {users, currentUser, setCurrentUser, setUsers, loading, setLoading};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;