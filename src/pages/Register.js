import React, {useState} from 'react';
import SimpleHeader from "../components/SimpleHeader";
import {Form, Input, Select, Button, message, Row, Col, Divider} from "antd";
import '../styles/Register.less';
import FIREBASE from "../firebase";


const Register = () => {

    const [id, setId] = useState("");


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

    const getId= async () => {
        const user = await FIREBASE.auth.currentUser;
        if (user != null) {
            const aux= (user.uid);
            setId(aux);
        }
    }

    const handleSubmit = async ( values) => {
        getId();
        console.log("valid_ID:", id)
        console.log('formData:', values);

        await FIREBASE.db.ref(`user/${id}`).set({
            ...values,
        });
        message.success('Registro exitoso');
    }

    return (
        <>
            <SimpleHeader/>
            <div className='section' id='imgRegister'>
                <h1 id='hFrm'>FORMULARIO DE REGISTRO</h1>
                <Row>
                    <Col span={14} style={{margin: 'auto'}}>

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
                                <Input placeholder="Correo Electrónico"/>
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
                                <Input.Password/>
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
                                <Input.Password/>
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
                                <Select>
                                    <Select.Option value="quito">Quito</Select.Option>
                                    <Select.Option value="guayaquil">Guayaquil</Select.Option>
                                    <Select.Option value="cuenca">Cuenca</Select.Option>
                                    <Select.Option value="ambato">Ambayo</Select.Option>
                                    <Select.Option value="imbabura">Imbabura</Select.Option>
                                    <Select.Option value="machala">Machala</Select.Option>
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
                                label='Area Laboral'
                                name='area'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Escoga el area de trabajo'
                                    }
                                ]}
                            >
                                <Select>
                                    <Select.Option value="mecanico">Mecanica</Select.Option>
                                    <Select.Option value="electricista">Electricidad</Select.Option>
                                    <Select.Option value="carpinteria">Carpinteria</Select.Option>
                                    <Select.Option value="plomeria">Plomeria</Select.Option>
                                    <Select.Option value="electrodocmesticos">Electrodomesticos</Select.Option>
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