import React, {Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl' ;

class Contact extends Component {
    render() {
        return(
            <div className= "contact-body">
                <Grid className="contact-grid">
                    <Cell col ={6}><h2 className="contact-heading">Abhay Jolly</h2>
                    <img src = {require("../profile.jpg")} alt="avatar" className="avatar-image"/>
                    <p className="contact-des">I am currently looking for Software development oppurtunities where I can learn and grow more amongst experienced mentors</p>

                    </Cell>
                    <Cell col ={6}><h2 className="contact-heading">CONTACT ME</h2>
                    <hr/>
                
                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent className='contact-info'>
                                <i className="fa fa-phone-square" aria-hidden="true"/>+1 778 792 8366</ListItemContent> 
                        </ListItem>
                        <ListItem>
                            <ListItemContent className='contact-info'>
                                <i className="fa fa-envelope-square" aria-hidden="true"/>ajolly@sfu.ca</ListItemContent> 
                        </ListItem>
                        <ListItem>
                            <ListItemContent className='contact-info'>
                                <i className="fa fa-home" aria-hidden="true"/>Burnaby, BC</ListItemContent> 
                        </ListItem>
        
                        
                    </List>
                    </div>
                    </Cell>
                    </Grid>            
                </div>
        )
    }
}
export default Contact;