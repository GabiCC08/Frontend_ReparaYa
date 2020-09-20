import React from 'react';
import SimpleHeader from "../components/SimpleHeader";
import {Button, Form, Input, message,Switch} from "antd";
import Routes from "../constants/routes";
import {Link} from "react-router-dom";
import '../styles/Register.less';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons/lib';
import FIREBASE from "../firebase";


const Register = () => {

    const handleSubmit= async (values)=>{
        console.log('datos de la base de Datos')
        await FIREBASE.db.ref('user').push(values);
        message.success('Los datos se Guardaron Correctamente');
    }
    return(
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
                        <Form.Item name={['user', 'name']} label="Nombres Completos"
                                   rules={[{required: true, message: 'Por favor, ingresa tus nombres completo.'}]} hasFeedback>
                            <Input placeholder='Nombres' />
                        </Form.Item>

                        <Form.Item name={['user', 'lastname']} label="Apellidos Completos"
                                   rules={[{required: true, message: 'Por favor, tus apellidos completos'}]} hasFeedback>
                            <Input placeholder='Apellidos' />
                        </Form.Item>

                        <Form.Item name={['user', 'email']} label="Email"
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
                            <Input placeholder='Email' />
                        </Form.Item>

                        <Form.Item name={['user', 'password']} label="Contraseña"
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingresa tu clave'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input.Password
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                placeholder='Clave' />
                        </Form.Item>

                        <Form.Item name={['user', 'password-confirmation']} label="Contraseña"
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
                            <Input.Password
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                placeholder='Vuelve a escribir la Clave' />
                        </Form.Item>

                        <Form.Item name={['user', 'visible']}  label="Visible" rules={ [
                            {
                                required: true,
                            }
                        ] }>
                            <Switch />
                        </Form.Item>

                        <Form.Item name={['user', 'city']} label="Ciudad"
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingresas tu ciudad'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input  placeholder='Ciudad' />
                        </Form.Item>
                        <Form.Item name={['user', 'job-type']} label="Trabajo"
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingresas tu ciudad'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input  placeholder='Ciudad' />
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
    )
};

export default Register;