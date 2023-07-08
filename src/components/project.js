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

function createCard(projectName, projectDescription, projectImage, projectGit, projectWeb = null) {
    return <div class="projects-grid">
                    <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/'+projectImage+') center/cover'}}>{projectName}</CardTitle>
                        <CardText>{projectDescription}</CardText>
                        <CardActions border>
                            <Button ><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = {projectGit}>{message.GITHUB}</a></Button>
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
        if(this.state.activeTab === 0){   
            // Cards for each project with buttons to link them to Github repos
            return(<div className="whole-grid">

                <div className="projects-grid">
                <Card shadow={5} style ={CardProperties} className='cardHover'>
                <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/bumperTanks.png) center/cover'}}>BUMPER TANKS</CardTitle>
                    <CardText>Multiplayer game developed using NodeJS, PostgreSQL, HTML and CSS</CardText>
                    <CardActions border>
                        <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/Bumper-Tanks">Github</a></Button>
                        <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://bumpertank.herokuapp.com/">Project Website</a></Button>
                    </CardActions>
                </Card>
                </div>

                <div className="projects-grid">
                <Card shadow={5} style ={CardProperties} className='cardHover'>
                <CardTitle style={{color:'#fff', height: '15rem'}} className='header-color'>My Portfolio</CardTitle>
                    <CardText>A portfolio to keep a track of my learnings and display some of my projects (ReactJS)</CardText>
                    <CardActions border>
                        <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/Portfolio-React">Github</a></Button>
                    </CardActions>
                </Card>
                </div>

                <div className="projects-grid">
                <Card shadow={5} style ={CardProperties} className='cardHover'>
                    <CardTitle style={{color:'#fff',height: '15rem', background:'url(/projectImages/pokedex.jpeg) center/cover'}}> POKEDEX </CardTitle>
                    <CardText>Database for Pokemons where a user can add, update or remove pokemons (NodeJS)</CardText>
                    <CardActions border>
                        <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/Tokedex-Database">Github</a></Button>
                        <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://tokedex.herokuapp.com">Project Website</a></Button>
                    </CardActions>
                </Card>
                </div>

                <div className="projects-grid">
                <Card shadow={5} style ={CardProperties} className='cardHover'>
                    <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/gradeCalculator.png) center/cover'}}>GRADE CALCULATOR</CardTitle>
                    <CardText>SFU theme based website to calculate grades average and weighted average</CardText>
                    <CardActions border>
                        <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/Grade-Calculator">Github</a></Button>
                        <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://gradecalculator2209.herokuapp.com">Project Website</a></Button>
                    </CardActions>
                </Card>
                </div>

                <div className="projects-grid">
                     <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/employee.png) center/cover'}}>Employee Database</CardTitle>
                        <CardText>Built using Java Spring boot, ReactJS and MySQL, a web application with the ability to add, view, delete and update employees</CardText>
                        <CardActions border>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/employee_project">Github</a></Button>
                        </CardActions>
                     </Card>
                </div>

                <div className="projects-grid">
                    <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/fallHack.png) center/cover'}}>ASCII</CardTitle>
                        <CardText>In a team of five, built a game for Fallhack2020 held at SFU (ReactJS)</CardText>
                        <CardActions border>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/FallHack2020">Github</a></Button>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://drive.google.com/drive/folders/1dm9s_XQ4IaucEuLebqPsVsY6yPivCSQ5">Demo</a></Button>
                        </CardActions>
                    </Card>
                    </div>

            </div>
                
            )
        }   else if(this.state.activeTab === 1){
            return (
                <div className="whole-grid">

                    <div class="projects-grid">
                    <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/airbnb.jpg) center/cover'}}> AIRBNB BOOKER</CardTitle>
                        <CardText>CLI for searching, booking and reviewing a booking on Airbnb (MS SQL)</CardText>
                        <CardActions border>
                            <Button ><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/Airbnb-booker">Github</a></Button>
                        </CardActions>
                     </Card>
                     </div>
                     
                     <div className="projects-grid">
                     <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/bumperTanks.png) center/cover'}}> BUMPER TANKS</CardTitle>
                        <CardText>Multiplayer game developed using NodeJS, PostgreSQL, JavaScript, HTML and CSS</CardText>
                        <CardActions border>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/Bumper-Tanks">Github</a></Button>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://bumpertank.herokuapp.com/">Project Website</a></Button>
                         </CardActions>
                    </Card>
                    </div>
                    
                    <div className="projects-grid">
                    <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/pokedex.jpeg) center/cover'}}> POKEDEX</CardTitle>
                        <CardText>Database for Pokemons where a user can add, update or remove pokemons (PostgreSQL)</CardText>
                        <CardActions border>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/Tokedex-Database">Github</a></Button>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://tokedex.herokuapp.com">Project Website</a></Button>
                        </CardActions>
                    </Card>
                    </div>
                    <div className="projects-grid">
                     <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/employee.png) center/cover'}}>Employee Database</CardTitle>
                        <CardText>Built using Java Spring boot, React.js and MySQL, an employee database with the ability to add, view, delete and update employees</CardText>
                        <CardActions border>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/employee_project">Github</a></Button>
                        </CardActions>
                     </Card>
                     </div>

                </div>
            )
        }   else if(this.state.activeTab === 2){
            return (
                <div className='whole-grid'>
                    <div className="projects-grid" >
                    <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/webServer.png) center/cover'}}> WEB SERVER</CardTitle>
                        <CardText>A TCP multihtreaded web server that can respond the client's HTTP request with five status codes</CardText>
                        <CardActions border>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style={ProjectButtonProperties} href="https://github.com/abhay2209/Python-Web-Server">Github</a></Button>
                        </CardActions>
                    </Card>
                    </div>

                    <div className="projects-grid">
                    <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/airbnb.jpg) center/cover'}}> AIRBNB BOOKER</CardTitle>
                        <CardText>CLI for searching, booking and reviewing a booking on Airbnb</CardText>
                        <CardActions border>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/Airbnb-booker">Github</a></Button>
                        </CardActions>
                     </Card>
                     </div>

                     <div className="projects-grid">
                     <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/anagram.png) center/cover'}}>ANAGRAM FINDER</CardTitle>
                        <CardText>Finds anagram for a word from a dictionary of words provided</CardText>
                        <CardActions border>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/Anagram-Problem">Github</a></Button>
                        </CardActions>
                     </Card>
                     </div>

                     <div className="projects-grid">
                     <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/miniProjects.jpeg) center/cover'}}>ML PROJECTS</CardTitle>
                        <CardText>Implemented from scratch a Random forest classifier, Lof-outlier detection and K-mode clustering</CardText>
                        <CardActions border>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/MiniProjects-ML">Github</a></Button>
                        </CardActions>
                     </Card>
                     </div>
    
                    <div className="projects-grid">
                     <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/covid19Ml.png) center/cover'}}>COVID-19 PREDICTOR</CardTitle>
                        <CardText>Implemented in three sprints, hyperparameter tuned classifiers on covid-19 data</CardText>
                        <CardActions border>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/Covid-19-data-mining-software">Github</a></Button>
                        </CardActions>
                     </Card>
                     </div>

                     <div className="projects-grid">
                     <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/pacman.png) center/cover'}}>PACMAN SEARCH</CardTitle>
                        <CardText>Solving packman using DFS, BFS and A* Search </CardText>
                        <CardActions border>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/Covid-19-data-mining-software">Github</a></Button>
                        </CardActions>
                     </Card>
                     </div>

                </div>
            )
        }   else if(this.state.activeTab === 3){
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
                <Tab>JavaScript</Tab> 
                <Tab>SQL</Tab>
                <Tab>Python</Tab>
                <Tab>Java/C++</Tab>

            </Tabs>
            
                <Grid>
                    <Cell col={12}>
                    <div className ="content">{this.toggleCategories()} </div>

                    </Cell>

                </Grid>
                
    
            </div> //These have indexes 0 JavaScript, 1 SQL, 2 Python and 3 Java/C++
        )
    }
}
export default Projects;