import React, { useState } from 'react';
import "../styles/ItemPage.css"
import { Descriptions, Image, Button, Space, Tooltip } from 'antd';
import { HeartFilled } from '@ant-design/icons';

const ItemImage = () => (
    <Image
        width={250}
        src={require('../assets/images/jeans men.jpg')} className="item-image"
    />
);

const ItemDescription = () => (
    <Descriptions title="User Info">
        <Descriptions.Item label="Title" >Jeans for Mean</Descriptions.Item>
        <Descriptions.Item label="Brand">Zara</Descriptions.Item>
        <Descriptions.Item label="Size">empty</Descriptions.Item>
        <Descriptions.Item label="Price">12 tokens</Descriptions.Item>
        <Descriptions.Item label="Address">HIDDEN</Descriptions.Item>
    </Descriptions>
);

const Like = () => (
    <Space direction="vertical">
        <Space wrap>
            <Tooltip title="search">
                <Button shape="circle" icon={<HeartFilled width={"200px"}/>} />
            </Tooltip>
        </Space>
    </Space>
);


const ItemPage = () => {
    return (
        <div className={"item-container"}>
            <h1>Item Name</h1>
            <ItemImage/>
            <ItemDescription/>
            <Like/>
        </div>
    );
};

export default ItemPage;
