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

setDeleteTodoList(index){
        let todoList = this.state.todoList;
        todoList.splice(parseInt(index), 1);
        this.setState({todoList: todoList});
}

render() {
    let displayError;
    if (this.state.errorMsg != "") {
        displayError = (<p className="warning">{this.state.errorMsg}</p>);
    }else {
        displayError = "";
    }
    const addNewTask = todo =>{
        this.setTodoList(todo);
    }
    const deleteTodoList = taskIndex =>{
        this.setDeleteTodoList(taskIndex);
    }
    //display todolist if it's not empty
    let displayTasks = ""
    if(this.state.todoList.length !== 0 ){
        displayTasks = <ItemList todoList={this.state.todoList} setDeleteTodoList={deleteTodoList}></ItemList>
    }

    return (
      <div>
        <div>
            {displayError}
        </div>
        <Form setTodoList={addNewTask}></Form>
        {displayTasks}
      </div>
      );
    }
}

export default hot(module)(App);