import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Button, Card, Col,Row } from 'react-bootstrap';

const Task=({task,handleToggle})=>{
    return(
        <Card>
            <Card.Header>
            <Row>
                        <Col sm={3}>
                <div style={{display:'flex',alignItems:'center'}}>
                <img style={{width:'2rem',height:'2rem',borderRadius:'20px'}} src={task.user_icon}/>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                        <h7 style={{color:'gray',fontSize:'10px'}}><b>{task.task_msg.charAt(0).toUpperCase()+task.task_msg.slice(1)}</b></h7>
                        <span style={{fontSize:'8px',color:'red'}}><b>{task.task_date}</b></span>
                    </div>
               </div>
               </Col>
                        <Col sm={3}>
                <div style={{display:'flex',alignItems:'center'}}>
                    
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                        <h7 style={{color:'gray',fontSize:'10px'}}><b>Date</b></h7>
                        <span style={{fontSize:'8px'}}><b>{task.task_date}</b></span>
                    </div>
               </div>
               </Col>
                        <Col sm={3}>
                <div style={{display:'flex',alignItems:'center'}}>
                    
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                        <h7 style={{color:'gray',fontSize:'10px'}}><b>Time</b></h7>
                        <span style={{fontSize:'8px'}}><b>{task.task_time}</b></span>
                    </div>
               </div>
               </Col>
                        <Col sm={2}>
                <div style={{display:'flex',alignItems:'center'}}>
                   
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                        <h7 style={{color:'gray',fontSize:'10px'}}><b>Is Completed</b></h7>
                        <span style={{fontSize:'8px'}}>{task.is_completed===1?'Yes':'No'}</span>
                    </div>
               </div>
               </Col>
               <Col sm={1}><button onClick={(e)=>handleToggle(e,task.id)} style={{width:'1.5rem',height:'1.5rem',border:'none',backgroundColor:'transparent'}} variant="outline-primary"><FontAwesomeIcon style={{color:'#3bb1c4'}} icon={faEdit} /></button></Col>
               </Row>
            </Card.Header>
        </Card>
    )
}
export default Task;