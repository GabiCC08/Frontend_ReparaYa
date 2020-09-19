import React from 'react';
import SimpleHeader from "../components/SimpleHeader";
import {Button, Form, Input} from "antd";
import Routes from "../constants/routes";
import {Link, useLocation} from "react-router-dom";
import '../styles/Register.less';
import { LockOutlined, UserOutlined, MailOutlined, EditOutlined, FileTextOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons/lib';



const Register = () => (
    <div>
        <SimpleHeader/>
        <div className='section' id='imgRegister'>
            <h1 id='hFrm' style={{textAlign: 'Center',fontsize:'10px'}}>REGISTRATE EN REPARA YA </h1>
            <div id='register'>
            <Form name='register-form'
                  className='register-form'
                  initialValues={ {
                      email: '',
                      password: ''
                  } }

            >
                <Form.Item name='name'
                           rules={ [
                               {
                                   required: true,
                                   message: 'Ingresa tu nombre'
                               }
                           ] }
                           hasFeedback
                >
                    <Input prefix={ <UserOutlined /> } placeholder='Nombre' />
                </Form.Item>

                <Form.Item name='email'
                           rules={ [
                               {
                                   required: true,
                                   message: 'Ingresa tu nombre de usuario'
                               },
                               {
                                   type: 'email',
                                   message: 'Ingresa un correo válido'
                               }
                           ] }
                           hasFeedback
                >
                    <Input prefix={ <MailOutlined /> } placeholder='Email' />
                </Form.Item>

                <Form.Item name='password'
                           rules={ [
                               {
                                   required: true,
                                   message: 'Ingresa tu clave'
                               }
                           ] }
                           hasFeedback
                >
                    <Input.Password prefix={ <LockOutlined /> }
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    placeholder='Clave' />
                </Form.Item>

                <Form.Item name='password_confirmation'
                           dependencies={ [ 'password' ] }
                           hasFeedback
                           rules={ [
                               {
                                   required: true,
                                   message: 'Confirma tu clave',
                               },
                               ( { getFieldValue } ) => ({
                                   validator( rule, value ) {
                                       if( !value || getFieldValue( 'password' ) === value ) {
                                           return Promise.resolve();
                                       }
                                       return Promise.reject( 'Las claves no coinciden' );
                                   },
                               }),
                           ] }
                >
                    <Input.Password prefix={ <LockOutlined /> }
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    placeholder='Confirma tu clave' />
                </Form.Item>

                <Form.Item name='Profesion'
                           rules={ [
                               {
                                   required: true,
                                   message: 'Ingresas a que te dedicas'
                               }
                           ] }
                           hasFeedback
                >
                    <Input prefix={ <EditOutlined /> } placeholder='Ciudad' />
                </Form.Item>

                <Form.Item name='short_bio'
                           rules={ [
                               {
                                   required: true,
                                   message: 'Cuéntanos un poco sobre ti.'
                               }
                           ] }
                           hasFeedback
                >
                    <Input.TextArea prefix={ <FileTextOutlined /> }
                                    placeholder='Cuéntanos un poco de  ti'
                                    autoSize={ {
                                        minRows: 2,
                                        maxRows: 6
                                    } } />
                </Form.Item>

                <Form.Item>
                    <Link to={Routes.PROFILE}><Button type='primary' htmlType='submit' className='login-form-button'>
                        Registrarme
                    </Button></Link>
                    <Link to={Routes.HOME}><Button type="default">Ya tengo una Cuenta</Button></Link>
                </Form.Item>
            </Form>

            </div>
        </div>
    </div>
);

export default Register;