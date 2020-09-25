import React, {useState} from 'react';
import SimpleHeader from "../components/SimpleHeader";
import {Form, Input, Select, Button, message, Row, Col, Divider,Tooltip} from "antd";
import '../styles/Register.less';
import FIREBASE from "../firebase";
import {useHistory} from 'react-router-dom'
import Routes from '../constants/routes'
import {QuestionCircleOutlined} from '@ant-design/icons';



const Register = () => {

    const [id, setId] = useState("");
    const history = useHistory();

    const handleCreate = async ({email, password}) => {
        try {
            await FIREBASE.auth.createUserWithEmailAndPassword(email, password)
            message.success("Información validada")
            getId();
        } catch (error) {
            // let errorCode = error.code;
            let errorMessage = error.message;
            message.error(errorMessage);
        }
    }

    const getId = async () => {
        const user = await FIREBASE.auth.currentUser;
        if (user != null) {
            const aux = (user.uid);
            setId(aux);
        }
    }

    const handleSubmit = async (values) => {
        getId();
        console.log("valid_ID:", id)
        console.log('formData:', values);

        await FIREBASE.db.ref(`user/${id}`).set({
            ...values,
        });
        message.success('Registro exitoso');
        history.push(Routes.PROFILE)
    }

    return (
        <>
            <SimpleHeader/>
            <div className='section' id='imgRegister'>
                <h1 className='hFrm'>FORMULARIO DE REGISTRO</h1>
                <Row>
                    <Col span={10} style={{margin: 'auto'}}>

                        <Divider orientation="center">Información de autenticación</Divider>
                        <Form
                            name="register"
                            onFinish={handleCreate}
                        >
                            <Form.Item
                                label='Correo electrónico'
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
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Contraseña"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, ingresa una contraseña',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password className="psw"/>
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirmación de contraseña"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, confirma tu contraseña',
                                    },
                                    ({getFieldValue}) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('Las contraseñas no coinciden');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password className="psw"/>
                            </Form.Item>

                            <Button htmlType="submit">VERIFICAR</Button>
                        </Form>

                        <Divider orientation="center">Información personal</Divider>
                        <Form name='new-profile'
                              onFinish={handleSubmit}
                        >
                            <Form.Item name={['name']} label="Nombre Completo"
                                       rules={[{
                                           required: true,
                                           message: 'Por favor, ingresa tu nombre completo.'
                                       }]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item name={['lastname']} label="Apellidos"
                                       rules={[{
                                           required: true,
                                           message: 'Por favor, ingresa sus apellidos completo.'
                                       }]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label='Ciudad'
                                name='city'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Escoga el area de trabajo'
                                    }
                                ]}
                            >
                                <Select className="opcSelect">
                                    <Select.Option value="Ambato">Ambato</Select.Option>
                                    <Select.Option value="Cuenca">Cuenca</Select.Option>
                                    <Select.Option value="Duran">Duran</Select.Option>
                                    <Select.Option value="Esmeraldas">Esmeraldas</Select.Option>
                                    <Select.Option value="Guayaquil">Guayaquil</Select.Option>
                                    <Select.Option value="Loja">Loja</Select.Option>
                                    <Select.Option value="Machala">Machala</Select.Option>
                                    <Select.Option value="Manta">Manta</Select.Option>
                                    <Select.Option value="Portoviejo">Portoviejo</Select.Option>
                                    <Select.Option value="Quito">Quito</Select.Option>
                                    <Select.Option value="Santo Domingo">Santo Domingo</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                label="Telefono"
                                rules={[{required: true, message: 'Por favor, ingrese su número telefónico.'}]}
                            >
                                <Input style={{width: '100%'}}/>
                            </Form.Item>
                            <Divider orientation="center">Información laboral</Divider>
                            <Form.Item
                                className="opcSelect"
                                label={
                                    <span>
                                        Perfil Público&nbsp;
                                        <Tooltip title="¿Deseas que los clientes puedan encontrar tu perfil en las busquedas?">
                                            <QuestionCircleOutlined />
                                        </Tooltip>
                                    </span>
                                }
                                name='visible'
                            >
                                <Select>
                                    <Select.Option value="true">Si</Select.Option>
                                    <Select.Option value="false">No</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                className="opcSelect"
                                label={
                                    <span>
                                        Área laboral&nbsp;
                                        <Tooltip title="Escoge una de las opciones para que los clientes puedan encontrarte más rápido">
                                            <QuestionCircleOutlined />
                                        </Tooltip>
                                    </span>
                                }
                                name='area'
                            >
                                <Select>
                                    <Select.Option value="Albañileria">Albañilería</Select.Option>
                                    <Select.Option value="Carpinteria">Carpintería</Select.Option>
                                    <Select.Option value="Cerrajeria">Cerrajería</Select.Option>
                                    <Select.Option value="Electricidad">Electricidad</Select.Option>
                                    <Select.Option value="Electrodomésticos">Electrodomésticos</Select.Option>
                                    <Select.Option value="Electronica">Electrónica</Select.Option>
                                    <Select.Option value="Fontaneria">Fontanería</Select.Option>
                                    <Select.Option value="Mecánica">Mecánica</Select.Option>
                                    <Select.Option value="Pintura">Pintura</Select.Option>
                                    <Select.Option value="Radiotecnia">Radiotécnia</Select.Option>
                                    <Select.Option value="Soldadura">Soldadura</Select.Option>
                                </Select>
                            </Form.Item>
                            <Button type="primary" htmlType="submit">REGISTRAR</Button>
                        </Form>

                    </Col>
                </Row>
            </div>
        </>
    )
};

export default Register;