import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const userContext = createContext(null);
const auth = getAuth(app);

const Userproviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const signUpByEmailAndPassword = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, { displayName: name });
      })
      .catch((err) => {
        setError(err.massage);
      });
  };
  //Sign in by email and password
  const signInByPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Observe auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // signOut function
  const logout = () => {
    return signOut(auth);
  };
  const userAuth = {
    signUpByEmailAndPassword,
    signInByPassword,
    loading,
    logout,
    user,
    error,
  };

  return (
    <div>
      <userContext.Provider value={userAuth}>{children}</userContext.Provider>
    </div>
  );
};

export default Userproviders;
