import React from 'react';
import {Container} from 'reactstrap';
// import TodoFilter from './TodoFilter'
// import TodoList from './TodoList'

const ToDo = () => {
  return(
    <Container className="App">
     <br />
       <h1 className="App-intro">
         NOT WORKING
     In this challenge your goal is to create a to do list: 
       </h1>
       <hr />
       <ul>
         <li>
           ability to accept a task from a user
         </li>
         <li>
            ability to add this to the state
         </li>
         <li>
            ability to display all of the tasks
         </li>
         <li>
            ability to evaluated if a task was completed and update the state
         </li>
       </ul>
       <hr />
       {/* <TodoFilter />
       <TodoList /> */}
     </Container>
  );
};

export default ToDo