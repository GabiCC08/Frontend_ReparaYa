import React from 'react';
import '../styles/App.less';
import {Layout} from "antd";
import HomeHeader from "./HomeHeader";
import HomeContent from "./HomeContent";
import Footer from "./GeneralFooter";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
      <Router>
        <Layout className="layout">
          <HomeHeader/>
          <HomeContent/>
          <Footer/>
        </Layout>
      </Router>
  );
}

export default App;
