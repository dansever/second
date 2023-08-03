import {Input, ConfigProvider} from "antd";
import React, {useState} from "react";
import { useNavigate  } from 'react-router-dom';
import {db} from "../firebase";
import styled from "styled-components";
import {collection, doc, getDoc, getDocs, updateDoc} from "firebase/firestore";
import {ButtonStyle} from "../components/Button";
import green_logo from "../assets/images/green_logo.png";


const Picture = styled.img`
    height: 30%;
    object-fit: cover;
`;
export const SignUPFriendCode = () => {
    const [friendCode, setFriendCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const usersCollectionRef = collection(db,'users');
    const handleSend = async (e) => {
        e.preventDefault();
        try {
            const data = await getDocs(usersCollectionRef);
            const filteredData = data.docs.map(doc =>
                doc.data()["user_code"].toString()
            );
            console.log(filteredData);
            if (filteredData.includes(friendCode)){
                increaseFriendCount();
                navigate("/SignUp");
            }
            else{
                throw new Error('Parameter is not a number!');
            }
        } catch (error) {
            setError('Invalid friend code!');
        }
    };

    const increaseFriendCount = async () => {
        let friendId = 0;
        const data = await getDocs(usersCollectionRef);
        data.docs.map((doc) => {
            if(doc.data()["user_code"].toString()===friendCode){
                friendId = doc.id;
            }
        });
        console.log(friendId);

        const documentRef = doc(db, 'users', friendId);

        // Get the document snapshot from Firestore.
        getDoc(documentRef).then((doc) => {
            if (doc.exists) {
                console.log("Document exists");
                // Get the current value of the field 'friends_add'.
                const currentValue = doc.data().friends_add;

                // Calculate the new value by adding 1.
                const newValue = currentValue + 1;

                // Update the field in the document.
                return updateDoc(documentRef, { friends_add: newValue });
            } else {
                console.log("Document does not exist.");
                // Handle the situation when the document doesn't exist for the given friendId.
            }
        }).catch((error) => {
            console.log("Error updating document:", error);
            // Handle error
        });
    }


        return (
            <div className={"main-container"}>
                <ConfigProvider
                    theme={{
                        "token": {
                            "colorPrimaryBorder": "#11998E",
                            "colorPrimaryBorderHover": "#11998E",
                            "colorPrimaryHover": "#11998E",
                            "colorPrimary": "#11998E",
                            "wireframe": false
                        },
                    }}
                >
                <Picture src={green_logo}/>
                <header><h1>Join the Second Community!</h1></header>
                {error && <p
                    style={{color: 'red'}}>{error}</p>}
                <p>Ask a community member for his user code</p>
                <form onSubmit={handleSend}>
                    <Input
                        value={friendCode}
                        placeholder="Enter friend's user code"
                        onChange={(c) => setFriendCode(c.target.value)}/>
                    <ButtonStyle
                        className={"submit-button"}
                        type="submit">
                        Submit
                    </ButtonStyle>

                </form>
                </ConfigProvider>
            </div>
        )
    }

