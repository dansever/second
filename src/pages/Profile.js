import React, {useContext, useEffect, useState} from "react";
import MainHeader from "../components/Header";
import Navbar from "../components/Navbar";
import { doc, getDoc, updateDoc} from "firebase/firestore";
import Feed_MyProfile from "../components/Feed_MyProfile";
import "../styles/Profile.css"
import "../styles/Index.css"
import {Input, message, Modal, Tooltip, TreeSelect, ConfigProvider} from 'antd';
import {AuthContext } from '../components/AuthProvider';
import {db} from "../firebase";
import {SettingOutlined} from "@ant-design/icons";
import { BsBagHeart, BsCloudSun, BsPersonPlus } from "react-icons/bs";
import {NeighborhoodDict} from "../assets/DataSets";
import {BorderedButtonGreen} from "../components/Button.js"
import Colors from "../color.js";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

export default function MyProfile() {
    const currentUser = useContext(AuthContext);
    const [userFirstName, setUserFirstName] = useState("");
    const [userNeighborhood, setUserNeighborhood] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [userCode, setUserCode] = useState("");
    const [userFriends, setUserFriends] = useState(0);
    const [itemsDonated, setItemsDonated] = useState("");
    const [co2Saved, setCo2Saved] = useState("");
    const [editInfoModalVisible, setEditInfoModalVisible] = useState(false);


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
                setUserPhoneNumber(docSnap.data().phone_number);
                setUserNeighborhood(docSnap.data().neighborhood);
                setUserCode(docSnap.data().user_code);
                setUserFriends(docSnap.data().friends_add);
                setItemsDonated(docSnap.data().items_given);
                setCo2Saved((docSnap.data().items_given) * 7.5);

            } else {
                console.log("User document does not exist");
                return null;
            }
        } catch (error) {
            console.error("Error getting user document:", error);
            return null;
        }
    }
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
        setEditInfoModalVisible(false);
    };

    const copyToClipboard = () => {
        let isCopy = copy(userCode);
        if (isCopy) {
            toast.success("Copied to Clipboard");
            message.info(
                "Copied to Clipboard", 1,
                () => {console.log('Pop-up closed');});
        }
    };


    return (
        <div>
            {currentUser ?
                ( <MainHeader name={userFirstName}/> )
                :
                ( <MainHeader name={null}/> )
            }

            <header className={"page_header"}>My Profile</header>
            <div style={{ position: 'absolute', top: '88px', right: '20px'}}>
                <Tooltip className={"info-edit-btn"} title="Edit Info">
                    <SettingOutlined style={{ fontSize: '25px' }}
                                     onClick={() => {setEditInfoModalVisible(true)}}
                    />
                </Tooltip>
            </div>

            <div>
                <div className={"user-info"}>
                    <div className={"description"}>
                    <div className={"icons"}>
                        <BsBagHeart/>
                        <h4 >{itemsDonated}</h4>
                    </div>
                        <h5>Items Given</h5>
                    </div>

                    <div className={"description"}>
                        <div className={"icons"}>
                            <BsCloudSun/>
                            <h4 className={"h4-des"}>{co2Saved} kg</h4>
                        </div>
                        <h5>CO<sub>2</sub> Saved</h5>
                    </div>
                    <div className={"description"}>
                        <div className={"icons"}>
                            <BsPersonPlus/>
                            <h4 className={"h4-des"}>{userFriends}</h4>
                        </div>
                        <h5>Friends Added</h5>
                    </div>
                </div>
                <div className={"invite-friends"}>
                    <h5 className={"h4-des"}>copy your code and invite friends:</h5>
                    <button onClick={copyToClipboard} style={{color:Colors.green}}>{userCode}</button>
                </div>

            </div>

            <div className={"feed-container"}>
                <h2 >Uploaded Items</h2>
                <Feed_MyProfile
                    setItemsDonated = {setItemsDonated}
                    itemsDonated = {itemsDonated}
                    setCo2Saved = {setCo2Saved}
                    co2Saved = {co2Saved}/>
            </div>

            <Navbar/>



            {/*EDIT PERSONAL INFO MODAL*/}
            <Modal
                   open={editInfoModalVisible}
                   onCancel={() => {setEditInfoModalVisible(false)}}
                   footer={[]} // Empty array to hide buttons>
            >
                <div className={"edit-info-modal"}>
                    <h2 style={{color:Colors.green}}>Edit item information</h2>
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

        </div>
    );
}

