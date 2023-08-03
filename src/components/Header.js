import React, {useContext, useEffect, useState} from "react";
import { useNavigate} from 'react-router-dom';
import "../styles/Index.css";
import styled from "styled-components";
import white_logo from "../assets/images/white_logo.png";
import Colors from "../color";
import { DownOutlined } from '@ant-design/icons';
import {Dropdown, ConfigProvider, Modal, message, Input, TreeSelect} from 'antd';
import {auth, db} from "../firebase";
import {AuthContext} from "./AuthProvider";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import {BorderedButtonGreen} from "./Button";
import {NeighborhoodDict} from "../assets/DataSets";


const TitleAndLogo = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  align-items: center;
`;

const HeaderContainer = styled.div`
      display: flex;
      flex-direction: row;
      background-image: linear-gradient(to top left, ${Colors.green}, ${Colors.light_green} );
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1;
      height: 60px;
      padding-left: 15px;
      padding-right: 5px;
      align-items: center;
      justify-content: space-between;
    `;

export default function MainHeader(props) {
    const currentUser = useContext(AuthContext);
    const navigate = useNavigate();

    const [userFirstName, setUserFirstName] = useState(props.name);
    const [userNeighborhood, setUserNeighborhood] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");

    const [aboutModalVisible, setAboutModalVisible] = useState(false);
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);

    useEffect(() => {
        const UserRef = doc(db,'users',currentUser.uid);
        getUserData(UserRef);
    }, []);

    async function getUserData(UserRef) {
        try {
            const docSnap = await getDoc(UserRef);
            if (docSnap.exists()) {
                setUserFirstName(docSnap.data().first_name);
                setUserPhoneNumber(docSnap.data().phone_number);
                setUserNeighborhood(docSnap.data().neighborhood);
            } else {
                console.log("User document does not exist");
                return null;
            }
        } catch (error) {
            console.error("Error getting user document:", error);
            return null;
        }
    }

    const handleSignOut = () => {
        auth.signOut();
        console.log('User signed out');
        navigate("/Login");
    }

    const items = [
        {
            label: <a onClick={() => setAboutModalVisible(true)}>About</a>,
            key: '0',
        },
        {
            label: <a onClick={() => setSettingsModalVisible(true)}>Settings</a>,
            key: '1',
        },
        {
            label: <a onClick={handleSignOut}>Sign Out</a>,
            key: '2',
        }
    ];

    const handleUserInfoEdit  = async (e) => {
        e.preventDefault();
        try {
            const userId = currentUser.uid;
            const UserRef = doc(db,'users',userId);
            const newData = {
                first_name: userFirstName,
                phone_number: userPhoneNumber,
                neighborhood: userNeighborhood,
            };
            updateDoc(UserRef, newData)
                .then( () => {
                    console.log('User updated successfully');
                    message.success(
                        "User updated successfully", 2, () => {console.log('Pop-up closed');});
                })
        } catch (error) {
            console.log('Something went wrong. Please try again.');
        }
        setSettingsModalVisible(false);
    };

    return (
        <HeaderContainer>
            <TitleAndLogo>
                <h3
                    style={{
                        color: Colors.background_white,
                        fontSize:"32px"}}>
                    Second
                </h3>
                <img
                    src={white_logo}
                    alt={white_logo}
                    style={{width:"45px", height:"40px"}}
                />
            </TitleAndLogo>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
                className={"user_info_dropdown"}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <p style={{color: Colors.background_white,
                        fontSize:"16px",
                        padding:"5px"}}>
                        Hi {userFirstName}
                        <DownOutlined style={{padding:"5px"}}/>
                    </p>
                </a>
            </Dropdown>

            {/*EDIT PERSONAL INFO MODAL*/}
            <Modal
                open={settingsModalVisible}
                onCancel={() => {setSettingsModalVisible(false)}}
                footer={[]}
            >
                <div className={"edit-info-modal"}>
                    <h2 style={{color:Colors.green}}>Edit Personal Information</h2>
                    <form onSubmit={ handleUserInfoEdit }>
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
                            <Input
                                type="text"
                                addonBefore="First Name"
                                value={userFirstName}
                                placeholder={userFirstName}
                                onChange={(e) => setUserFirstName(e.target.value)}
                            />

                            <Input
                                type="text"
                                addonBefore="Phone Number"
                                value={userPhoneNumber}
                                placeholder={userPhoneNumber}
                                onChange={(e) => setUserPhoneNumber(e.target.value)}
                            />

                            <TreeSelect
                                treeData = {NeighborhoodDict}
                                value={userNeighborhood}
                                placeholder={"Enter Neighborhood"}
                                onChange={(value, label) => {setUserNeighborhood(value)}}
                            />
                        </ConfigProvider>
                        <BorderedButtonGreen className={"update-button"} type="submit">
                            Update Information
                        </BorderedButtonGreen>
                    </form>
                </div>
            </Modal>

            {/*ABOUT SECOND MODAL*/}
            <Modal
                open={aboutModalVisible}
                onCancel={() => {setAboutModalVisible(false)}}
                footer={[]}
            >
                <h2 style={{color:Colors.green}}>About Second</h2>
                <div className={"about-second-modal"}>
                    <h4>Hello, we are Gal, Inbal & Dan,
                        students in the Hebrew University in Jerusalem.
                        We Develope
                    </h4>
                    <p style={{fontWeight:"bold", color:Colors.green}}>Save Co2</p>
                    <p>..</p>
                    <p style={{fontWeight:"bold", color:Colors.green}}>Save Money</p>
                    <p>...</p>
                    <p style={{fontWeight:"bold", color:Colors.green}}>Strengthen Your Community</p>
                    <p>...</p>

                </div>
            </Modal>

        </HeaderContainer>
    );
};