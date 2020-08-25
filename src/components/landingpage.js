import React, {Component } from 'react';
import {Grid, Cell} from 'react-mdl'
class Landing extends Component {
    render() {
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img 
                    src = {require("../AbhayJolly.jpg")}
                
                    alt="avatar"
                    className="avatar-img"/>
                    
                    <div className="banner-text">
                            <h1>Abhay Jolly</h1>
                            <hr/>
                            <p> C++ | Python | C | JavaScript | NodeJS | React | SQL | Express | HTML/CSS </p>
                            <div class ="social-links">
                                <a href ="https://www.linkedin.com/in/abhay-jolly-585b49196/" target="_blank" rel="noopener noreferrer">
                                    <i class ="fa fa-linkedin-square"  aria-hidden="true"></i>
                                </a>
                                <a href ="https://github.com/abhay2209" target="_blank" rel="noopener noreferrer">
                                    <i class ="fa fa-github-square"  aria-hidden="true"></i>
                                </a>

                            </div>
                    </div>
                    </Cell>
                </Grid>
                </div>
        )
    }
}
export default Landing;