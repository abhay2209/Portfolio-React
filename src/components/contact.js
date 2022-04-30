import React, {Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Textfield, Button} from 'react-mdl' ;

class Contact extends Component {
    render() {
        return(
            <div className= "contact-body">
                <Grid className="contact-grid">
                    <Cell col ={6} hidePhone={true}><h2 className="contact-heading">Abhay Jolly</h2>
                    <img src = {require("../profile.jpg")} alt="avatar" className="avatar-image"/>
                    <p className="contact-des">I am currently looking for Software development oppurtunities where I can learn and grow more amongst experienced mentors</p>
                    <form name="Contact-form"  method="post">
                    <input type="hidden" name="form-name" value="contact" />
                        <Textfield onChange={() => {}} label="First name" name="firstName" floatingLabel style={{width: '200px'}}/>
                        <Textfield onChange={() => {}} label="Last name" name="lastName" floatingLabel style={{width: '200px'}}/>
                        <Textfield onChange={() => {}} label="Email" name="email" floatingLabel style={{width: '200px'}}/>
                        <Textfield onChange={() => {}} label="Message" name="message" floatingLabel style={{width: '200px'}} multiline rows={10}/>
                        <Button raised ripple type="submit">Submit</Button>
                    </form>
                    </Cell>
                    <Cell col ={6} hidePhone={true}><h2 className="contact-heading">CONTACT ME</h2>
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
                    
                    {/* This cell is exculisively for phone */}

                    <Cell col={4} hideDesktop={true} hideTablet={true}>
                    <h2 className="contact-heading">CONTACT ME</h2>
                    <hr/>
                    <p className="contact-des">I am currently looking for Software development oppurtunities where I can learn and grow more amongst experienced mentors</p>
                
                    <div className="contact-list">
                    <List style={{textAlign:'center'}}>
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