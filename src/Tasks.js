import React,{useEffect, useState} from 'react';
import { Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Task from './Task';
import AddTask from './AddTask';

const Tasks=(props)=>{
    const [isOpen,setIsOpen]=useState(false);
    const [taskId,setTaskId]=useState(null);

   

    const handleToggle=(e,id)=>{
        setIsOpen(!isOpen);
        setTaskId(id);
        //  console.log("TaskId:",taskId,id)
    }
    return(
        <Card style={{margin:'10px'}}>
            <Card.Header style={{padding:'1px'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <h6 style={{marginLeft:'1rem'}}>Tasks<span style={{color:'#c4c4c4',marginLeft:'.5rem'}}>{props.tasks?props.tasks.results.length:0}</span></h6>
                    <div style={{borderLeft:'1px solid #cbced4'}}>
                        <Button onClick={handleToggle} variant="light" style={{border:'none'}}><FontAwesomeIcon icon={faPlus}/></Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                {isOpen?<><AddTask task={props.tasks.results.filter((task)=>task.id===taskId)} handleToggle={handleToggle}/></>:
                <>
                {props.tasks?
                <>
                    {props.tasks.results.map((task)=>(
                       <Task handleToggle={handleToggle} key={task.id} task={task}/>
                    ))}</>
                :null}</>}
            </Card.Body>
        </Card>
    );
}
const mapStateToProps=(state)=>{
    return{
        tasks:state.auth.tasks,
    }
}
export default connect(mapStateToProps)(Tasks);