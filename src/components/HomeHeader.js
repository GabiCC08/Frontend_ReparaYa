import {Button, Checkbox, Col, Form, Input, Layout, Row,Modal} from "antd";
import logo from "../images/logo.png";
import React, {useState} from "react";
import Routes from "../constants/routes";
import {Link} from "react-router-dom";

const {Header} = Layout;


const HomeHeader = ()=> {

    const [web, setWeb] = useState(false);

    const showModal = () => {
        setWeb(true);
    }
    const handleCancel = () =>{
        setWeb(false)
    }
    return (
         <Header>
            <Row justify='space-between' align="middle">
                <Col>
                    <Link to={Routes.HOME}><img className="logo" width={140} src={logo} alt='REPARAYA'/></Link>
                </Col>
                <Col>
                    <Link to={Routes.REGISTER}><Button>UNIRSE AHORA</Button></Link>
                    <Button type="primary" onClick={showModal}>
                        INICIAR SESIÓN
                    </Button>
                    <Modal
                        title="BIENVENIDOS"
                        visible={web}
                        onCancel={handleCancel}
                        footer={null}
                    >
                        <Form name="basic" initialValues={{remember: true}}>
                            <Form.Item name="email" rules={[{ type: 'email',required: true, message: 'Por favor, ingresa tu email.' }]}>
                                <Input placeholder="Email"/>
                            </Form.Item>

                            <Form.Item name="password" rules={[{required: true, message: 'Por favor, ingresa tu clave.'}]}>
                                <Input.Password placeholder="Contraseña"/>
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Recordarme</Checkbox>
                            </Form.Item>
                            <Button type="primary" htmlType="submit">
                                    INGRESAR
                            </Button>
                            <Link to={Routes.REGISTER}><Button type="default">CREAR CUENTA</Button></Link>
                        </Form>
                    </Modal>
                </Col>

            </Row>

        </Header>
    );
}
export default HomeHeader;
