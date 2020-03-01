import React from 'react';
import TodoItem from '../todoitem/todoitem';
import DeleteItemList from '../deleteditemlist/deleteditemlist';
class ItemList extends React.Component {
    constructor(){
        super();
    }
    setDelete(index) {
        this.props.setDeleteTodoList(parseInt(index));
    }
    setTodoList(task){
        this.props.setTodoList(task);
    }
    render() {
        const deleteTask = index=>{
            this.setDelete(index);
        }
        const setTodo = values =>{
            this.setTodoList(values);
        }
        var displayList = this.props.todoList.map((list,index)=> {
              return <React.Fragment key={index.toString()}><TodoItem index={index} list={list} setTodo={setTodo} delete={deleteTask}></TodoItem></React.Fragment>
        });
        var displayDelete = this.props.deleteList.map((list,index)=> {
              return <React.Fragment key={index.toString()}><DeleteItemList index={index} list={list}></DeleteItemList></React.Fragment>
        });
        let displayTodoTable = "";
        let displayDeleteTable = "";
         if(this.props.todoList.length !==0){
            displayTodoTable = (
                <div>
                    <h1>Todo list</h1>
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Date</th>
                            <th scope="col">Tasks</th>
                            <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {displayList}
                      </tbody>
                    </table>
                </div>)

         }
        if(this.props.deleteList.length!==0){
            displayDeleteTable = (
                <div>
                    <h1>Deleted item</h1>
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Date</th>
                                <th scope="col">Tasks</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayDelete}
                        </tbody>
                    </table>
                </div>);
        }
        return (
            <div>
                {displayTodoTable}
                {displayDeleteTable}
            </div>)
            }
        }

export default ItemList;