import {Button, Card, Checkbox, Col, Form, Input, Layout, Row,Modal} from "antd";
import logo from "../images/logo.png";
import React, {useState} from "react";

const {Header} = Layout;


const HomeHeader = ()=> {

    const [web, setWeb] = useState(false);
    const [ createInfoModalVisible, setCreateInfoModalVisible ] = useState( false );

    const handleModal = () => {
        setCreateInfoModalVisible( true );
    }
    const showModal = () => {
        setWeb(true);
    }
    return (
         <Header>
            <Row justify='space-between' align="middle">
                <Col>
                    <img className="logo" width={140} src={logo} alt='REPARAYA'/>
                </Col>
                <Col>
                    <Button>UNIRSE AHORA</Button>
                    <Button type="primary" onClick={showModal}>INICIAR SESIÓN</Button>

                    <Modal
                        visible={web}
                    >
                        <div className="ant-modal-content">
                            <Card>
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

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" onClick={handleModal}>
                                            INGRESAR
                                        </Button>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button onClick={handleModal}>
                                            CREAR CUENTA
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </div>
                    </Modal>
                </Col>

            </Row>

        </Header>
    );
}
export default HomeHeader;
