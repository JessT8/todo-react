import React from 'react';
import { hot } from 'react-hot-loader';
var moment = require('moment');


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todo : "",
            todoList: [],
            errorMsg : "",
    }
}

delete(event) {
    let todoList = this.state.todoList;
    todoList.splice(parseInt(event.target.value), 1);
    this.setState({todoList: todoList});
}

create() {
    let newTodo = this.state.todo;
    if(newTodo.length > 1 && newTodo.length < 200) {
        let newTodoList = this.state.todoList;
        let currentDate= moment().format('MM/DD/YYYY HH:mm:ss').toString();
        newTodoList.push({task:newTodo, date:currentDate});
        this.setState({todoList:newTodoList, todo:"", errorMsg:""});
    }else {
        let errorMsg = "Wrong input! Need to be more than 1 letter and less than 200 letters";
        this.setState({errorMsg:errorMsg, todo:""});
    }
}

changeHandler(event) {
    this.setState({todo:event.target.value});
    console.log("change", event.target.value);
}

render() {
    let displayError;
    if (this.state.errorMsg != "") {
        displayError = (<p className="warning">{this.state.errorMsg}</p>);
    }else {
        displayError = "";
    }
    let counter = 0;
    var displayList = this.state.todoList.map(list=> {
        counter ++;
        return <tr><th scope="row">{counter}</th><td> {list.task}</td><td>{list.date}</td><td><button className="btn btn-danger"onClick={(event)=>{this.delete(event)}} value={counter-1}>Remove</button></td></tr>
    });
    let displayTable = "";
    if (displayList != "") {
        displayTable = (
        <table className="table table-borderless">
          <thead>
            <tr>
                <th scope="col">No.</th>
                <th scope="col">Tasks</th>
                <th scope="col">Date</th>
                <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {displayList}
          </tbody>
        </table>);
    }
    return (
      <div>
        <div>
            {displayError}
            {displayTable}
        </div>
        <div className="item mt-5">
            <input className="form-control mb-3" onChange={(event)=>{this.changeHandler(event); } }value ={this.state.todo}/>
            <button className="btn btn-success" onClick={()=>{this.create()}} >Add to list</button>
        </div>
      </div>
      );
    }
}

export default hot(module)(App);