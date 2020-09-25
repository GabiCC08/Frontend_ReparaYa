import React, {useEffect, useState} from "react";
import {Layout, Row, Col, Button, Image,Typography} from 'antd';
import {} from '@ant-design/icons';
import SearchHeader from "../components/SearchHeader";
import ejemplo from '../images/profile.png'
import FIREBASE from "../firebase";
import '../styles/Profile.less'
const { Text} = Typography;

const Profile = () => {

    const [user, setUser] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");


    // useEffect(() => {
    //     const getUser = async () => {
    //         await FIREBASE.db.ref(`user/${id}`).once('value').then(function (snapshot) {
    //             console.log("Datos del snapshot",snapshot.val());
    //             setUser(snapshot.val());
    //         })
    //     };
    //     getUser();
    // }, [id]);


    useEffect(()=>{
        const getInfo = async () => {
            const user = await FIREBASE.auth.currentUser;
            if (user != null) {
                console.log("Id(current):",user.uid);
                setId(user.uid);
                setEmail(user.email);
            }
        }
        getInfo();
        const getUser = async () => {
            await FIREBASE.db.ref(`user/${id}`).once('value').then(function (snapshot) {
                console.log("Datos del snapshot",snapshot.val());
                setUser(snapshot.val());
            })
        };
        getUser();
    },[user]);

    return (
        <>
            <SearchHeader/>
            <Layout id="profileContent">
                <Row gutter={[8, 8]}>
                    <Col span={8}><Image src={ejemplo} alt="USER" width={140}/></Col>
                    <Col span={16}><Button type="primary" >PUBLICAR</Button></Col>
                </Row>
                <Row gutter={[8, 8]}>
                    <Col span={8}>
                        <h2>{user.name} {user.lastname}</h2>
                        <Text strong>{user.area}</Text><br/>
                        <Text type="secondary">{user.city}</Text><br/><br/>
                        <h3>Informacion de contacto</h3>
                            <Text strong>Correo electrónico:  </Text>
                            <Text>{email}</Text><br/>
                            <Text strong>Teléfono:  </Text>
                            <Text>{user.phone}</Text><br/>

                    </Col>
                    <Col span={16}>
                        <div id="publications">
                            <Text disabled>PUBLICACIONES</Text>
                        </div>
                    </Col>
                </Row>
            </Layout>
        </>
    );
}
export default Profile;