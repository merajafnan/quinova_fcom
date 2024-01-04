import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create an Accounts
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign up with Gmail
    const signUpWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Login Using Email and Password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Logout Using Email and Password
    const logout = () => {
        signOut(auth)
    }

    // Update User Profile
    const updateUserProfile = ({ name, photoURL }) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })

    }

    // Check user is Signed in 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false)
            } else {
                // User is signed out
                // ...
            } 
        })
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        signUpWithGoogle,
        login,
        logout,
        updateUserProfile

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider