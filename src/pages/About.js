import React from 'react';
import '../styles/About.less';
import mision from '../images/mision.svg'
import vision from '../images/vision.svg'
import reparaya from '../images/about.svg'
import developer1 from '../images/jona.jpg'
import developer2 from '../images/gabi.jpg'
import esfot from '../images/logo_esfot.png'
import {Layout, Divider,Row,Col, Typography} from "antd";
import SimpleHeader from "../components/SimpleHeader";

const {Content} = Layout;
const { Text} = Typography;


const About = () => (
    <>
        <Layout className="layout">
            <SimpleHeader/>
            <Content>
                <div className="site-layout-content" id="about-content">
                    <h1>ACERCA DE</h1>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={12}>
                            <img src={reparaya} alt="reparaya" id="about-icon1" />
                            <Divider><h2>REPARAYA</h2></Divider>
                            <p>
                                ReparaYa es una herramienta digital dirigida a trabajadores
                                y clientes, esta organización crece con la participación de todos los
                                ecuatorianos, elemento clave de nuestro desarrollo.<br/>
                                Nuestro objetivo es ofrecer experiencias memorables al trabajador, que
                                consecutivamente con su compromiso y profesionalismo es capaz de
                                impactar positivamente en la experiencia del cliente. Es por eso que:
                                ponemos a disposición de la sociedad el mejor canal de comunicación
                                laboral del Ecuador.<br/>
                                La retroalimentación y el reconocimiento continuo entre ustedes y
                                nosotros apoyan nuestra motivación y compromiso con la plataforma.
                            </p>
                        </Col>
                        <Col span={12}>
                            <img src={mision} alt="MISION" className="about-icon" />
                            <Divider><h2>MISIÓN</h2></Divider>
                            <p>
                                Proveer a nuestros usuarios una herramienta web que facilite la contratación laboral,
                                proporcionando oportunidades de trabajo a los ecuatorianos desempleados.<br/>
                                Nos esforzamos por presentar una plataforma funcional que satisfaga las necesidades de
                                nuestra comunidad.<br/>
                            </p>
                            <img src={vision} alt="VISION" className="about-icon" />
                            <Divider><h2>VISIÓN</h2></Divider>
                            <p>
                                Convertirnos en la red laboral preferida de los ecuatorianos.<br/>
                            </p>
                        </Col>
                    </Row>
                    <br/><img src={esfot} alt="ESFOT" id="esfot-icon" />
                    <Divider><h2>SOBRE NOSOTROS</h2></Divider>
                    <p>
                        ReparaYa nació como un proyecto universitario dirigido a los ecuatorianos
                        que no cuentan con títulos de tercer nivel y que además, con la pandemia
                        por COVID-19 se les dificulta aún más conseguir un empleo.<br/>
                        La idea, como tal, fue de Jonathan Alquinga y Gabriela Cola,
                        estudiantes de la Tecnología Superior en Desarrollo de Software de la
                        Escuela Politécnica Nacional (EPN), y ha ido tomando forma en la catedra de
                        Diseño de Interfaces, impartida por el profesor Edwin Salvador. <br/>
                        Trabajamos para obtener los mejores resultados de este proyecto.
                    </p>
                    <Row justify="center">
                        <Col>
                            <img className="us" src={developer1}  alt=""/>
                            <Text type="secondary">Jonathan Alquinga<br/>jonathan.alquinga@epn.edu.ec</Text>
                        </Col>
                        <Col>
                            <img className="us" src={developer2}  alt=""/>
                            <Text type="secondary">Gabriela Cola<br/>gabriela.cola@epn.edu.ec</Text>
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    </>
);

export default About;