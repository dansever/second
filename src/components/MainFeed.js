import React from 'react';
import { Card, Col, Row } from 'antd';
import ItemCard from "./Card";

const App = () => (
    <Row gutter={16}>
        <Col span={8}>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
        </Col>
    </Row>
);
export default App;