import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Button, Form,Col,InputGroup } from 'react-bootstrap';
import './AddTask.css'
import { connect } from 'react-redux';
import {addTask,editTask,getTasks,deleteTask,fetchToken} from './actions/authAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const schema = yup.object().shape({
  task_msg: yup.string().required(),
  task_date: yup.string().required(),
  time: yup.string().required(),
  
});

function AddTask({handleToggle,user,addTask,task,editTask,deleteTask,fetchToken}) {

  console.log("task Id for Edit",task);
  const task_id=task.length>0?task[0].id:'';
  const task_msg=task.length>0?task[0].task_msg:'New Task';
  const task_date=task.length>0?task[0].task_date:'';
  const task_time=task.length>0?new Date(task[0].task_time * 1000).toISOString().substr(11, 8):'';
  const is_completed=task.length>0?task[0].is_completed:0;
  console.log("New Time",task_time);
  
  return (
    <Formik 
      validationSchema={schema}
      initialValues={{
          task_msg: task_msg,
          task_date:task_date,
          time:task_time,
          status:is_completed,
        //   user:'' 
        }}
        onSubmit={(values)=>{ 
          console.log("onSUbmit");
              const {task_msg,task_date,time,status}=values;
              // console.log("On Submit Called",task_msg,task_date,task_time,user,status);
              var task_time=parseInt(time.split(":")[0])*3600+parseInt(time.split(":")[1])*60
              const is_completed=status=="1"?1:0;
              // console.log("Time:",task_time);
              const assigned_user=user.id;
                    const task1={
                      assigned_user,task_date,task_time,task_msg,is_completed
                    }
                    
            // console.log("Submit:user",assigned_user,task_date,task_time,task_msg);
            if(task.length==0)
            addTask(task1);
            else{
              console.log("Edit Submit");
              const task2={
                task_id,assigned_user,task_date,task_time,task_msg,is_completed
              }
              console.log(task2);
              editTask(task2);
            }
            fetchToken();
            handleToggle();
          }
          }
      
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md={4} >
                <Form.Label>Task Description</Form.Label>
              <Form.Control
                type="text"
                name="task_msg"
                value={values.task_msg}
                onChange={handleChange}
                isInvalid={!!errors.task_msg}
                
              />
             <Form.Control.Feedback type="invalid">
                  {errors.task_msg}
                </Form.Control.Feedback>
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} sm="8" >
            <Form.Label>Date</Form.Label>
            <Form.Control 
                type="date" 
                name='task_date'
                value={values.task_date}
                onChange={handleChange}
                isInvalid={!!errors.task_date}
              />

<Form.Control.Feedback type="invalid">
                  {errors.task_date}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm="4" >
            <Form.Label>Time</Form.Label>
             
                <Form.Control 
                    type="time" 
                    name='time'
                    value={values.time}
                    onChange={handleChange}
                    isInvalid={!!errors.time}
              />
                <Form.Control.Feedback type="invalid">
                  {errors.time}
                </Form.Control.Feedback>
            
            </Form.Group>
          </Form.Row>
         <Form.Row>
         <Form.Group as={Col}>
         <Form.Label>
              Assign User
            </Form.Label>
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom
            >
    {/* for Multiple Users  */}
    {/* user.map((usr,id)=>(
    <option value={id+1}>{usr?usr.name:''}</option>
    )) */}

    <option value="0">{user?user.name:''}</option>
    
  </Form.Control>
  </Form.Group>
         <Form.Group>
         <Form.Label>
              Status
            </Form.Label>
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom
              name='status'
                value={values.status}
                onChange={handleChange}
            >
    

    <option value="0">Pending</option>
    <option value="1">Completed</option>
    
  </Form.Control>
  </Form.Group>
         </Form.Row>
         {task.length>0?
            <Button onClick={()=>{deleteTask({task_id});fetchToken();handleToggle();}} className="mr-2" variant="outline-danger" ><FontAwesomeIcon icon={faTrashAlt} /></Button>:null}
          
          <Form.Row style={{display:'flex',justifyContent:'flex-end',width:'100%'}}>
            <Button className="mr-2" variant="outline-danger" onClick={handleToggle} >Cancle</Button>
            <Button type="submit">Submit</Button>
          </Form.Row>
        </Form>
      )}
    </Formik>
  );
}
const mapStateToProps=(state)=>{
  return{
    user:state.auth.user
  }
}


export default connect(mapStateToProps,{fetchToken,getTasks,addTask,editTask,deleteTask})(AddTask);