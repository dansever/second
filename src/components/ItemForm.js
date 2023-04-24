import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { PlusOutlined } from '@ant-design/icons';
import '../styles/ItemForm.css';
import {    Button, Form, Input, InputNumber, Select, Upload    } from 'antd';
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

function ItemForm() {
    return (
        <div>
            <div className="top-bar">
                <AiOutlineArrowLeft size="24px"/>
                <h1 id="page-title">Upload</h1>
            </div>

            <div className="form-container">

                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    style={{
                        maxWidth: 600,
                    }}
                >
                    <Form.Item label=""
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
                                    Upload
                                </div>
                            </div>
                        </Upload>
                    </Form.Item>

                    <Form.Item label="Title">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Type">
                        <Select>
                            <Select.Option value="Swimwear">Swimwear</Select.Option>
                            <Select.Option value="Dress">Dress</Select.Option>
                            <Select.Option value="Shirt">Shirt</Select.Option>
                            <Select.Option value="Pants">Pants</Select.Option>
                            <Select.Option value="Shoes">Shoes</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Size">
                        <Select>
                            <Select.Option value="XS">Extra Small</Select.Option>
                            <Select.Option value="S">Small</Select.Option>
                            <Select.Option value="M">Medium</Select.Option>
                            <Select.Option value="L"> Large</Select.Option>
                            <Select.Option value="XL">Extra Large</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Color">
                        <Select>
                            <Select.Option value="Light">Light</Select.Option>
                            <Select.Option value="Dark">Dark</Select.Option>
                            <Select.Option value="Colorful">Colorful</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Brand">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Condition">
                        <Select>
                            <Select.Option value="New">New</Select.Option>
                            <Select.Option value="As New">As New</Select.Option>
                            <Select.Option value="Average">Average</Select.Option>
                            <Select.Option value="Below Average">Below Average</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Price (in tokens)">
                        <InputNumber />
                    </Form.Item>

                    <Form.Item id="submit-button">
                        <Button>Add To Your Shop</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default ItemForm;