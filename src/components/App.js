import React from 'react';
import '../styles/App.less';
import {Layout} from "antd";
import HomeHeader from "./HomeHeader";
import HomeContent from "./HomeContent";
import Footer from "./GeneralFooter";
import AppRouter from "../routers/AppRouter";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
      <Router>
        <Layout className="layout">
          <AppRouter/>
        </Layout>
      </Router>
  );
}

export default App;
