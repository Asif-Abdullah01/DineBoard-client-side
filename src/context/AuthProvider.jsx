
import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from './../firebase/firebase.init';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }



    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        updateUserProfile
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
            console.log('state captured', currentUser);
          
            if (currentUser?.email) {
                setUser(currentUser)
                const { data } = await axios.post(
                    `${import.meta.env.VITE_API_URL}/jwt`,
                    {
                        email: currentUser?.email,
                    }, {withCredentials: true}
                )
                console.log(data);
            }
            else{
                setUser(currentUser)
                const { data } = await axios.get(
                    `${import.meta.env.VITE_API_URL}/logout`,
                     {withCredentials: true}
                )
            }
            setLoading(false)

        })

        //chole gele jeno memory hold kre na rakhe
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;