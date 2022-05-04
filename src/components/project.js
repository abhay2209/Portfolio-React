import React, {Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button} from 'react-mdl';

// CSS used for buttons in Project Cards
const ProjectButtonProperties = {
    color: 'black', textDecoration: 'none'
}

// CSS for card display properties 
const CardProperties = {
    borderRadius: '3rem', minwidth: '400px', margin: 'auto'
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
                    <CardText>Multiplayer game that involves tanks and unique player ID (NodeJS)</CardText>
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
                        <CardText>Multiplayer game that involves tanks and unique player ID (PostgreSQL)</CardText>
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
                        <CardText>Built using   Java Spring boot, React.js and MySQL, an employee database with the ability to add, view, delete and update employees</CardText>
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
                        <CardText>A TCP multihtreaded web server built in Python that supports five status codes</CardText>
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
                    <div className="projects-grid">
                     <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/employee.png) center/cover'}}>Employee Database</CardTitle>
                        <CardText>Built using Java Spring boot, React.js and MySQL, an employee database with the ability to add, view, delete and update employees</CardText>
                        <CardActions border>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/employee_project">Github</a></Button>
                        </CardActions>
                     </Card>
                     </div>
                    <div className="projects-grid">
                     <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/cCode.png) center/cover'}}>DATA STRUCTURES</CardTitle>
                        <CardText>Consists of assignments done at school, which implements double linked list and Binary Search Trees</CardText>
                        <CardActions border>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/Data-Structures">Github</a></Button>
                        </CardActions>
                     </Card>
                     </div>

                     <div className="projects-grid">
                     <Card shadow={5} style ={CardProperties} className='cardHover'>
                        <CardTitle style={{color:'#fff', height: '15rem', background:'url(/projectImages/cCode.png) center/cover'}}>C++ BASICS</CardTitle>
                        <CardText>Several assignments demonstrating my knowledge of OOP and algorithms</CardText>
                        <CardActions border>
                            <Button className="buttonHover"><a target = "_blank" rel="noopener noreferrer" style = {ProjectButtonProperties} href = "https://github.com/abhay2209/Course-Assignments">Github</a></Button>
                        </CardActions>
                     </Card>
                     </div>
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
                
    
            </div> //These have indexes 0, 1, 2 and 3
        )
    }
}
export default Projects;