import React from 'react';

class ToDoItem extends React.Component {
    constructor(){
        super();
        this.state = {
        };
    }
    delete(event) {
        this.props.delete(parseInt(event.target.value));
    }
    render() {
        return (
            <tr><th scope="row">{this.props.index+1}</th><td> {this.props.list.task}</td><td>{this.props.list.date}</td><td><button className="btn btn-danger"onClick={(event)=>{this.delete(event)}} value={this.props.index}>Remove</button></td></tr>
              )

        }
    }

export default ToDoItem;