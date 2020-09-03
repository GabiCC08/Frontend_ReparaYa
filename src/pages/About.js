import React from 'react';
import {Layout,Divider} from "antd";
import SimpleHeader from "../components/SimpleHeader";

const {Content} = Layout;

const About = () => (
    <>
        <Layout className="layout">
            <SimpleHeader/>
            <Content>
                <div className="site-layout-content">

                    <Divider>MISIÓN</Divider>
                    <p>
                        ...
                    </p>
                    <Divider>VISIÓN</Divider>
                    <p>
                        ...
                    </p><Divider>¿QUÉ ES REPARAYA?</Divider>
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
                    </p><Divider>SOBRE NOSOTROS</Divider>
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
                </div>
            </Content>
        </Layout>
    </>
);

export default About;