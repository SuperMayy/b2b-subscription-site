"use client"
import React, { useContext, useState, useEffect } from 'react';
import { collection, setDoc } from 'firebase/firestore';
import { auth, auth_, db } from '../../../fb';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const loginWithGoogle = () => {
    const provider = new auth_.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  }

  const logout = () => {
    return auth.signOut();
  }

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email)
  }

  const updateEmail = (email) => {
    return currentUser.updateEmail(email)
  }

  const updatePassword = (password) => {
    return currentUser.updatePassword(password)
  }

  const updateDisplayName = (displayName) => {
    return currentUser.updateProfile({
      displayName
    }).then(() => {
      // Update successful
      console.log('Success');
    }).catch((error) => {
      // An error occurred
      console.log('Error: ', error);
    }); 
  }

  const updatePhotoURL = (photoURL) => {
    return currentUser.updatePhotoURL(photoURL);
  }

  const saveUserData = (user) => {
    localStorage.setItem("uid", user.uid);
    localStorage.setItem("email", user.email);

    return db
    .collection("users")
    .doc(user.uid)
    .set({
      uid: user.uid,
      email: user.email,
      name: user.displayName ? user.displayName : 'n/a',
      provider: user.providerData[0].providerId,
      photoUrl: user.photoURL ? user.photoURL : 'n/a',
      phoneNumber: user.phoneNumber ? user.phoneNumber : 0,
      accountCreated: user.metadata.creationTime,
    });
  }

  const updateUserData = (data) => {
    return setDoc(collection(db, "users", data.uid), data);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    })

    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateDisplayName,
    updatePhotoURL,
    saveUserData,
    updateUserData
  };

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}