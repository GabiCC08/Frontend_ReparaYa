import {Button, Col, Layout, Row} from "antd";
import logo from "../images/logo.png";
import React from "react";
const {Header} = Layout;

function HomeHeader() {
    return (
        <Header>
            <Row justify='space-between' align="middle">
                <Col>
                    <img className="logo" width={140} src={logo} alt='REPARAYA'/>
                </Col>
                <Col>
                    <Button>UNIRSE AHORA</Button>
                    <Button type="primary">INICIAR SESIÓN</Button>
                </Col>
            </Row>
        </Header>
    );
}
export default HomeHeader;
