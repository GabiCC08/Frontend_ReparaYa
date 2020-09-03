import React from "react";
import { Layout, Row, Col} from "antd";
import logo from "../images/logo.png";
const {Header} = Layout;

const SimpleHeader = () => {
    return(
        <Header>
            <Row justify='space-between' align="middle">
                <Col>
                    <img className="logo" width={140} src={logo} alt='REPARAYA'/>
                </Col>
            </Row>
        </Header>
    );
}
export default SimpleHeader;