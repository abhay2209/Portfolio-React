import React, {Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Textfield, Button} from 'react-mdl' ;

const emailPattern = "[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+"
const alphabetPattern = "[A-Za-z ]+$" 

const buttonProperties = {
    display:'block', 
    margin:'auto',
    marginTop:'1rem',
}

const textProperties= {
    display: 'block'
}

class Contact extends Component {
    render() {
        return(
            <div className= "contact-body">
                <h1 id="project-heading">CONTACT ME</h1>
                <hr/>
                <Grid className="contact-grid">
                    <Cell col ={6} hidePhone={true}><h2 className="contact-heading">Send a message</h2>
                    <hr/>
                    <div className="message-box">
                    <form name="Contact-form"  method="post">
                    <input type="hidden" name="form-name" value="Message from your potfolio" />
                        <Textfield className="message-field" pattern={alphabetPattern} label="First name" name="firstName" floatingLabel classname required="true"/>
                        <Textfield className="message-field" pattern={alphabetPattern} label="Last name" name="lastName" floatingLabel required="true" />
                        <Textfield className="message-field" pattern={emailPattern} label="Email (example: ajolly@sfu.ca)" name="email" floatingLabel required="true"/>
                        <Textfield className="message-field" label="Message" name="message" floatingLabel required="true" multiline rows={10}/>
                        <Button raised accent colored="true" type="submit" className="submit-button" style={{display:'block', margin:'auto',marginTop:'1rem'}}>Submit</Button>
                    </form>
                    <p className="contact-des">I am currently looking for Software development oppurtunities where I can learn and grow more amongst experienced mentors</p>
                    </div>
                    </Cell>
                    <Cell col ={6} hidePhone={true}><h2 className="contact-heading">Contact Information</h2>
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