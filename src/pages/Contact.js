import React from 'react';
import SimpleHeader from "../components/SimpleHeader";
import {Button, Col, Form, Input, Row} from "antd";
import telefono from "../images/telefono.png";
import ubicacion from "../images/ubicacion.png";
import mensajes from "../images/mensajes.png";

const Contact = () => (
    <div>
        <SimpleHeader/>
        <div className='section' id='Contact-Form'>
            <h1 id='hFrm' style={{textAlign: 'Center'}}>CONTÁCTANOS</h1>
            <div id='content-parra'>
                <p style={{margin:'0px'}}>
                    Bienvenido a nuestro sitio web. Estamos contentos de atender tu requerimiento.
                </p>
                <p>
                    Tu dirección de correo electrónico no será publicada. Los campos obligatorios están marcados.
                </p>
            </div>
            <Form>
                <Row>
                    <Col span={15} className='contact-id'>
                        <Form.Item  name={['user', 'Name']} label="Nombre Completo"
                                    rules={[{required: true, message: 'Por favor, ingresa tu nombre completo.'}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name={['user', 'Email']} label="Correo Electrónico"
                                   rules={[{type: 'email', required: true, message: 'Por favor, ingresa tu correo electrónico.'}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name={['user', 'Number']} label="Número de teléfono"
                                   rules={[{type: 'number', required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name={['user', 'city']} label="Ciudad"
                                   rules={[{type: 'city', required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name={['user', 'Asunto']} label="Asunto" rules={[{required: true, message: 'Por favor, llena el campo de texto.'}]}>
                            <Input.TextArea/>
                        </Form.Item>
                        <Form.Item wrapperCol={{offset: 8}}>
                            <Button type="primary" htmlType="submit" style={{float:'rigth'}}>
                                ENVIAR
                            </Button>
                        </Form.Item>
                    </Col>
                    <Col span={7} className='contact-ico' >
                        <div>
                            <Row gutter={[16, 16]} justify="center" align='middle' style={{display:'inline-block'}}>
                                <Col spa={4}><img className='icons' style={{width: '30px'}} src={telefono} alt='icon1'/> +593 998783721 </Col>
                                <Col spa={4}><img className='icons' style={{width: '30px'}} src={mensajes} alt='icon2'/> repaya20coopor@gmail.com</Col>
                                <Col spa={4}><img className='icons' style={{width: '30px'}} src={ubicacion} alt='icon3'/> Av. Ladrón de Guevara 253, Quito 170517
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Form>

        </div>
    </div>
);

export default Contact;