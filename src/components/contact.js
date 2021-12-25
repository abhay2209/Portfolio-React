import React, {Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl' ;

class Contact extends Component {
    render() {
        return(
            <div className= "contact-body">
                <Grid className="contact-grid">
                    <Cell col ={6}><h2>Abhay Jolly</h2>
                    <img src = {require("../profile.jpg")} alt="avatar" style={{height: '20rem'}}/>
                    <p style={{width: '75%', margin: 'auto', paddingTop:'1rem'}}>This will be about me. I will keep this updated every semester. I am keeping this updated </p>

                    </Cell>
                    <Cell col ={6}><h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '4rem', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>778 792 8366</ListItemContent> 
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '4rem', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope-square" aria-hidden="true"/>ajolly@sfu.ca</ListItemContent> 
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '4rem', fontFamily: 'Anton'}}>
                                <i className="fa fa-home" aria-hidden="true"/>822 Sperling Ave</ListItemContent> 
                        </ListItem>
                        

                        
                    </List>
                    </div>
                    </Cell>
                    </Grid>            </div>
        )
    }
}
export default Contact;