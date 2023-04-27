import React from "react";
import { PlusOutlined } from '@ant-design/icons';
import '../../styles/Index.css';
import './ProductUploadForm.css';
import { Form, Input, InputNumber, Select, Upload } from 'antd';
import styled from 'styled-components'
import { Button } from "../AddButton";
import second_token from "../../assets/images/second-token.png"


const Container = styled.div`
  background-color: var(--secondary_green);
  padding: 0 20px 50px 20px;
  display: flex;
  flex-direction: column;
`;

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
function UploadImage() {
    return (
        <Form.Item label="Upload"
                   valuePropName="fileList"
                   getValueFromEvent={normFile}
                   style={{display: "flex", justifyContent: "center"}}>
            <Upload action="/upload.do" listType="picture-card">
                <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8}}>
                        Select Image from Gallery
                    </div>
                </div>
            </Upload>
        </Form.Item>
    )
}
function Title() {
    return (
        <Form.Item label="Title">
            <Input style/>
        </Form.Item>
    )
}
function Type() {
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
function Size() {
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
function Color() {
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
function Brand() {
    return (
        <Form.Item label="Brand">
            <Input />
        </Form.Item>
    )
}
function Condition() {
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
function Price() {
    return (
        <div style={{display: "flex", justifyContent: "flex-start",
            flexDirection:"column"}}>
            <div style={{display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"}}>
                <h4>Price</h4>
                <img src={second_token} alt={second_token}
                     style={{width:"40px"}}/>
                <InputNumber />
            </div>
        </div>
    )
}
function SubmitButton() {
    return (
        <div style={{display:"flex", justifyContent:"center",
            padding: "20px 0 0 0"}}>
            <Button>Add to your shop</Button>
        </div>
    )
}
function ProductUploadForm() {
    return (
        <Container>
            <Form>
                <UploadImage/>
                <Title/>
                <Type/>
                <Size/>
                <Color/>
                <Brand/>
                <Condition/>
                <Price/>
            </Form>
            <SubmitButton/>
        </Container>
    );
}
export default ProductUploadForm;