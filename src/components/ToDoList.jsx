import { Component } from "react";
import ToDo from "./ToDo";

class ToDoList extends Component{
    
    state = {
        tasks: [{id: 1, name: 'Attempt to peg Batman'}, {id: 2, name: 'Fail'}, {id: 3, name: 'Get pegged by Batman'}, {id: 4, name: 'Enjoy'}],
        finished: [{id: 1, name: 'Peg Joker'}],
        inputValue: ''
    }

    onChange = (event) => {
        const value = event.target.value;
        this.setState({
            inputValue: value
        })
    }

    addTask = (event) => {
        event.preventDefault()

        const task = {
            id: this.state.tasks.length + 1,
            name: this.state.inputValue
        }

        this.setState({
            tasks: [...this.state.tasks, task],
            inputValue: ''
        })

    }
    
    finishTask = (id) => {
        const finishTask = this.state.tasks.filter((tasks) => tasks.id !== id)
        this.setState({
            finished: [...this.state.finished, finishTask]
        })
    }

    removeUnfinishedTask = (id) => {
        const tasks = this.state.tasks.filter((tasks) => tasks.id !== id)
        this.setState({
            tasks
        })
    }

    removeFinishedTask = (id) => {
        const finished = this.state.finished.filter((finished) => finished.id !== id)
        this.setState({
            finished
        })
    }

    render() {
        return (
            <div className="tasks">
                <div className="input-div">
                    <h1>To Do App</h1>
                    <form onSubmit={this.addTask} className="form">
                        <input type="text" placeholder="Enter a task" onChange={this.onChange} value={this.state.inputValue}/>
                        <button type="submit" className="addtask-btn">Add Task</button>
                    </form>
                </div>

                {this.state.tasks.map((tasks) => (
                    <ToDo taskKey={tasks.id} taskId={tasks.id} taskName={tasks.name} addTask={this.addTask} finishTask={this.finishTask} removeUnfinishedTask={this.removeUnfinishedTask} removeFinishedTask={this.removeFinishedTask}/>
                ))}

                {this.state.finished.map((finished) => (
                    <ToDo finishedKey={finished.id} finishedId={finished.id} finishedName={finished.name} addTask={this.addTask} finishTask={this.finishTask} removeUnfinishedTask={this.removeUnfinishedTask} removeFinishedTask={this.removeFinishedTask}/>
                ))}
            </div>
        )
    }
}

   

export default ToDoList;