import React, {useEffect, useState} from "react";
import '../styles/Footer.less';
import {Button, Col, Layout, Row} from "antd";
import {LinkedinOutlined, MailOutlined, WhatsAppOutlined} from "@ant-design/icons";
import {Link, useLocation} from "react-router-dom";
import Routes from "../constants/routes";

const {Footer} = Layout;

const GeneralFooter = () => {

    let location = useLocation();
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        console.log('location', location.pathname.split('/'));
        const urlParts = location.pathname.split('/');
        setCurrentPage(urlParts[1] !== ''
            ? urlParts[1]
            : 'inicio');
    }, []);

    return (
        <Footer onClick={(e) => setCurrentPage(e.key)} selectedKeys={[currentPage]}>
            <Row justify='space-around' align="middle">
                <Col><span>©Reparaya WorldWide 2020</span></Col>
                <Col>
                    <Link to={Routes.HOME}><Button type="link">Inicio</Button></Link>
                    <Link to={Routes.ABOUT}><Button type="link">Acerca de</Button></Link>
                    <Link to={Routes.PRIVACY}><Button type="link">Privacidad</Button></Link>
                    <Link to={Routes.CONTACT}><Button type="link">Contáctanos</Button></Link>
                </Col>
                <Col>
                    <a><WhatsAppOutlined/></a>
                    <a><LinkedinOutlined/></a>
                    <a><MailOutlined/></a>
                </Col>
            </Row>
        </Footer>
    );
}
export default GeneralFooter;