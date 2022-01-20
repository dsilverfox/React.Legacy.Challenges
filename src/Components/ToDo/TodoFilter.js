import React, {Component} from 'react';
// import TodoList from './TodoList';

class TodoFilter extends Component {
    constructor(props) {
        super(props)
        this.input={value:{}}
        this.todo={value: []}
    }

    inputHandler(e) {
        console.log(e.target.value)
        // this.setInput={value: e.target.value};
    }
    
    buttonHandler(e) {
        e.preventDefault();
        this.setTodo=([...this.Todo, { text: this.input, completed: false, id:Math.random()*10}]);
        this.setInput(" ");

    }
    render() {
        return(
            <form>
                <input type='text' className= 'todo-input' onChange={this.inputHandler}/>
                <button onClick = {this.buttonHandler} className = 'submitbtn' type = 'submit'> Click me to submit!</button>

                <div className='selection'>
                    <select name = 'todolist' className = 'filtertodo'>
                        <option value = 'All'>All</option>
                        <option value = 'Completed'>Completed</option>
                        <option value = 'Incomplete'>Incomplete</option>
                    </select>
                </div>

                <div className='todo-container'>
                    <ul className='list'>
                        {this.todo.value.map((this.todo) => (
                            <TodoList/>
                        ))}
                    </ul>
                </div>
            </form>
        )
    };

};

export default TodoFilter;