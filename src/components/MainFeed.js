import React from 'react';
import { Col, Row } from 'antd';
import ItemCard from "./Card";

const App = () => (
    <Row gutter={16}>
        <Col span={8}>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
        </Col>
    </Row>
);
export default App;