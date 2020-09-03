import React from 'react';
import {Card, Form, Input, Button, Checkbox, Layout} from "antd";
import SimpleHeader from "../components/SimpleHeader";

const {Content} = Layout;

const Login = () => (

    <>
        <Layout className="layout">
            <SimpleHeader/>
            <Content>
                <div className="site-layout-content">
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
                                <Button type="primary" htmlType="submit">
                                    INGRESAR
                                </Button>
                            </Form.Item>

                            <Form.Item>
                                <Button>
                                    CREAR CUENTA
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </Content>
        </Layout>
    </>
);

export default Login;