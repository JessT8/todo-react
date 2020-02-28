import React from 'react';
import TodoItem from '../todoitem/todoitem';
class ItemList extends React.Component {
    constructor(){
        super();
        this.state = {
        };
    }
    setDelete(index) {
        this.props.setDeleteTodoList(parseInt(index));
    }
    render() {
        const deleteTask = index=>{
            this.setDelete(index);
        }
        var displayList = this.props.todoList.map((list,index)=> {
              return <React.Fragment key={index.toString()}><TodoItem index={index} list={list} delete={deleteTask}></TodoItem></React.Fragment>
        });
        return (
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
        }

export default ItemList;