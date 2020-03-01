import React from 'react';

class DeletedItemList extends React.Component {
    constructor(){
        super();
        this.state = {
            todo: {}
        };
    }

    render() {
        return (
            <tr><th scope="row">{this.props.index+1}</th><td>{this.props.list.date}</td><td>{this.props.list.task}</td></tr>)
        }
    }

export default DeletedItemList;