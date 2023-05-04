import React from "react";
import { UploadOutlined } from '@ant-design/icons';
import '../styles/Index.css';
// import '../components/ProductUpload/ProductUploadForm.css';
import {Button, Form, Input, InputNumber, Select, Upload, Rate, Space, ConfigProvider } from 'antd';
import styled from 'styled-components'
import { Radio } from 'antd'
import Colors from "../color"

const FormContainer = styled.div`
  background-color: var(--background_green);
  padding: 0 20px 50px 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const onFinish = (values) => {
    console.log('Received values of form: ', values);
};

const StyledUpload = styled.button`
    background-color: var(--light_green);
    border: none;
    color: var(--text_color);
    .ant-btn {
        background-color: var(--light_green);
        border: 1px solid var(--text_color);
        color: var(--text_color);
    }
  .ant-btn:hover {
    background-color: var(--light_green);
    border: 1px solid var(--dark_green);
    color: var(--dark_green);
  }
`;

const StyledInput = styled.div`
    .ant-input {
      background-color: var(--light_green);
      border: 1px solid var(--text_color);
      border-radius: 4px;
    }
    .ant-input-number {
        background-color: var(--light_green);
        border: 1px solid var(--text_color);
        border-radius: 4px;
    }
`

const StyledSelect = styled.div`
    .ant-select-selector {
        background-color: var(--light_green) !important;
        border: 1px solid var(--text_color) !important;
        border-radius: 4px;
    }
    .ant-select-selector:hover {
      background-color: var(--light_green) !important;
      border: 1px solid var(--dark_green) !important;
      border-radius: 4px;
    }
`;


function UploadImage() {
    return (
            <Form.Item
                name="upload"
                label="Upload Image of Product"
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <StyledUpload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </StyledUpload>
            </Form.Item>
    )
}
function Title() {
    return (
        <Form.Item
            name="title"
            label="Title"
            rules={[{required: true,
                message: 'Please enter product title',
            },
            ]}>
            <StyledInput>
                <Input placeholder="input product title"/>
            </StyledInput>
        </Form.Item>
    )
}
function Size() {
    return (
        <Form.Item label="Size">
            <StyledInput>
                <Input placeholder="input size" size/>
            </StyledInput>
        </Form.Item>
    )
}
function Color() {
    return (
        <Form.Item label="Color">
            <StyledSelect>
                <Select placeholder="choose color">
                    <Select.Option value="Red">Red</Select.Option>
                    <Select.Option value="Green">Green</Select.Option>
                    <Select.Option value="Blue">Blue</Select.Option>
                    <Select.Option value="Yellow">Yellow</Select.Option>
                    <Select.Option value="Orange">Orange</Select.Option>
                    <Select.Option value="Purple">Purple</Select.Option>
                    <Select.Option value="Pink">Pink</Select.Option>
                    <Select.Option value="Brown">Brown</Select.Option>
                    <Select.Option value="Black">Black</Select.Option>
                    <Select.Option value="White">White</Select.Option>
                    <Select.Option value="Grey">Grey</Select.Option>
                    <Select.Option value="Beige">Beige</Select.Option>
                    <Select.Option value="Gold">Gold</Select.Option>
                    <Select.Option value="Silver">Silver</Select.Option>
                    <Select.Option value="Multi">Multi</Select.Option>
                </Select>
            </StyledSelect>
        </Form.Item>
    )
}
function Brand() {
    return (
        <Form.Item label="Brand">
            <StyledInput>
                <Input placeholder="input brand name (if known)"/>
            </StyledInput>
        </Form.Item>
    )
}
function Condition() {
    return (
        <Form.Item
            name="condition"
            label="Condition"
        >
            <Radio.Group>
                <Radio.Button value="old">old</Radio.Button>
                <Radio.Button value="worn">worn</Radio.Button>
                <Radio.Button value="as new">as new</Radio.Button>
                <Radio.Button value="new">new</Radio.Button>
            </Radio.Group>
        </Form.Item>
    )
}
function Type() {
    return (
        <Form.Item
            name="type"
            label="Type"
        >
            <Radio.Group>
                <Radio.Button value="Dress">Dress</Radio.Button>
                <Radio.Button value="Shirt">Shirt</Radio.Button>
                <Radio.Button value="Pants">Pants</Radio.Button>
                <Radio.Button value="Shoes">Shoes</Radio.Button>
                <Radio.Button value="Accessories">Accessories</Radio.Button>
                <Radio.Button value="Swimwear">Swimwear</Radio.Button>
            </Radio.Group>
        </Form.Item>
    )
}
function Price() {
    return (
        <Form.Item
            name="input-price"
            label="Input Price" >
            <StyledInput>
                <InputNumber min={1} max={5} placeholder="1 to 5"/>
            </StyledInput>
        </Form.Item>
    )
}
function RateProduct ()
{
    return (
        <Form.Item name="rate" label="Rate">
            <Rate />
        </Form.Item>
    );
}

function SubmitButton () {
    return (
        <Form.Item
            wrapperCol={{
                span: 12,
                offset: 6,
            }}
        >
            <Space>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Space>
        </Form.Item>
    )
}

export default function ProductUploadForm() {
    const formItemLayout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 14,
        },
    };

    return (
        <Form style={{backgroundColor:Colors.light_green}} {...formItemLayout} layout={"vertical"}>
            <Title/>
            <UploadImage/>
            <Type/>
            <Size/>
            <Brand/>
            <Color/>
            <Price/>
            <Condition/>
            <SubmitButton/>
        </Form>
    );
}