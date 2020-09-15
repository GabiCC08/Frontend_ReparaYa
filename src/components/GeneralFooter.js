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
    }, [location.pathname]);

    return (
        <Footer onClick={(e) => setCurrentPage(e.key)} selectedKeys={[currentPage]}>
            <Row justify='space-around' align="middle">
                <Col><Link to={Routes.HOME}><span>©Reparaya WorldWide 2020</span></Link></Col>
                <Col>
                    <Link to={Routes.ABOUT}><Button type="link">Acerca de</Button></Link>
                    <Link to={Routes.PRIVACY}><Button type="link">Privacidad</Button></Link>
                    <Link to={Routes.CONTACT}><Button type="link">Contáctanos</Button></Link>

                </Col>
                <Col>
<<<<<<< HEAD
                    <a href='https://web.whatsapp.com/'><WhatsAppOutlined/></a>
                    <a href='https://www.linkedin.com/'><LinkedinOutlined/></a>
                    <a href='https://mail.google.com/'><MailOutlined/></a>
=======
                    <a href="https://github.com/DDI-2020A/proyecto-semestre-reparaya"><WhatsAppOutlined/></a>
                    <a href="https://github.com/DDI-2020A/proyecto-semestre-reparaya"><LinkedinOutlined/></a>
                    <a href="https://github.com/DDI-2020A/proyecto-semestre-reparaya"><MailOutlined/></a>
>>>>>>> 031b149e4ccc16083d80745e0056c58cc21a674f
                </Col>
            </Row>
        </Footer>
    );
}
export default GeneralFooter;