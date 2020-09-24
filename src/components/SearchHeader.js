import React from "react";
import logo from "../images/logo.png";
import Routes from "../constants/routes";
import {useHistory} from "react-router-dom";
import {Layout, Row, Col, Menu, Dropdown, Button, message} from "antd";
import {createFromIconfontCN, SearchOutlined, IdcardOutlined, TeamOutlined} from '@ant-design/icons';
import '../styles/HeaderProfile.less'
import FIREBASE from "../firebase";


const SearchHeader = () => {

    function handleMenuClick(e) {
        console.log('OpcBuscador', e);
    }

    const history = useHistory();

    const handleExitClick = async () => {
        try {
            await FIREBASE.auth.signOut();
            history.push(Routes.HOME);
        } catch (error) {
            let errorMessage = error.message;
            message.error(errorMessage);
        }
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<TeamOutlined/>}>
                Personas
            </Menu.Item>
            <Menu.Item key="2" icon={<IdcardOutlined/>}>
                Empleos
            </Menu.Item>
        </Menu>
    );
    const {Header} = Layout;
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });

    return (
        <Header>
            <Row justify="space-between" align="middle">
                <Col>
                    <img className="logo" width={140} src={logo} alt='REPARAYA'/>
                </Col>
                <Col/>
                <Col/>
                <Col/>
                <Col>
                    <div>
                        <Dropdown overlay={menu}>
                            <Button>Buscar<SearchOutlined/></Button>
                        </Dropdown>
                    </div>
                </Col>
                <Col>
                    <div>
                        <Button type="link"><IconFont onClick={handleExitClick} type="icon-tuichu"/></Button>
                    </div>
                </Col>
            </Row>
        </Header>
    );
}
export default SearchHeader;