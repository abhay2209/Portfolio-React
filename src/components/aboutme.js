import React, {Component} from 'react';

class About extends Component {
    render() {
        return(
            <div><h1 id = "aboutHeading">About me</h1>
            <div id = "aboutDescription"><p>I am a third year Computing Science major and Mathematics minor student at <b>Simon Fraser University</b> who is passionate to learn new technologies. I look at software development as a way for me to add to the world to make it a better place.</p>
            <p>I am currenlty working as a <b>Software Developer</b> at <b>NETGEAR</b>. I developed an APIs in Python that is runs TCP/UDP throughput tests on the upcoming 5G modems and WiFi 6 routers. Currently I am designing and developing a GUI using MVC with PyQt5 where users/admin can login to configure and run their own throughput and MAC tput tests which uses the APIs. 
                Through this experience I was able to learn a lot about writing maintainable and scalable code, Pythonic code practices, version control(Git/SVN), Jira, event handling, multithreaded programming, applying OOP principles and writing efficient code by using data structures. I also got to learn the vast concepts of network communications such as TCP, UDP, proxy servers, firewalls, Wifi sniffers , CA combos etc. 
                I am also responsible for documenting the newly developed features and writing test procedures for the same.</p>
                <p>I am also currently (Fall 2021) a <b>Teaching Assistant</b> for a high level Computing Science course CMPT 363 (UI/UX Design) and have done that before in Spring 2021. In the past I have worked as a <b>Web Developer</b> at <b>CJSF 90.1FM</b> where I developed a website for fundraisers using JavaScript, Bootstrap and HTML/CSS.</p>
                <p>I have a keen interest in web application development. In a team of five, we have built a multiplayer web application in an agile environemnt using JavaScript, Node JS, PostgreSQL and HTML/CSS. Here we used sockets.io to make the game multiplayer and add a chat feature. The game was built using Matter.js physics engine. I have also built several small web applications using ReactJS, NodeJS and PostgreSQL which you can find in the Projects section.</p>
                <p>With these vast spectrum of experiences, not only I have learned a lot about technology but also have developed many <b>interpersonal skills</b>. I have worked in different teams at work as well as school where I learned teamwork. As a TA, I learned more about leadership, taking responsibility and be a slef started. This also helped me increase my attention to detail and critical thinking capabilities.</p></div>
            </div>
        )
    }
}
export default About;
