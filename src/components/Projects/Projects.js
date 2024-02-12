import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectsCards";
import Particle from "../Particle";
import expense from '../../Assets/Projects/expense-mangement.png.png';
import ambutrack from '../../Assets/Projects/ambutrack.png.png'
import blood from '../../Assets/Projects/blood-bank.png.png'
import codeforces from '../../Assets/Projects/codeforces.png.png'
import portfolio from '../../Assets/Projects/3d-portfolio.png.png'
function projects(){
  return (
    <Container fluid className="project-section">
      <Particle/>
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{color:"white"}}>
          Here are few projects I've worked on recently.
        </p>
        <Row style={{justifyContent:"center",paddingBottom:"10px"}}>
          <Col md={4} className="project-card">
            <ProjectCard imgPath={ambutrack} isBlog={false} title="EmergiTrack"
            description="A website to help users easily find hospitals and ambulances within a 100km radius of their location,ensuring that they can receive prompt medical attention in times of need."
            ghLink="https://github.com?heyimaaditya/emergitrack-user"/>
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard imgPath={blood} isBlog={false} title="Blood-Bank"
            description="A website to help users easily find blood and donate bloods within their location,ensuring that they can receive prompt medical attention in times of need.User can register in many ways: Donor,Admin,Hospital,Organisation"
            ghLink="https://github.com/heyimaaditya/mern-blood-bank"/>
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard imgPath={expense} isBlog={false} title="Expense-Management"
            description="A website build for expense-management system.Real Database system, User can keep track of its expenses and his/her friends also."
            ghLink="https://github.com/heyimaaditya/MERN-expense-management-system"/>
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard imgPath={codeforces} isBlog={false} title="Codeforces-Analyzer"
            description="A website build for keeping tracking of users profile on codeforces platform.After login,User can see contests,rating,submissions,blogs,rankings etc.
            Realtime data fetching from codeforces official website"
            ghLink="https://github.com/heyimaaditya/Codeforces-Analyzer"/>
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard imgPath={portfolio} isBlog={false} title="3d-Portfolio"
            description="A 3d website portfolio showcasing my skills and interests made in react-three-fibre and three.js with use of blender."
            ghLink="https://github.com/heyimaaditya/3dportfolio"/>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default projects;