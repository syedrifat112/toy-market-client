import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';


 export  const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [loader, setLoader] = useState(true);
    const [user , setUser] = useState(null);

    const googleSignUp = () => {
        setLoader(false)
        return signInWithPopup(auth, provider)
    }
    // sing up with gmail


    const createUser = (email, password) => {
        setLoader(false)
        return createUserWithEmailAndPassword(auth, email, password);
    }
     // 
     const signOutSystem = () => {
        setLoader(false)
        return signOut(auth)
    }
    // create profile

    const updateUser = (name, photo) => {
        return updateProfile(auth?.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }


// sign up with password
    const signIn = (email, password) => {
        setLoader(false)
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        })
        return () => {
            unsubscribe();
        }
    }, [user])


    const authInfo = {
        user,
        googleSignUp,
        createUser,
        updateUser,
        signIn,
        loader,
        signOutSystem,
    }
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;