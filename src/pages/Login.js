import {Button, Form, Input, message, Row, Col} from "antd";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import React from "react";
import FIREBASE from "../firebase";
import SimpleHeader from "../components/SimpleHeader";
import {useHistory} from 'react-router-dom'
import '../styles/Login.less'
import hello from '../images/user-circle.svg'

const Login = () => {

    const history = useHistory();

    const handleLogin = async ({email, password}) => {
        try {
            await FIREBASE.auth.signInWithEmailAndPassword(email, password)
            history.push(Routes.PROFILE)
        } catch (error) {
            // let errorCode = error.code;
            let errorMessage = error.message;
            message.error(errorMessage);
        }
    }

    return (
        <>
            <SimpleHeader/>
            <div className="sectionLogin">
                <Row justify="center" align="middle">
                    <Col span={10}>
                        <div id="loginContent">
                            <img src={hello} alt="hello" id="imgLogin"/>
                            <h2>BIENVENIDO/A</h2>
                            <h3>Ingresa a tu cuenta.</h3>
                            <Form
                                name="basic"
                                onFinish={handleLogin}
                            >
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor, ingresa tu email.'
                                        },
                                        {
                                            type: 'email',
                                            message: 'Por favor, ingresa un correo valido'
                                        }
                                    ]}>
                                    <Input placeholder="Correo Electrónico"/>
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor, ingresa tu clave.'
                                        }
                                    ]}>
                                    <Input.Password placeholder="Contraseña"/>
                                </Form.Item>
                                <div id="btnsLogin">
                                    <Form.Item><Button type="primary" htmlType="submit">INGRESAR</Button></Form.Item>

                                    <Form.Item><Link to={Routes.REGISTER}><Button>CREAR
                                        CUENTA</Button></Link></Form.Item>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Login;