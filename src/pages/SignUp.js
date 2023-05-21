import React, {useEffect, useState} from 'react';
import { useNavigate  } from 'react-router-dom';
import "../styles/SingUp.css"
import {auth, db} from "../firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {Input, message} from "antd";
import {addDoc, collection} from "firebase/firestore";

export const SignUp = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userID, setUserID] = useState(null);
    const [error, setError] = useState('');
    const navigate  = useNavigate ();

    // Step 2: Listen for authentication state changes
    // and get the new user's UID
    auth.onAuthStateChanged(user => {
        if (user) {
            setUserID(user.uid);
        }
    });

    const handleSignup  = async (e) => {
        e.preventDefault();
        try {
            // Step 1: Create the user in Firebase Authentication
            const newUserCredentials =
                await createUserWithEmailAndPassword(auth, email, password);

            // Step 3: Add a new document to the user's database
            const usersCollectionRef = collection(db, "users");

            await addDoc(usersCollectionRef, {
                UID: newUserCredentials.user.uid,
                address: address,
                first_name: name,
                tokens: 10,
                items_in_shop: [""],
                items_liked: [""],
            })
            .then(() => {
                message.success(
                    "User created successfully", 3, () => {
                        console.log('Pop-up closed');
                    });
                navigate("/Home");
            })

        } catch (error) {
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className={"main-container"}>
            <header> <h3 >Welcome to Second</h3> </header>
            <h3>Lets get started</h3>
            <form onSubmit={ handleSignup }>
                <Input
                    type="text" value={name} placeholder="Enter first name"
                    onChange={(e) => setName(e.target.value)}/>
                <Input
                    type="text" value={address} placeholder="Enter home address"
                    onChange={(e) => setAddress(e.target.value)}
                />
                <Input
                    type="email" value={email} placeholder="Enter Email address"
                    onChange={(e) => setEmail(e.target.value)}/>
                <Input
                    type="password" value={password} placeholder="Choose a password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={"submit-button"} type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
