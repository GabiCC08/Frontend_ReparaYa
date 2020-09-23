import {Button, Col, Layout, Row} from "antd";
import logo from "../images/logo.png";
import React from "react";
import Routes from "../constants/routes";
import {Link} from "react-router-dom";

const {Header} = Layout;

const HomeHeader = () => {

    return (
        <Header>
            <Row justify='space-between' align="middle">
                <Col>
                    <Link to={Routes.HOME}><img className="logo" width={140} src={logo} alt='REPARAYA'/></Link>
                </Col>
                <Col>
                    <Link to={Routes.REGISTER}><Button>UNIRSE AHORA</Button></Link>
                    <Link to={Routes.LOGIN}><Button type="primary">INICIAR SESIÓN</Button></Link>
                </Col>
            </Row>

        </Header>
    );
}
export default HomeHeader;
