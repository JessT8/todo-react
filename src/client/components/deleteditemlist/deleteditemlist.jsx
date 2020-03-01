import React from 'react';

class DeletedItemList extends React.Component {
    constructor(){
        super();
        this.state = {
            todo: {}
        };
    }

    render() {
        console.log("in delete",this.props.list);
        return (
            <tr><th scope="row">{this.props.index+1}</th><td>{this.props.list.date}</td><td>{this.props.list.task}</td></tr>)
        }
    }

export default DeletedItemList;