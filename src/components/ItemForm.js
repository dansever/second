import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { PlusOutlined } from '@ant-design/icons';
// import '../styles/Main.css';
import '../styles/ItemForm.css';
import {    Button, Form, Input, InputNumber, Select, Upload    } from 'antd';
import styled from 'styled-components'

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const FormItem = styled.div`
     font-weight: bold;
`;
function Header() {

    return (
        <div className="top-bar">
            <AiOutlineArrowLeft size="24px"/>
            <h1>Upload</h1>
        </div>
    )
}
function UploadImage() {
    return (
        <Form.Item label="Upload"
                   valuePropName="fileList"
                   getValueFromEvent={normFile}>
            <Upload action="/upload.do" listType="picture-card">
                <div>
                    <PlusOutlined />
                    <div
                        style={{
                            marginTop: 8,
                        }}
                    >
                        Select Image from Gallery
                    </div>
                </div>
            </Upload>
        </Form.Item>
    )
}
function ProductTitle() {
    return (
        <Form.Item label="Title">
            <Input />
        </Form.Item>
    )
}
function ProductType() {
    return (
    <Form.Item label="Type">
        <Select>
            <Select.Option value="Swimwear">Swimwear</Select.Option>
            <Select.Option value="Dress">Dress</Select.Option>
            <Select.Option value="Shirt">Shirt</Select.Option>
            <Select.Option value="Pants">Pants</Select.Option>
            <Select.Option value="Shoes">Shoes</Select.Option>
        </Select>
    </Form.Item>
    )
}
function ProductSize() {
    return (
        <Form.Item label="Size">
            <Select>
                <Select.Option value="XS">Extra Small</Select.Option>
                <Select.Option value="S">Small</Select.Option>
                <Select.Option value="M">Medium</Select.Option>
                <Select.Option value="L"> Large</Select.Option>
                <Select.Option value="XL">Extra Large</Select.Option>
            </Select>
        </Form.Item>
    )
}
function ProductColor() {
    return (
        <Form.Item label="Color">
            <Select>
                <Select.Option value="Light">Light</Select.Option>
                <Select.Option value="Dark">Dark</Select.Option>
                <Select.Option value="Colorful">Colorful</Select.Option>
            </Select>
        </Form.Item>
    )
}
function ProductBrand() {
    return (
        <Form.Item label="Brand">
            <Input />
        </Form.Item>
    )
}
function ProductCondition() {
    return (
        <Form.Item label="Condition">
            <Select>
                <Select.Option value="New">New</Select.Option>
                <Select.Option value="As New">As New</Select.Option>
                <Select.Option value="Average">Average</Select.Option>
                <Select.Option value="Below Average">Below Average</Select.Option>
            </Select>
        </Form.Item>
    )
}
function ProductPrice() {
    return (
        <Form.Item label="Price (in tokens)">
            <InputNumber />
        </Form.Item>
    )
}
function SubmitButton() {
    return (
        <Form.Item id="submit-button">
            <Button>Add To Your Shop</Button>
        </Form.Item>
    )
}
function ItemForm() {
    return (
        <div>
            <Header/>
            <div className="form-container">
                <Form>
                    <UploadImage/>
                    <ProductTitle/>
                    <ProductType/>
                    <ProductSize/>
                    <ProductColor/>
                    <ProductBrand/>
                    <ProductCondition/>
                    <ProductPrice/>
                    <SubmitButton/>
                </Form>
            </div>
        </div>
    );
};
export default ItemForm;