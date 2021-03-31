import React from 'react';
import { Card,Row,Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Tasks from './Tasks';

const Body=(props)=>{
    // const {user}=props.user;
    console.log("User Body",props);
    return(
        <>{props?
        <Card style={{ border:'1px solid gray',margin:'10px'}}>
                <Card.Header>
                    <Row>
                        <Col sm={3}>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img style={{width:'2rem',height:'2rem',borderRadius:'20px'}} src={props.user?props.user.icon:''}/>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                        <h7 style={{color:'gray',fontSize:'10px'}}><b>{props.user?props.user.name:''}</b></h7>
                        <span style={{fontSize:'8px'}}>{props.user?props.user.email:''}</span>
                    </div>
               </div>
               </Col>
                        <Col sm={3}>
                <div style={{display:'flex',alignItems:'center'}}>
                    
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                        <h7 style={{color:'gray',fontSize:'10px'}}><b>Company</b></h7>
                        <span style={{fontSize:'8px'}}><b>{props.user?props.user.company:''}</b></span>
                    </div>
               </div>
               </Col>
                        <Col sm={3}>
                <div style={{display:'flex',alignItems:'center'}}>
                    
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                        <h7 style={{color:'gray',fontSize:'10px'}}><b>Joined</b></h7>
                        <span style={{fontSize:'8px'}}><b>{props.user?props.user.created.split('T')[0]:''}</b></span>
                    </div>
               </div>
               </Col>
                        <Col sm={3}>
                <div style={{display:'flex',alignItems:'center'}}>
                   
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                        <h7 style={{color:'gray',fontSize:'10px'}}><b>Phone Number</b></h7>
                        <span style={{fontSize:'8px'}}>{props.user?props.user.phone:''}</span>
                    </div>
               </div>
               </Col>
               </Row>
                </Card.Header>
           
</Card>:null}
<Tasks />
</>
    );
}
const mapStateToProps=(state)=>{
    return{
        user:state.auth.user
    }
}
export default connect(mapStateToProps)(Body);