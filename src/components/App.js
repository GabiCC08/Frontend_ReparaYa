import React, {useEffect} from 'react';
import '../styles/App.less';
import {Layout} from "antd";
import AppRouter from "../routers/AppRouter";
import FIREBASE from "../firebase";
import {useHistory} from 'react-router-dom'
import Routes from '../constants/routes'

function App() {

    const history = useHistory();

    useEffect(()=>{
        FIREBASE.auth.onAuthStateChanged(function (user){
            if (user){
                const uid= user.uid;
                // history.push(Routes.PROFILE)
                console.log("Sesion iniciada, ID:",uid)
            }else{
                console.log("Ninguna sesion iniciada")
                history.push(Routes.HOME)
            }
        })
    })
  return (

        <Layout className="layout">
          <AppRouter/>
        </Layout>
  );
}
export default App;
