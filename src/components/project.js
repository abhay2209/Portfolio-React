import React, {Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    //because we are working with states
    }
toggleCategories() {
    if(this.state.activeTab === 0){
        return(
            <Card shadow={5} style ={{minwidht: '450', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '15rem', background:'url(https://cdn.cnn.com/cnnnext/dam/assets/200518114838-05-pac-man-40.jpg) center/cover'}}> Card Number 1</CardTitle>
                <CardText>This will be a description to my projects</CardText>
                <CardActions border>
                    <Button>Github</Button>
                    <Button>Project Website</Button>
                </CardActions>
                <CardMenu stylr={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
        )
    }   else if(this.state.activeTab === 1){
        return (
            <div><h1>This is Tab 2</h1></div>
        )
    }   else if(this.state.activeTab === 2){
        return (
            <div><h1>This is Tab 3</h1></div>
        )
    }   else if(this.state.activeTab === 3){
        return (
            <div><h1>This is Tab 4</h1></div>
        )
    } 
}
//Using Cards(1), Tabs layout in React-MDL
    render() {
        return(
            <div><h1>Projects</h1>
            <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple >
                <Tab>NodeJS</Tab>
                <Tab>SQL</Tab>
                <Tab>Python</Tab>
                <Tab>C++</Tab>

            </Tabs>
            <section className="project-grid">
                <Grid className="projects-grid">
                    <Cell col={12}>
                    <div className ="content">{this.toggleCategories()} </div>

                    </Cell>

                </Grid>
                
            </section>
            </div>//These have indexes 0, 1, 2 and 3
        )
    }
}
export default Projects;