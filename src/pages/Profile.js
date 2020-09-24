import React, {useEffect, useState} from "react";
import {Layout, Row, Col, Descriptions, Image} from 'antd';
import {} from '@ant-design/icons';
import SearchHeader from "../components/SearchHeader";
import ejemplo from '../images/gabi.jpg'
import FIREBASE from "../firebase";


const Profile = () => {

    const [user, setUser] = useState("");

    useEffect(() => {
        const getUser = async () => {
            await FIREBASE.db.ref(`user/xoN2MKVkthVi9OYGlzrQTPBQMXD3`).once('value').then(function (snapshot) {
                setUser(snapshot.val()) ;
                console.log(user)
            })
        };
        getUser();

    }, []);

    return (
        <>
            <SearchHeader/>
            <Layout>
                <Row>
                    <Col>
                        <div>
                            <Image src={ejemplo} alt="USER" width={140}/>
                        </div>
                    </Col>
                    <Col>
                        <h2>{user.name} {user.lastname}</h2>
                    </Col>
                </Row>
                <Row>
                    <Descriptions title="User Info">
                        <Descriptions.Item label="Nombre">{user.name}</Descriptions.Item>
                        <Descriptions.Item label="Apellido">{user.lastname}</Descriptions.Item>
                        <Descriptions.Item label="Ciudad">{user.city}</Descriptions.Item>
                        <Descriptions.Item label="Remark">empty</Descriptions.Item>
                        <Descriptions.Item label="Address">
                            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                        </Descriptions.Item>
                    </Descriptions>
                </Row>
            </Layout>
        </>
    );
}
export default Profile;