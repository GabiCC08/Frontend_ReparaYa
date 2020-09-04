import React, {useState} from 'react';
import {Card, Form, Input, Button, Checkbox, Layout,Modal} from "antd";
import SimpleHeader from "../components/SimpleHeader";

const {} = Layout;

const Login = () => {
const [web, setWeb] = useState(false);

const showModal = () => {
    setWeb(true);
}
 return(
    <>
        <Layout className="layout">
            <SimpleHeader/>

        </Layout>
    </>
 );
};

export default Login;