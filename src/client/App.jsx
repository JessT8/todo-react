import React from 'react';
import { hot } from 'react-hot-loader';
class TodoList extends React.Component {
  render() {
    var displayList = this.props.values.map(list=> {
        return <li>{list}</li>
    });
    return (
      <ol>
        {displayList}
      </ol>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
            todo : "",
            todoList: [],
        }
  }
  create() {
    let newTodo = this.state.todoList;
    newTodo.push(this.state.todo);
    this.setState({todoList:newTodo, todo:""});
  }

  changeHandler(event){
    this.setState({todo:event.target.value});
    console.log("change", event.target.value);
  }

  render() {
    return (
      <div>
        <TodoList values={this.state.todoList} />
        <div className="item">
        <input onChange={(event)=>{this.changeHandler(event); } }value ={this.state.todo}/>
        <button onClick={()=>{this.create()}}>Add to list</button>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);