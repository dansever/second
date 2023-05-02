import React from "react";
import { UploadOutlined } from '@ant-design/icons';
import '../styles/Index.css';
import '../components/ProductUpload/ProductUploadForm.css';
import {Button, Form, Input, InputNumber, Select, Upload, Rate, Space} from 'antd';
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
function UploadImage() {
    return (
        <Form.Item
            name="upload"
            label="Upload Image of Product"
            valuePropName="fileList"
            getValueFromEvent={normFile}
        >
            <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
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
            <Input placeholder="input product title"/>
        </Form.Item>
    )
}
function Size() {
    return (
        <Form.Item label="Size">
            <Input placeholder="input size" size/>
        </Form.Item>
    )
}
function Color() {
    return (
        <Form.Item label="Color">
            <Select placeholder="input color">
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
            <Input placeholder="input brand name (if known)"/>
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
            <InputNumber min={1} max={5} placeholder="1 to 5"/>
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