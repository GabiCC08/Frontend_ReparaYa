import React from "react";
import {Button, Card, Carousel, Col, Form, Input, Layout, message, Row} from "antd";
import imgInicio from "../images/imgInicio.svg";
import feliz from "../images/feliz.png";
import busca from "../images/busca.png";
import tiempo from "../images/tiempo.png";
import veloz from "../images/veloz.png";
import lugar from "../images/lugar.png";
import salud from "../images/salud.png";
import logo from "../images/logo-saturated.png";
import epn from "../images/logo_epn.svg";
import help from "../images/settings.png";
import study from "../images/busy.png";
import FIREBASE from "../firebase";

const {Content} = Layout;

const HomeContent = () => {

    const handleSubmit= async (values)=>{
        console.log('datos de la base de Datos')
        await FIREBASE.db.ref('mailbox').push(values);
        message.success('Los datos se guardaron correctamente');
    }

    return (
        <Content>
            <div className="site-layout-content">

                <div className='section'>
                    <Row align="middle">
                        <Col span={12}>

                            <div style={{margin: '10%'}}>
                                <h1 id='bnv'>¡Te damos la bienvenida a la mejor comunidad laboral del Ecuador!</h1>

                                <Card id='cardInicio'>
                                    <Row justify="space-around">
                                        <Col span={12}>
                                            <div>
                                                <h3>¿Buscas Empleo?</h3>
                                                <p>Consulta las demandas de nuestros clientes.</p>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div>
                                                <h3>¿Necesitas Ayuda?</h3>
                                                <p>Consulta los perfiles de nuestros profesionales.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row justify="center">
                                        <Button type="primary">REGISTRATE</Button>
                                    </Row>

                                </Card>
                            </div>


                        </Col>
                        <Col span={12}>
                            <img id='imgAgreement' src={imgInicio} alt='UNA GRAN COMUNIDAD LABORAL'/>
                        </Col>
                    </Row>
                </div>

                <div className='section'>
                    <Carousel autoplay effect="fade">
                        <div className='contentStyle' id='crs1'>
                            <h2 className="title-Crs text-Crs" >¿NECESITAS CONTRATAR PERSONAL CUALIFICADO?</h2>
                            <Row justify="space-around" align="middle">
                                <Col>
                                    <img className='crsLogo' src={help} alt=""/>
                                </Col>
                                <Col>
                                    <h3 className="description-Crs text-Crs">¿Tienes problemas con tus electrodomésticos?<br/>
                                        ¿Quieres dar mantenimiento a tu hogar?<br/>
                                        Aquí encontraras al mejor profesional<br/>
                                        Únete a nuestra comunidad</h3>
                                </Col>
                            </Row>
                        </div>
                        <div className='contentStyle' id='crs2'>
                            <h2 className="title-Crs text-Crs" >TESTIMONIO</h2>
                            <Row justify="space-around" align="middle">
                                <Col>
                                    <img className='imgCrs'
                                         src='https://images.unsplash.com/photo-1587403655231-b1734312903f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                                         alt='USER'/>
                                </Col>
                                <Col>
                                    <h3 className="description-Crs text-Crs">
                                        "Soy Carmen, usuario de esta plataforma, hace unas semanas
                                        necesitaba con urgencia contratar pintores, publique mis
                                        requerimientos e inmediatamente recibí asistencia
                                        profesional.<br/>
                                        Reparaya facilita muchísimo las contrataciones laborales"
                                    </h3>
                                </Col>
                            </Row>

                        </div>
                        <div className='contentStyle' id='crs3'>

                            <h2 className="title-Crs text-Crs" >¿NO ENCUENTRAS TRABAJO?</h2>
                            <Row justify="space-around" align="middle">
                                <Col>
                                    <img className='crsLogo' src={study} alt=""/>
                                </Col>
                                <Col>
                                    <h3 className="description-Crs text-Crs">¿No cuentas con estudios universitarios?<br/>
                                        Comparte tu perfil laboral aquí, encontraremos un empleo acorde
                                        a tus habilidades<br/>
                                        Únete a nuestra comunidad!</h3>
                                </Col>
                            </Row>
                        </div>
                        <div className='contentStyle' id='crs4'>
                            <h2 className="title-Crs text-Crs" >TESTIMONIO</h2>
                            <Row justify="space-around" align="middle">
                                <Col>
                                    <img className='imgCrs'
                                         src='https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                                         alt='USER'/>
                                </Col>
                                <Col>
                                    <h3 className="description-Crs text-Crs">
                                        "Mi nombre es Diego y me dedico al oficio de la
                                        carpintería.<br/>
                                        Empece a usar esta página hace unos meses y definitivamente
                                        me ha ayudado a llegar a más clientes con mucha más facilidad.
                                        Cuento con un pequeño taller y trabajo de la mano con esta
                                        plataforma.<br/>
                                        Es muy fácil de usar, la recomiendo."
                                    </h3>
                                </Col>
                            </Row>
                        </div>
                    </Carousel>
                </div>

                <div className='section' id='publi'>
                    <h1>¿QUÉ TE OFRECEMOS?</h1>
                    <Row gutter={[8, 8]} justify="space-between" align="middle">
                        <Col >
                            <div className="infoList">
                                <img className='icons' src={feliz} alt='icon1'/>
                                <div>
                                    <h3>Haz a lo que te gusta y mejor sabes hacer</h3>
                                    <span>Recibe ofertas laborales acordes a tus habilidades y experiencias.</span><br/>
                                    <span>Tú escoges los trabajos más acordes a tu perfil laboral.</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="infoList">
                                <img className='icons' src={lugar} alt='icon5'/>
                                <div >
                                    <h3>Define tu sector geográfico de trabajo</h3>
                                    <span>Recibe ofertas laborales de tus alrededores.</span><br/>
                                    <span>Busca trabajos cercanos a tu residencia.</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="infoList">
                                <img className='icons' src={tiempo} alt='icon3'/>
                                <div>
                                    <h3>Administra el tiempo de tus actividades laborales</h3>
                                    <span>Busca ofertas laborales cuando lo necesites.</span><br/>
                                    <span>Tú marcas tu propia agenda.</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="infoList">
                                <img className='icons' src={veloz} alt='icon4'/>
                                <div>
                                    <h3>Asistencia inmediata</h3>
                                    <span>Especifica la ubicación donde necesitas ayuda.</span><br/>
                                    <span>Recibe solicitudes de profesionales cercanos al sector.</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="infoList">
                                <img className='icons' src={busca} alt='icon2'/>
                                <div>
                                    <h3>Selecciona el profesional más adecuado para ti</h3>
                                    <span>Busca rápidamente personal cualificado por especialidad.</span><br/>
                                    <span>Puedes verificar sus experiencias laborales.</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="infoList">
                                <img className='icons' src={salud} alt='icon6'/>
                                <div>
                                    <h3>Disminuye la posibilidad de contraer COVID-19</h3>
                                    <span>Realiza las contrataciones online o por llamada telefónica.</span><br/>
                                    <span>No hay necesidad de movilizarse en busca de ayuda profesional.</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className='section' id='acerca'>
                    <h1>CONÓCENOS</h1>

                    <Card id='cardAcerca' bordered={false}>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-around">
                            <Col>
                                <div className="contact-info">
                                    <img className='logoAbout' src={logo} alt='LOGO'/>
                                    <h2>REPARAYA</h2>
                                    <p> ReparaYa es una herramienta digital dirigida a los ecuatorianos
                                        que agiliza el primero contacto de una contratación laboral.<br/>
                                        Nuestro objetivo es ofrecer experiencias memorables a nuestros usuarios.
                                        Es por eso que: ponemos a disposición de la sociedad el mejor canal de
                                        comunicación laboral del Ecuador.</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="contact-info">
                                    <img className='logoAbout' src={epn} alt='EPN'/>
                                    <h2>EL EQUIPO</h2>
                                    <p> ReparaYa nació como un proyecto universitario dirigido a los ecuatorianos
                                        que no cuentan con títulos de tercer nivel y que además, con la pandemia
                                        por COVID-19 se les dificulta aún más conseguir un empleo.<br/>
                                        La idea nació de estudiantes de la Escuela Politécnica Nacional.<br/>
                                        Trabajamos para obtener los mejores resultados de este proyecto.</p>
                                </div>
                            </Col>
                        </Row>
                    </Card>


                </div>

                <div className='section' id='contac'>
                    <h1 id='hFrm' style={{textAlign: 'Center'}}>CONTÁCTANOS</h1>
                    <Form onFinish={handleSubmit}>
                        <Row>
                            <Col span={12} style={{margin: 'auto'}}>
                                <Form.Item name={['name']} label="Nombre Completo"
                                           rules={[{required: true, message: 'Por favor, ingresa tu nombre completo.'}]}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item name={['email']} label="Correo Electrónico"
                                           rules={[{
                                               type: 'email',
                                               required: true,
                                               message: 'Por favor, ingresa tu correo electrónico.'
                                           }]}>
                                    <Input/>
                                </Form.Item>

                                <Form.Item
                                    name="phone"
                                    label="Telefono"
                                    rules={[{ required: true, message: 'Por favor, ingrese su número telefónico.' }]}
                                >
                                    <Input  style={{ width: '100%' }} />
                                </Form.Item>

                                <Form.Item name={['city']} label="Ciudad"
                                           rules={ [
                                               {
                                                   required: true
                                               }
                                           ] }
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item name={['affair']} label="Asunto"
                                           rules={[{required: true, message: 'Por favor, llena el campo de texto.'}]}>
                                    <Input.TextArea/>
                                </Form.Item>
                                <Form.Item wrapperCol={{offset: 8}}>
                                    <Button type="primary" htmlType="submit">
                                        ENVIAR
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>

            </div>
        </Content>

    );

};
export default HomeContent;