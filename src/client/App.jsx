import React from 'react';
import { hot } from 'react-hot-loader';
class TodoList extends React.Component {
  render() {
    var displayList = this.props.values.map(list=> {
        return <p>{list}</p>
    });
    return (
      <div>
        {displayList}
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
            todo : "",
            todoList: []
        }
  }
  create() {
    let newTodo = "";
    newTodo = this.state.todoList;
    newTodo.push(this.state.todo);
    this.setState({todo:""});
  }
  changeHandler(event){
    this.setState({todo:event.target.value});
    console.log("change", event.target.value);
  }

  render() {
    return (
      <div>
        Welcome.
        <TodoList values={this.state.todoList} />
        <div className="item">
        <input onChange={(event)=>{this.changeHandler(event); } }value ={this.state.todo}/>
        </div>
        <button onClick={()=>{this.create()}}>Create</button>
      </div>
    );
  }
}

export default hot(module)(App);