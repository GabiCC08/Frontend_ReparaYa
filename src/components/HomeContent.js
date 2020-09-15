import React from "react";
import {Button, Card, Carousel, Col, Form, Input, Layout, Row} from "antd";
import imgInicio from "../images/imgInicio.svg";
import feliz from "../images/feliz.png";
import busca from "../images/busca.png";
import tiempo from "../images/tiempo.png";
import veloz from "../images/veloz.png";
import lugar from "../images/lugar.png";
import salud from "../images/salud.png";
import logo from "../images/logo-saturated.png";
import epn from "../images/logo_epn.svg";
import AppRouter from "../routers/AppRouter";
import Footer from "./GeneralFooter";
import GeneralFooter from "./GeneralFooter";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";

const { Content} = Layout;

const HomeContent = () =>{
    return(
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
                                                <h3>¿Buscas Empleo?</h3>
                                                <p>Consulta las demandas de nuestros clientes.</p>
                                            </Col>
                                            <Col span={12}>
                                                <h3>¿Necesitas Ayuda?</h3>
                                                <p>Consulta los perfiles de nuestros profesionales.</p>
                                            </Col>
                                        </Row>
                                        <div id='btnReg'>
                                            <Link to={Routes.REGISTER}><Button type="primary">REGISTRATE</Button></Link>
                                        </div>

                                    </Card>
                                </div>


                            </Col>
                            <Col span={12}>
                                <img id='imgI' src={imgInicio} alt='UNA GRAN COMUNIDAD LABORAL'/>
                            </Col>
                        </Row>
                    </div>

                    <div className='section'>
                        <Carousel autoplay effect="fade">
                            <div className='contentStyle' id='crs1'>
                                <div className="site-card-wrapper">
                                    <Row>
                                        <Col span={4}/>
                                        <Col span={16}>
                                            <Card className='card-Crs' title="¿NECESITAS CONTRATAR PERSONAL CUALIFICADO?" bordered={false}>
                                                <p>
                                                    ¿Tienes problemas con tus electrodomésticos?<br/>
                                                    ¿Quieres dar mantenimiento a tu hogar?<br/>
                                                    Aquí encontraras al mejor profesional<br/>
                                                    Únete a nuestra comunidad
                                                </p>
                                            </Card>

                                        </Col>
                                        <Col span={4}/>
                                    </Row>
                                </div>
                            </div>
                            <div className='contentStyle' id='crs2'>
                                <div className="site-card-wrapper">
                                    <Row>
                                        <Col span={4}/>
                                        <Col span={16}>
                                            <Card className='card-Crs' title="TESTIMONIO" bordered={false}>
                                                <Row>
                                                    <Col span={8}>
                                                        <img className='imgCrs' width={200} src='https://images.unsplash.com/photo-1587403655231-b1734312903f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' alt='USER'/>
                                                    </Col>
                                                    <Col span={16}>
                                                        <p>
                                                            "Soy Carmen, usuario de esta estupenda plataforma,
                                                            hace unas semanas necesitaba con urgencia ayuda de pintores y
                                                            electricistas para arreglar mi nuevo local, publique mis requerimientos
                                                            e inmediatamente recibí notificaciones de varios trabajadores que
                                                            estaban interesadas en ayudarme. Sentí seguridad al poder comprobar sus
                                                            experiencias laborales. Reparaya sin dudarlo facilita mucho el tema de contrataciones"
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                        <Col span={4}/>
                                    </Row>
                                </div>
                            </div>
                            <div className='contentStyle' id='crs3'>
                                <div className="site-card-wrapper">
                                    <Row>
                                        <Col span={4}/>
                                        <Col span={16}>
                                            <Card className='card-Crs'
                                                  title="¿NO ENCUENTRAS TRABAJO?"
                                                  bordered={false}>
                                                <p>
                                                    ¿No cuentas con estudios universitarios?<br/>
                                                    Comparte tu perfil laboral aquí, encontraremos un empleo acorde
                                                    a tus habilidades<br/>
                                                    únete a nuestra comunidad!
                                                </p>
                                            </Card>

                                        </Col>
                                        <Col span={4}/>
                                    </Row>
                                </div>
                            </div>
                            <div className='contentStyle' id='crs4'>
                                <div className="site-card-wrapper">
                                    <Row>
                                        <Col span={4}/>
                                        <Col span={16}>
                                            <Card className='card-Crs' title="TESTIMONIO" bordered={false}>
                                                <Row>
                                                    <Col span={8}>
                                                        <img className='imgCrs' width={200}
                                                             src='https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' alt='USER'/>
                                                    </Col>
                                                    <Col span={16}>
                                                        <p>
                                                            "Mi nombre es Diego, vivo en Ambato y soy carpintero de profesión.
                                                            Conocí esta página hace unos meses, por recomendación de algunos colegas
                                                            y definitivamente me ha ayudado a llegar a más clientes con mucha
                                                            más facilidad. Recientemente emprendí un pequeño taller y trabajo de la mano
                                                            con esta plataforma. Es muy fácil de usar, la recomiendo."
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                        <Col span={4}/>
                                    </Row>
                                </div>
                            </div>
                        </Carousel>
                    </div>

                    <div className='section' id='publi'>
                        <h1>¿QUÉ TE OFRECEMOS?</h1>
                        <div>
                            <Row gutter={[16, 16]} justify="center" align='middle'>
                                <Col spa={4}><img className='icons' src={feliz} alt='icon1'/></Col>
                                <Col span={8}>
                                    <h3>Haz a lo que te gusta y mejor sabes hacer</h3>
                                    <span>Recibe ofertas laborales acordes a tus habilidades y experiencias.</span><br/>
                                    <span>Tú escoges los trabajos más acordes a tu perfil laboral.</span>
                                </Col>
                                <Col spa={4}><img className='icons' src={busca} alt='icon2'/></Col>
                                <Col span={8}>
                                    <h3>Selecciona el profesional más adecuado para ti</h3>
                                    <span>Busca rápidamente personal cualificado por especialidad.</span><br/>
                                    <span>Puedes verificar sus experiencias laborales.</span>
                                </Col>
                            </Row>
                            <Row gutter={[16, 16]} justify="center" align='middle'>
                                <Col spa={4}><img className='icons' src={tiempo} alt='icon3'/></Col>
                                <Col span={8}>
                                    <h3>Administra el tiempo de tus actividades laborales</h3>
                                    <span>Busca ofertas laborales cuando lo necesites.</span><br/>
                                    <span>Tú marcas tu propia agenda.</span>
                                </Col>
                                <Col spa={4}><img className='icons' src={veloz} alt='icon4'/></Col>
                                <Col span={8}>
                                    <h3>Asistencia inmediata</h3>
                                    <span>Especifica la ubicación donde necesitas ayuda.</span><br/>
                                    <span>Recibe solicitudes de profesionales cercanos al sector.</span>
                                </Col>
                            </Row>
                            <Row gutter={[16, 16]} justify="center" align='middle'>
                                <Col spa={4}><img className='icons' src={lugar} alt='icon5'/></Col>
                                <Col span={8}>
                                    <h3>Define tu sector geográfico de trabajo</h3>
                                    <span>Recibe ofertas laborales de tus alrededores.</span><br/>
                                    <span>Busca trabajos cercanos a tu residencia.</span>
                                </Col>
                                <Col spa={4}><img className='icons' src={salud} alt='icon6'/></Col>
                                <Col span={8}>
                                    <h3>Disminuye la posibilidad de contraer COVID-19</h3>
                                    <span>Realiza las contrataciones online o por llamada telefónica.</span><br/>
                                    <span>No hay necesidad de movilizarse en busca de ayuda profesional.</span>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className='section' id='acerca'>
                        <h1>CONOCENOS</h1>

                        <Card id='cardAcerca' bordered={false}>
                            <Row gutter={64} justify="space-around">
                                <Col span={12}>
                                    <img className='logoAbout' src={logo} alt='LOGO'/>
                                    <h2>REPARAYA</h2>
                                    <p> ReparaYa es una herramienta digital dirigida a trabajadores
                                        y clientes, esta organización crece con la participación de todos los
                                        ecuatorianos, elemento clave de nuestro desarrollo.<br/>
                                        Nuestro objetivo es ofrecer experiencias memorables al trabajador, que
                                        consecutivamente con su compromiso y profesionalismo es capaz de
                                        impactar positivamente en la experiencia del cliente. Es por eso que:
                                        ponemos a disposición de la sociedad el mejor canal de comunicación
                                        laboral del Ecuador.<br/>
                                        La retroalimentación y el reconocimiento continuo entre ustedes y
                                        nosotros apoyan nuestra motivación y compromiso con la plataforma.</p>
                                </Col>
                                <Col span={12}>
                                    <img className='logoAbout' src={epn} alt='EPN'/>
                                    <h2>EL EQUIPO</h2>
                                    <p> ReparaYa nació como un proyecto universitario dirigido a los ecuatorianos
                                        que no cuentan con títulos de tercer nivel y que además, con la pandemia
                                        por COVID-19 se les dificulta aún más conseguir un empleo.<br/>
                                        La idea, como tal, se originó en un grupo de estudiantes de Tecnología
                                        Superior en Desarrollo de Software de la Escuela Politécnica Nacional,
                                        y fue tomando forma en la catedra de Diseño de Interfaces, impartida por
                                        el profesor Edwin Salvador. <br/>
                                        Trabajamos para obtener los mejores resultados de este proyecto.</p>
                                </Col>
                            </Row>
                        </Card>


                    </div>

                    <div className='section' id='contac'>
                        <h1 id='hFrm' style={{textAlign: 'Center'}}>CONTÁCTANOS</h1>
                        <Form>
                            <Row>
                                <Col span={12} style={{margin: 'auto'}}>
                                    <Form.Item  name={['user', 'Name']} label="Nombre Completo"
                                                rules={[{required: true}]}>
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item name={['user', 'Email']} label="Correo Electrónico"
                                               rules={[{type: 'email', required: true}]}>
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
                                    <Form.Item name={['user', 'Asunto']} label="Asunto" rules={[{required: true}]}>
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