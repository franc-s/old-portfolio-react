import React,{useState} from "react";
import {
    Route,
    HashRouter,
    Link,
    NavLink as NL
  } from "react-router-dom";

  import {
    Navbar,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
  import LandingPage from "./LandingPage";
  import ProjectPage from "./ProjectPage";
  import AboutPage from "./AboutPage";

export default function Main(){

    const [acn1,setAcn1] = useState('') 
    const [acn2,setAcn2] = useState('')
    const [acn3,setAcn3] = useState('')

    const startChangeVis = id => {
        setAcn1('')
        setAcn2('')
        setAcn3('')
        if(id === 'a')      setAcn1('active')
        else if(id === 'b') setAcn2('active')
        else if(id === 'c') setAcn3('active')
      }

    return(
        <HashRouter>
        <div>
        <Navbar light expand="md">
        <NL className="navBrand" to="/">Francis de Lima</NL>

            <Nav className="navStyle" navbar>
            <NavItem className="navitem">
              <NavLink tag={Link} to="/projects" id="a"  onClick={() => { startChangeVis('a')}} className={acn1}>Projects</NavLink>
            </NavItem>
            <NavItem className="navitem">
              <NavLink tag={Link} to="/about"  id="b"  onClick={() => { startChangeVis('b')}} className={acn2}>About</NavLink>
            </NavItem>
            <NavItem className="navitem">
              <NavLink tag={Link} to="/contact"  id="c" onClick={() => { startChangeVis('c')}} className={acn3} >Contact</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
      <div className="content">
            <Route exact path="/" component={LandingPage}/>
            <Route path="/projects" component={ProjectPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={AboutPage}/>
          </div>
      </div>
      </HashRouter>

    )
}