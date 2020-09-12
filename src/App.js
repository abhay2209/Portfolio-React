import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';
import Radium from "radium";

const RadiatingLink = Radium(Link);  

function App() {

  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Title" scroll>
            <Navigation>
                <Link style={{ borderTopLeftRadius: '3rem',borderBottomLeftRadius: '3rem', background: "white", opacity: 0.7, color: 'black', fontWeight: "bold"}} to="/" className='navigation'>Home</Link>
                <Link to="/aboutme" style={{ background: "white", opacity: 0.7, color: 'black', fontWeight: "bold"}}>About Me</Link>
                <Link to="/project" style={{ background: "white", opacity: 0.7, color: 'black', fontWeight: "bold"}}>Projects</Link>
                <Link to="/contact" style={{ borderTopRightRadius: '3rem',borderBottomRightRadius: '3rem', background: "white", opacity: 0.7, color: 'black', fontWeight: "bold"}}>Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                
                <Link to="/aboutme">About Me</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact</Link>
               
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
