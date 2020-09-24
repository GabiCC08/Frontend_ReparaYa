import {Button, Form, Input, message} from "antd";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import React from "react";
import FIREBASE from "../firebase";
import SimpleHeader from "../components/SimpleHeader";
import{useHistory} from 'react-router-dom'

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
            <div className="section">
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
                    <Button type="primary" htmlType="submit">INGRESAR</Button>
                    <Link to={Routes.REGISTER}><Button>CREAR CUENTA</Button></Link>
                </Form>
            </div>
        </>
    )
}
export default Login;