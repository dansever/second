import React from "react";
import {useNavigate} from "react-router";
import {Radio} from "antd";


export function ProfileOptions () {
    const navigate = useNavigate();
    return (
        <Radio.Group size={"large"} buttonStyle={"solid"} defaultValue={"MyShop"}>
            <Radio.Button onClick={() => navigate("/Profile/MyShop")} value="MyShop">My Shop</Radio.Button>
            <Radio.Button  onClick={() => navigate("/Profile/Saved")} value="Saved">Saved Items</Radio.Button>
            <Radio.Button onClick={() => navigate("/Profile/Sellers")} value="Sellers">Sellers</Radio.Button>
        </Radio.Group>
    );
}