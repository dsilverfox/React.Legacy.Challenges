import React  from 'react';

const TodoList = () => {
    return(
        <div className = 'list'>
            <li className = 'item'></li>
            <button className = 'save'>Complete</button>
            <button className = 'delete'>Delete</button>
        </div>
    )
}

export default TodoList;