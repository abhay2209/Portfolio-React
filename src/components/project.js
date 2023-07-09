import React, {Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button} from 'react-mdl';
import * as message from '../constants'

// CSS used for buttons in Project Cards
const ProjectButtonProperties = {
    color: 'black', textDecoration: 'none'
}

// CSS for card display properties 
const CardProperties = {
    borderRadius: '3rem', minwidth: '400px', margin: 'auto'
}

function createLinkButton(buttonLink, buttonName) {
    if (buttonLink) {
        return <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = {buttonLink}>{buttonName}</a></Button>
    }
}

function createCard(projectName, projectDescription, projectImage=null, projectGit=null, projectWeb = null, projectDemo=null, portfolioTheme=false) {
    return <div class="projects-grid">
                <Card shadow={5} style ={CardProperties} className='cardHover'>
                    {portfolioTheme
                        ? <CardTitle style={{color:'#fff', height: '15rem'}} className='header-color'>{projectName}</CardTitle>
                        : <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/'+projectImage+') center/cover'}}>{projectName}</CardTitle>
                    }
                    <CardText>{projectDescription}</CardText>
                    <CardActions border>
                        {createLinkButton(projectGit, message.PROJECT_GITHUB)}
                        {createLinkButton(projectWeb, message.PROJECT_WEBSITE)}
                        {createLinkButton(projectDemo, message.PROJECT_DEMO)}
                    </CardActions>
                </Card>
           </div>
}

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    //because we are working with states
    }

    toggleCategories() {
        // Projects for Tab 1
        if(this.state.activeTab === message.projectSection.JavaScript){   
            // Cards for each project with buttons to link them to Github repos
            return(
                <div className="whole-grid">
                    {createCard(message.BUDGET_WISE, message.BUDGET_WISE_DESCRIPTION, message.BUDGET_WISE_IMG, message.BUDGET_WISE_GIT_LINK, null, message.BUDGET_WISE_DEMO_LINK)}
                    {createCard(message.BUMPER_TANKS, message.BUMPER_TANKS_DESCRIPTION, message.BUMPER_TANKS_IMG, message.BUMPER_TANKS_GIT_LINK)}
                    {createCard(message.NOTE_MAKER, message.NOTE_MAKER_DESCRIPTION, message.NOTE_MAKER_IMG, message.NOTE_MAKER_GIT_LINK)}
                    {createCard(message.PORTFOLIO, message.PORTFOLIO_DESCRIPTION, null, message.PORTFOLIO_GIT_LINK, null, null, true)}
                    {createCard(message.POKEDEX, message.POKEDEX_DESCRIPTION, message.POKEDEX_IMG, message.POKEDEX_GIT_LINK, message.PROJECT_WEBSITE)}
                    {createCard(message.GRADE_CALCULATOR, message.GRADE_CALCULATOR_DESCRIPTION, message.GRADE_CALCULATOR_IMG, message.GRADE_CALCULATOR_GIT_LINK)}
                    {createCard(message.EMPLOYEE_DATABASE, message.EMPLOYEE_DATABASE_DESCRIPTION, message.EMPLOYEE_DB_IMG, message.EMPLOYEE_DB_GIT_LINK)}
                    {createCard(message.ASCII, message.ASCII_DESCRIPTION, message.ASCII_IMG, message.ASCII_GIT_LINK, null, message.ASCII_DEMO_LINK)}
                </div>
            )
        }   else if(this.state.activeTab === message.projectSection.SQL){
            return (
                <div className="whole-grid">
                    {createCard(message.BUDGET_WISE, message.BUDGET_WISE_DESCRIPTION, message.BUDGET_WISE_IMG, message.BUDGET_WISE_GIT_LINK, null, message.BUDGET_WISE_DEMO_LINK)}
                    {createCard(message.AIRBNB_BOOKER, message.AIRBNB_BOOKER_DESCRIPTION, message.AIRBNB_BOOKER_IMG, message.AIRBNB_BOOKER_GIT_LINK)} 
                    {createCard(message.BUMPER_TANKS, message.BUMPER_TANKS_DESCRIPTION, message.BUMPER_TANKS_IMG, message.BUMPER_TANKS_GIT_LINK)}
                    {createCard(message.NOTE_MAKER, message.NOTE_MAKER_DESCRIPTION, message.NOTE_MAKER_IMG, message.NOTE_MAKER_GIT_LINK)}
                    {createCard(message.POKEDEX, message.POKEDEX_DESCRIPTION, message.POKEDEX_IMG, message.POKEDEX_GIT_LINK)}
                    {createCard(message.EMPLOYEE_DATABASE, message.EMPLOYEE_DATABASE_DESCRIPTION, message.EMPLOYEE_DB_IMG, message.EMPLOYEE_DB_GIT_LINK)}
                </div>
            )
        }   else if(this.state.activeTab === message.projectSection.Python){
            return (
                <div className='whole-grid'>
                    {createCard(message.WEB_SERVER, message.WEB_SERVER_DESCRIPTION, message.WEB_SERVER_IMG, message.WEB_SERVER_GIT_LINK)}
                    {createCard(message.AIRBNB_BOOKER, message.AIRBNB_BOOKER_DESCRIPTION, message.AIRBNB_BOOKER_IMG, message.AIRBNB_BOOKER_GIT_LINK)}    
                    {createCard(message.ANAGRAM_FINDER, message.ANAGRAM_FINDER_DESCRIPTION, message.ANAGRAM_FINDER_IMG, message.ANAGRAM_FINDER_GIT_LINK)}
                    {createCard(message.ML_PROJECTS, message.ML_PROJECTS_DESCRIPTION, message.ML_PROJECTS_IMG, message.ML_PROJECTS_GIT_LINK)}
                    {createCard(message.COVID_PREDICT, message.COVID_PREDICT_DESCRIPTION, message.COVID_PREDICT_IMG, message.COVID_PREDICT_GIT_LINK)}
                    {createCard(message.PACMAN_SEARCH, message.PACMAN_SEARCH_DESCRIPTION, message.PACMAN_SEARCH_IMG, message.PACMAN_SEARCH_GIT_LINK)}
                </div>
            )
        }   else if(this.state.activeTab === message.projectSection.Java){
            return (
                <div className="whole-grid">
                     {createCard(message.EMPLOYEE_DATABASE, message.EMPLOYEE_DATABASE_DESCRIPTION, message.EMPLOYEE_DB_IMG, message.EMPLOYEE_DB_GIT_LINK)}
                     {createCard(message.DATA_STRUCTURES, message.DS_DESCRIPTION, message.DS_IMG, message.DS_GIT_LINK)}
                     {createCard(message.C_BASICS, message.C_BASICS_DESCRIPTION, message.C_BASICS_IMG, message.C_BASICS_GIT_LINK)}
                </div>
            )
        } 
    }
//Using Cards(1), Tabs layout in React-MDL
    render() {
        return(
            <div><h1 id="project-heading">PROJECTS</h1>
            <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple >
                <Tab>{message.projectTabs.React}</Tab> 
                <Tab>{message.projectTabs.SQL}</Tab>
                <Tab>{message.projectTabs.Python}</Tab>
                <Tab>{message.projectTabs.Java}</Tab>
            </Tabs>
                <Grid>
                    <Cell col={12}>
                    <div className ="content">{this.toggleCategories()} </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Projects;