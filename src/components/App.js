import React from 'react';
import '../styles/App.less';
import {Layout} from "antd";
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
