import React,{useState, useEffect} from "react";
import {
    Route,
    Link,
    NavLink as NL,
    useLocation
  } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse
  } from 'reactstrap';
import { HashLink  } from 'react-router-hash-link';

import AboutPage from "./AboutPage";
import LandingPage from "./LandingPage";

// Projects 
import ProjectPage from "./ProjectPage";
import HarvestMate from './Projects/HarvestMate'
import Seekdo from './Projects/Seekdo'
import Project3 from './Projects/Project3'
import Project4 from './Projects/Project4'
import Modal from '../components/Modal'
import firebase from '../firebase'
import ReactGA from 'react-ga';

const analytics = firebase.analytics;


ReactGA.initialize(process.env.REACT_APP_GA);

function usePageViews() {
  let location = useLocation();

  useEffect(() => {
    analytics().setCurrentScreen(location.pathname) // sets `screen_name` parameter
    analytics().logEvent('screen_view') // log event with `screen_name` parameter attached
    ReactGA.pageview(location.pathname + location.search);

  }, [location]);
}

export default function App(){

  const [collapsed, setCollapsed] = useState(true);
  const [show, setShow] = useState(false)


    const [projects,setProjects] = useState('') 
    const [about,setAbout] = useState('')

    const startChangeVis = id => {
        setProjects('')
        setAbout('')
        if(id === 'projects')      setProjects('active')
        else if(id === 'about') setAbout('active')
        else if(id === 'contact') return 1;
        else if(id === 'nav') return 1;
      }
      usePageViews();

    return( 
        <div className="navMainContainer">
        <Navbar light expand="md">
        <NL className="navBrand" to="/" id="nav" onClick={() => { startChangeVis('nav')}} >Francis de Lima</NL>
        <Collapse isOpen={!collapsed} navbar>
            <Nav className="navStyle" navbar>
            <NavItem className="navitem">
              <NavLink tag={Link} to="/projects" id="projects"  onClick={() => { startChangeVis('projects')}} className={projects}>Projects</NavLink>
            </NavItem>
            <NavItem className="navitem">
              <NavLink tag={Link} to="/about"  id="about"  onClick={() => { startChangeVis('about')}} className={about}>About</NavLink>
            </NavItem>
            <NavItem className="navitem" >
              <NavLink tag={HashLink} to="/about#contactMe"  id="contact" onClick={() => { startChangeVis('contact')}} >Contact</NavLink>
            </NavItem>
          </Nav>
          </Collapse>
          <NavbarToggler onClick={()=>setShow(true)} />

      </Navbar>

      <div className="content">
            <Route exact path="/" render={(props) => <LandingPage {...props} onClick={() => { startChangeVis('a')}} />}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={AboutPage}/>
            <Route path="/projects" component={ProjectPage}/>
              <Route path="/harvestmate" component={HarvestMate}/>
              <Route path="/seekdo" component={Seekdo}/>
              <Route path="/project3" component={Project3}/>
              <Route path="/project4" component={Project4}/>

          </div>

      <Modal show={show} setShow={setShow}>


            <Link to="/projects" onClick={() => { startChangeVis('projects'); setShow(false)}}> 
            <h1 className={projects === 'active' ? 'modalLinkActive' :'modalLink'}>
            Projects 
            </h1>
            </Link>

            <Link to="/about" onClick={() => { startChangeVis('about'); setShow(false)}} > 
            <h1 className={about === 'active' ? 'modalLinkActive' :'modalLink'}>
            About
            </h1>
            </Link>

            <HashLink to="/about#contactMe" onClick={() => { startChangeVis('contact'); setShow(false)}} >
              <h1 className='modalLink'>
              Contact
              </h1>
              </HashLink>

  

        </Modal>
      </div>      
    )
}




