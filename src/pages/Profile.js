import React, {useContext, useEffect, useState} from "react";
import MainHeader from "../components/Header";
import Navbar from "../components/Navbar";
import { doc, getDoc, updateDoc} from "firebase/firestore";
import Feed_MyProfile from "../components/Feed_MyProfile";
import "../styles/Profile.css"
import "../styles/Index.css"
import {Descriptions, Input, message, Modal, Tooltip, TreeSelect} from 'antd';
import {AuthContext } from '../components/AuthProvider';
import {db} from "../firebase";
import {SettingOutlined} from "@ant-design/icons";
import {NeighborhoodDict} from "../assets/DataSets";
import Colors from "../color.js";

export default function MyProfile() {
    const currentUser = useContext(AuthContext);
    const [userFirstName, setUserFirstName] = useState("");
    const [userNeighborhood, setUserNeighborhood] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [userCode, setUserCode] = useState("");
    const [userTokens, setUserTokens] = useState(0);
    const [editInfoModalVisible, setEditInfoModalVisible] = useState(false);
    const [userName, setUserName] = useState("");

    const getUserName = async () => {
        const userId = currentUser.uid;
        const UserRef = doc(db, 'users', userId);
        const docSnap = await getDoc(UserRef);
        return docSnap.data().first_name;
    };

    getUserName().then( result => { setUserName(result)});

    useEffect(() => {
        const userId = currentUser.uid;
        const UserRef = doc(db,'users',userId);
        getUserData(UserRef);
    }, []);

    async function getUserData(UserRef) {
        try {
            const docSnap = await getDoc(UserRef);
            if (docSnap.exists()) {
                setUserFirstName(docSnap.data().first_name);
                setUserNeighborhood(docSnap.data().neighborhood);
                setUserPhoneNumber(docSnap.data().phone_number);
                setUserCode(docSnap.data().userCode);
                setUserTokens(docSnap.data().tokens_left);
            } else {
                console.log("User document does not exist");
                return null;
            }
        } catch (error) {
            console.error("Error getting user document:", error);
            return null;
        }
    }

    const handleEditInfoModalOpen = () => {setEditInfoModalVisible(true);};
    const handleEditInfoModalClose = () => {setEditInfoModalVisible(false);};
    const handleNeighborhoodChange = (value, label) => {setUserNeighborhood(value);};

    const handleUserInfoEdit  = async (e) => {
        e.preventDefault();
        try {
            const userId = currentUser.uid;
            const UserRef = doc(db,'users',userId);
            const newData = {
                first_name: userFirstName,
                neighborhood: userNeighborhood,
                phone_number: userPhoneNumber,
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
    };


    return (
        <div>
            {currentUser ?
                ( <MainHeader color={Colors.yelloww} name={userName}/> )
                :
                ( <MainHeader color={Colors.yelloww} name={null}/> )
            }

            <header className={"page_header"}>My Profile</header>
            <div style={{ position: 'relative' }}>
                <Descriptions className="personal-info-table"
                              layout="horizontal"
                              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                              bordered
                              size={"small"}>
                    <Descriptions.Item label="Name">{userFirstName}</Descriptions.Item>
                    <Descriptions.Item label="Neighborhood">{userNeighborhood}</Descriptions.Item>
                    <Descriptions.Item label="Phone number">{userPhoneNumber}</Descriptions.Item>
                    <Descriptions.Item label="User Code">{userCode}</Descriptions.Item>
                    <Descriptions.Item label="Tokens">{userTokens}</Descriptions.Item>
                </Descriptions>
                <div style={{ position: 'absolute', top: '20px', right: '20px'}}>
                    <Tooltip className={"info-edit-btn"} title="Edit Info">
                        <SettingOutlined style={{ fontSize: '16px' }}
                                         onClick={handleEditInfoModalOpen}
                            />
                    </Tooltip>
                </div>
            </div>

            <div className={"feed-container"}>
                <h2 >Uploaded Items</h2>
                <Feed_MyProfile/>
            </div>

            <Navbar/>




            {/*EDIT PERSONAL INFO MODAL*/}
            <Modal title="Edit Personal Information"
                   open={editInfoModalVisible}
                   onCancel={handleEditInfoModalClose}
                   footer={[]} // Empty array to hide buttons>
            >
                <div className={"edit-info-modal"}>
                    <form onSubmit={ handleUserInfoEdit }>

                        <Input
                            type="text" value={userFirstName} placeholder={userFirstName}
                            onChange={(e) => setUserFirstName(e.target.value)}
                        />

                        <TreeSelect
                            treeData = {NeighborhoodDict}
                            value={userNeighborhood}
                            placeholder={"Enter Neighborhood"}
                            onChange={handleNeighborhoodChange}
                        />

                        <Input
                            type="text"
                            value={userPhoneNumber}
                            placeholder={userPhoneNumber}
                            onChange={(e) => setUserPhoneNumber(e.target.value)}
                        />
                        <button className={"update-button"} type="submit">
                            Update Information
                        </button>
                    </form>
                </div>
            </Modal>

        </div>
    );
}

