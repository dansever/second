import React, {useContext, useEffect, useState} from "react";
import MainHeader from "../components/Header";
import "../styles/Profile.css"
import "../styles/Index.css"
import Navbar from "../components/Navbar";
import { AuthContext } from '../components/AuthProvider';
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";
import {Badge, Descriptions, Space, Tooltip} from 'antd';
import {EditOutlined, SettingOutlined} from "@ant-design/icons";
import MyShopFeed from "../components/MyShopFeed";



export default function MyProfile() {
    const currentUser = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [userNeighborhood, setUserNeighborhood] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");



    async function getUserData(UserRef) {
        try {
            const docSnap = await getDoc(UserRef);
            if (docSnap.exists()) {
                const first_name = docSnap.data().first_name;
                const neighborhood = docSnap.data().neighborhood;
                const phone_number = docSnap.data().phone_number;
                setUserName(first_name);
                setUserNeighborhood(neighborhood);
                setUserPhoneNumber(phone_number);
            } else {
                console.log("User document does not exist");
                return null;
            }
        } catch (error) {
            console.error("Error getting user document:", error);
            return null;
        }
    }

    useEffect(() => {
        const userId = currentUser.uid;
        const UserRef = doc(db,'users',userId);
        getUserData(UserRef);
    }, []);



    return (
        <div>
            {currentUser ?
                ( <MainHeader email={currentUser.email}/> )
                :
                ( <MainHeader email={null}/> )
            }

            <header className={"page_header"}>My Profile</header>

            <div style={{ position: 'relative' }}>
                <Descriptions className="personal-info-table"
                              layout="horizontal"
                              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                              bordered
                              size={"small"}>
                    <Descriptions.Item label="Name">{userName}</Descriptions.Item>
                    <Descriptions.Item label="Neighborhood">{userNeighborhood}</Descriptions.Item>
                    <Descriptions.Item label="Phone number">{userPhoneNumber}</Descriptions.Item>
                </Descriptions>
                <div style={{ position: 'absolute', top: '20px', right: '20px'}}>
                    <Tooltip className={"info-edit-btn"} title="Edit Info">
                        <SettingOutlined style={{ fontSize: '16px' }} />
                    </Tooltip>
                </div>
            </div>

            <div className={"feed-container"}>
                <h2 >Uploaded Items</h2>
                <MyShopFeed/>
            </div>

            <Navbar/>
        </div>
    );
}