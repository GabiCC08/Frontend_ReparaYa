import React from "react";
import {Col, Row, Typography} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import GeneralFooter from "../components/GeneralFooter";
import SimpleHeader from "../components/SimpleHeader";
import developer2 from "../images/gabi.jpg";
const { Text} = Typography;

const Profile = () => {
        return (
            <>
            <SimpleHeader/>
            <Row>
                <Col span={24}>
                    <img className="portada" src='https://medioambienteynaturaleza.com/wp-content/uploads/2015/08/Fondos-de-pantalla-de-naturaleza-ac.jpg' />
                </Col>
            </Row>
                <Row>
                    <Col span={12}>
                        <img className="us" src={developer2} />
                        <Text type="secondary">Gabriela Cola<br/>gabriela.cola@epn.edu.ec</Text>
                    </Col>

                </Row>

            </>
        );
}
export default Profile;