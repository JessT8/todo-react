import React, {Fragment} from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';

import ItemList from './components/itemlist/itemlist';

var moment = require('moment');

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todoList: [],
            errorMsg : "",
    }
}

delete(event) {
    let todoList = this.state.todoList;
    todoList.splice(parseInt(event.target.value), 1);
    this.setState({todoList: todoList});
}

setTodoList(newTodo) {
   if(newTodo.length > 1 && newTodo.length < 200){
        let newTodoList = this.state.todoList;
        let currentDate= moment().format('MM/DD/YYYY HH:mm:ss').toString();
        newTodoList.push({task:newTodo, date:currentDate});
        this.setState({todoList:newTodoList, errorMsg:""});
     }else {
        let errorMsg = "Wrong input! Need to be more than 1 letter and less than 200 letters";
         this.setState({errorMsg:errorMsg});
     }
}

render() {
    let displayError;
    if (this.state.errorMsg != "") {
        displayError = (<p className="warning">{this.state.errorMsg}</p>);
    }else {
        displayError = "";
    }
    let counter = 0;
    var displayList = this.state.todoList.map((list,index)=> {
        counter ++;
        return <Fragment><tr key={index}><th scope="row">{counter}</th><td> {list.task}</td><td>{list.date}</td><td><button className="btn btn-danger"onClick={(event)=>{this.delete(event)}} value={counter-1}>Remove</button></td></tr></Fragment>
    })

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

    const addNewTask = todo =>{
        this.setTodoList(todo);
    }
    return (
      <div>
        <div>
            {displayError}
            {displayTable}
        </div>
        <Form setTodoList={addNewTask}>
        </Form>
      </div>
      );
    }
}

export default hot(module)(App);