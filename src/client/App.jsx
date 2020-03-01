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
            deleteList:[],
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
        let deleteList = this.state.deleteList;
        let deleted = todoList.splice(parseInt(index), 1);
        deleteList.push(deleted[0]);
        this.setState({todoList: todoList, deleteList: deleteList});
}
setTodoListUpdate(task){
   // let tasks = this.props.todoList.filter(data=> data.date == task.date);
   // tasks.date = moment().format('MM/DD/YYYY HH:mm:ss').toString();
   // this.setState({todoList: tasks});
}
render() {
    const addNewTask = todo =>{
        this.setTodoList(todo);
    }
    const deleteTodoList = taskIndex =>{
        this.setDeleteTodoList(taskIndex);
    }
    const updateTodoList = task=>{
        this.setTodoListUpdate(task);
    }
    //display todolist if it's not empty
    let displayTasks = ""
    if(this.state.todoList.length !== 0 || this.state.deleteList.length !==0){
        displayTasks = <ItemList todoList={this.state.todoList} deleteList={this.state.deleteList} setDeleteTodoList={deleteTodoList} setTodoList={updateTodoList}></ItemList>
    }

    return (
      <div>
        <Form setTodoList={addNewTask} errorMsg={this.state.errorMsg}></Form>
        {displayTasks}
      </div>
      );
    }
}

export default hot(module)(App);