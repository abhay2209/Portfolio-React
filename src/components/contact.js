import React, {Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Textfield, Button} from 'react-mdl' ;
import * as message from '../constants'

const emailPattern = "[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+"
const alphabetPattern = "[A-Za-z ]+$" 

const buttonProperties = {
    display:'block', 
    margin:'auto',
    marginTop:'1rem',
}

const textProperties= {
    display: 'block',
    margin:'auto',
}

class Contact extends Component {
    render() {
        return(
            <div className= "contact-body">
                <h1 id="project-heading">CONTACT ME</h1>
                <hr/>
                <Grid className="contact-grid">
                    <Cell col ={6}><h2 className="contact-heading">Send a message</h2>
                        <hr/>
                        <div className="message-box">
                            <form name="Contact-form"  method="post">
                            <input type="hidden" name="form-name" value="contact" />
                                <Textfield style={textProperties} pattern={alphabetPattern} label="First name" name="firstName" floatingLabel classname required="true"/>
                                <Textfield style={textProperties} pattern={alphabetPattern} label="Last name" name="lastName" floatingLabel required="true" />
                                <Textfield style={textProperties} pattern={emailPattern} label="Email (example: ajolly@sfu.ca)" name="email" floatingLabel required="true"/>
                                <Textfield style={textProperties} label="Message" name="message" floatingLabel required="true" multiline rows={10}/>
                                <Button raised accent colored="true" type="submit" className="submit-button" style={buttonProperties}>Submit</Button>
                            </form>
                        </div>
                    </Cell>
                    <Cell col ={6}><h2 className="contact-heading">Contact Information</h2>
                    <hr/>
                        <div className="contact-list">
                            <List>
                                {/* <ListItem>
                                    <ListItemContent className='contact-info'>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>{message.cellNumber}</ListItemContent> 
                                </ListItem> */}
                                <ListItem>
                                    <ListItemContent className='contact-info'>
                                        <i className="fa fa-envelope-square" aria-hidden="true"/>{message.email}</ListItemContent> 
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className='contact-info'>
                                        <i className="fa fa-home" aria-hidden="true"/>{message.address}</ListItemContent> 
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