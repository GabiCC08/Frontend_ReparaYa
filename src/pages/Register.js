import React from 'react';
import SimpleHeader from "../components/SimpleHeader";
import {Form, Input, Select, Button, message, Row, Col, Divider} from "antd";
import '../styles/Register.less';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons/lib';
import FIREBASE from "../firebase";


const Register = () => {

    // const normFile = e => {
    //     console.log('Upload event:', e);
    //     if (Array.isArray(e)) {
    //         return e;
    //     }
    //     return e && e.fileList;
    // };

    const handleSubmit = async (values) => {
        console.log('form', values);

        // const image = values.foto[0].originFileObj;
        // const uploadSnapshot = await FIREBASE.storage.ref('animals/' + values.foto[0].name + '_ ' + Date.now()).put(image);
        // const imageURL = await uploadSnapshot.ref.getDownloadURL();
        // console.log(imageURL);

        await FIREBASE.db.ref('user').push({
            ...values,
            // foto: imageURL
        });
        message.success('Los datos se ingresaron correctamente.');
    }

    return (
        <>
            <SimpleHeader/>
            <div className='section' id='imgRegister'>
                <h1 id='hFrm'>FORMULARIO DE REGISTRO</h1>
                <Row>
                    <Col span={14} style={{margin: 'auto'}}>

                        <Divider orientation="center">Información de autenticación</Divider>
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
                            label='Contraseña'
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, ingresa una contraseña.'
                                }
                            ]}>
                            <Input.Password placeholder="Contraseña"/>
                        </Form.Item>
                        <Form.Item
                            label='Confirmar contraseña'
                            name="password2"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, ingresa la contraseña.'
                                }
                            ]}>
                            <Input.Password placeholder="Contraseña"/>
                        </Form.Item>

                        <Button>VERIFICAR</Button>

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