import React from 'react';
import { hot } from 'react-hot-loader';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
            todo : "",
            todoList: [],
            errorMsg : ""
        }
  }

    delete(event){
       let todoList = this.state.todoList;
       todoList.splice(parseInt(event.target.value), 1);
       this.setState({todoList: todoList});
     }

  create() {
    let newTodo = this.state.todo;
    if(newTodo.length > 1 && newTodo.length < 200){
        let newTodoList = this.state.todoList;
        newTodoList.push(newTodo);
        this.setState({todoList:newTodoList, todo:"", errorMsg:""});
    }else
    {
        let errorMsg = "Wrong input! Need to be more than 1 letter and less than 200 letters";
         this.setState({errorMsg:errorMsg, todo:""});
    }
  }

  changeHandler(event){
    this.setState({todo:event.target.value});
    console.log("change", event.target.value);
  }

  render() {
    let displayError;
    if (this.state.errorMsg != ""){
        displayError = (<p className="warning">{this.state.errorMsg}</p>);
    }else{
        displayError = "";
    }
    let counter = -1;
    var displayList = this.state.todoList.map(list=> {
        counter ++;
        return <li>{list}<button onClick={(event)=>{this.delete(event)}} value={counter}>Delete</button></li>
    });
    return (
      <div>
        {displayError}
        <ol>
            {displayList}
        </ol>
        <div className="item">
        <input onChange={(event)=>{this.changeHandler(event); } }value ={this.state.todo}/>
        <button onClick={()=>{this.create()}}>Add to list</button>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);