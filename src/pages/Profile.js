import React from "react";
import {Layout, Row, Col, Descriptions, Image} from 'antd';
import {} from '@ant-design/icons';
import SearchHeader from "../components/SearchHeader";
import ejemplo from '../images/gabi.jpg'


const Profile = () => {

    return (
        <>
            <SearchHeader/>
            <Layout>
                <Row>
                    <Col>
                        <div>
                            <Image src={ejemplo} alt="USER" width={140}/>
                        </div>
                        <div>
                            <Descriptions title="User Info">
                                <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                                <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                                <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                                <Descriptions.Item label="Remark">empty</Descriptions.Item>
                                <Descriptions.Item label="Address">
                                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                                </Descriptions.Item>
                            </Descriptions>,
                        </div>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Layout>
        </>
    );
}
export default Profile;