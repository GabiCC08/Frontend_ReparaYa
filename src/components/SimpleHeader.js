import React from "react";
import { Layout, Row, Col} from "antd";
import logo from "../images/logo.png";
import Routes from "../constants/routes";
import {Link} from "react-router-dom";
const {Header} = Layout;

const SimpleHeader = () => {
    return(
        <Header>
            <Row justify='space-between' align="middle">
                <Col>
                    <Link to={Routes.HOME}><img className="logo" width={140} src={logo} alt='REPARAYA'/></Link>
                </Col>
            </Row>
        </Header>
    );
}
export default SimpleHeader;