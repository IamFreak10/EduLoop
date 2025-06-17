import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';


const googleProvider = new GoogleAuthProvider();
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[dmode,setdMode]=useState(false);

  const [loading, setLoading] = useState(true);
  const ModeInterceptor=()=>{
    setdMode((prev)=>!prev);
  }
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (userData) => {
    return updateProfile(auth.currentUser, userData);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // if (currentUser?.email) {
      //   const userData = { email: currentUser.email };
      //   axios
      //     .post('https://career-code-server-silk.vercel.app/jwt', userData, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log(res.data);
      //     })
      //     .catch((err) => console.log(err));
      // }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    createUser,
    loading,
    signInUser,
    user,
    signOutUser,
    signInWithGoogle,
    updateUserProfile,
    dmode,
    ModeInterceptor
    
  };

  return <Authcontext value={authInfo}>{children}</Authcontext>;
};

export default Authprovider;
