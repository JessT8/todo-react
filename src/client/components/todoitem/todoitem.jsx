import React from 'react';

class ToDoItem extends React.Component {
    constructor(){
        super();
        this.state = {
            todo: {}
        };
    }
    delete(event) {
        this.props.delete(parseInt(event.target.value));
    }
    change(value){
        if(value!==""){
            this.setState({ todo: value});
            this.props.setTodo(value);
        }
    }
    render() {
        const inputChange = value => {
            let a  = {task: value, date: this.props.list.date};
            this.change(a);
        }

        if(Object.keys(this.state.todo).length === 0){
            inputChange(this.props.list.task);
            console.log("dsd",this.props.list);
        }
        return (
            <tr><th scope="row">{this.props.index+1}</th><td>{this.props.list.date}</td><td>{this.props.list.task}</td><td><button className="btn btn-danger"onClick={(event)=>{this.delete(event)}} value={this.props.index}>Remove</button></td></tr>
              )

        }
    }

export default ToDoItem;