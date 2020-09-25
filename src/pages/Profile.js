import React, {useEffect, useState} from "react";
import {Layout, Row, Col, Descriptions, Image} from 'antd';
import {} from '@ant-design/icons';
import SearchHeader from "../components/SearchHeader";
import ejemplo from '../images/gabi.jpg'
import FIREBASE from "../firebase";


const Profile = () => {

    const [user, setUser] = useState("");
    const [id, setId] = useState("");


    useEffect(() => {
        const getUser = async () => {
            await FIREBASE.db.ref(`user/${id}`).once('value').then(function (snapshot) {
                console.log("Datos del snapshot",snapshot.val());
                setUser(snapshot.val());
            })
        };
        getUser();
    }, [id]);


    useEffect(()=>{
        const getId = async () => {
            const user = await FIREBASE.auth.currentUser;
            if (user != null) {
                const aux= (user.uid);
                console.log("Id(current):",aux);
                setId(aux);
            }
        }
        getId();
    },[]);

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
                    </Descriptions>
                </Row>
            </Layout>
        </>
    );
}
export default Profile;