import React, {Component, Fragment} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchToken, loadUser } from './actions/authAction';
class AppNavbar extends Component{
    state={
        user:null,
        dropdownOpen:false,
        isOpen:false
    }
    // static propTypes={
    //     auth:PropTypes.object.isRequired
    // }
componentDidMount(){
    // setTimeout(()=>{
    //     this.props.loadUser();
    // },5000)
    // this.setState({user:this.props.user},console.log(this.state.user));
    console.log(this.props);
    
}
    
    render(){
        const {isAuthenticated, data}=this.props.auth;
        // console.log("User",data.results);
        return(
       <>
      
{isAuthenticated?            
<Navbar  style={{color:'white'}} variant="dark" bg="dark" expand="sm">
  <Navbar.Brand href="#home">React Assignment</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav style={{display:'flex',alignItems:'center'}} className="ml-auto">
      <Nav.Link href="#home">{data?data.message:''}</Nav.Link>
      {/* <Nav.Link href="#link">Link</Nav.Link> */}
      <img style={{width:'2rem',height:'2rem',borderRadius:'20px'}} src={data.results?data.results.icon:''}/>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>:null}
           
            </>

        )}
}

const mapStateToProps=state=>({
    auth:state.auth,

})
export default connect(mapStateToProps)(AppNavbar);