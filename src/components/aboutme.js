import React, {Component} from 'react';
import Resume from './resume.js';
import * as message from '../constants'

class About extends Component {
   
    render() {
        return(
            <div>
                <h1 id = "about-heading">ABOUT ME</h1>
                <hr/>
                <div id = "aboutDescription">
                {/* <p>I am a fourth year Computing Science major and Mathematics minor student at <b>Simon Fraser University</b> who is passionate to learn new technologies. I look at software development as a way for me to add to the world and make a difference</p>
                <p>I recently worked as a <b>Software Developer</b> at <b>NETGEAR</b>. There I was part of the Radio Frequency team where I worked on multiple things in an Agile environment. I developed an API in Python which runs TCP/UDP throughput tests on the upcoming LTE 5G modems using ixChariot and integrated it to a Graphical User Interface. I also worked on designing and developing the GUI, it followed the MVC design pattern and was implemented using PyQt5. The GUI had users/admin login, where users can configure and run their own throughput, MAC throughput and Rate vs. Range tests. This GUI was integrated with the APIs developed.
                    I also developed a GUI from scratch that provided manual control to various instruments such as turntable, attenuator and switches. The APIs for their integration included implementation using sockets and REST API. This also gave me an oppurtunity to work with threads.</p>
                <p>Through this experience I was able to learn a lot about writing maintainable and scalable code, Pythonic code practices, version control (Git/SVN), JIRA for project management, event handling, multithreaded programming, applying OOP principles and writing efficient code by using data structures. I also got to learn the vast concepts of network communications such as TCP, UDP, proxy servers, firewalls, WiFi sniffer, carrier aggregation, DMZ etc. 
                    I was also responsible for documenting the newly developed features and writing test procedures for the same.</p>
                <p>I was also a <b>Teaching Assistant</b> in Fall 2021 for an upper division Computing Science course CMPT 363 (UI/UX Design) and have done the same before in Spring 2021. I held office hours to solve student doubts, moderated lectures with the professor and graded the course assignments.</p> 
                <p>In the past I have worked as a <b>Web Developer</b> at <b>CJSF 90.1FM</b> where I developed a website for fundraisers using JavaScript, HTML and CSS. I was also responsible for maintaining, updating and adding features to the the station's website</p>
                <p>I have a keen interest in web application development and network communication. In a team of five, we have built a multiplayer web application in an agile environemnt using JavaScript, Node JS, PostgreSQL and HTML/CSS. Here we used sockets.io to make the game multiplayer and add a chat feature. The game was built using Matter.js physics engine. I have also built several other web applications using ReactJS, NodeJS and PostgreSQL, some of which can be found in the Projects section.</p>
                <p>With these vast spectrum of experiences, not only I have learned a lot about technology but also have developed many <b>interpersonal skills</b>. I have worked in different teams at work as well as school where I learned teamwork. As a TA, I learned more about leadership, taking responsibility and be a self starter. This also helped me increase my attention to detail and critical thinking capabilities.</p> */}
                <Resume data={message.resumeData}/>
                </div>
            </div>
        )
    }
}
export default About;
