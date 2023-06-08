import React, {useState} from 'react';
import { useNavigate  } from 'react-router-dom';
import "../styles/SingUp.css"
import {auth, db} from "../firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {Input, message, TreeSelect} from "antd";
import {setDoc, collection, doc} from "firebase/firestore";
import { NeighborhoodDict } from "../assets/DataSets"
import logo from "../assets/Second_logo.png"
import styled from "styled-components";

const Picture = styled.img`
    height: 30%;
    object-fit: cover;
`;


export const SignUp = () => {
    const [name, setName] = useState('');
    const [neighborhood, setNeighborhood] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userID, setUserID] = useState(null);
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

            const newUserRef = doc(usersCollectionRef,
                newUserCredentials.user.uid);
            const data = {
                // userId: newUserCredentials.user.uid,
                first_name: name,
                neighborhood: neighborhood,
                coins: 20,
                phone_number: phoneNumber,
                uploaded_items: [],
                liked_items: [],
            };

            setDoc(newUserRef, data)
                .then( () => {
                    message.success(
                        "User created successfully", 3, () => {
                            console.log('Pop-up closed');
                        });
                    navigate("/Home");
                })

        } catch (error) {
            console.log('Something went wrong. Please try again.');
        }
    };

    const handleNeighborhoodChange = (value, label) => {
        setNeighborhood(value);
    };

    return (
        <div className={"main-container"}>
            <header> <h1 >Welcome to Second</h1> </header>
            <Picture src={logo}/>
            <h2>Lets get started</h2>
            <form onSubmit={ handleSignup }>

                <Input
                    type="text" value={name} placeholder="Enter first name"
                    onChange={(e) => setName(e.target.value)}/>

                <TreeSelect
                    placeholder="Where do you live?"
                    treeData = {NeighborhoodDict}
                    allowClear
                    value={neighborhood}
                    onChange={handleNeighborhoodChange}
                />

                <Input
                    type="text" value={phoneNumber} placeholder="Enter phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Input
                    type="email" value={email} placeholder="Enter email address"
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
