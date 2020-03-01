import React from 'react';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            todo: ""
        };
    }

    inputChange(currentInput){
        this.setState({todo: currentInput});
    }

    addToDo(){
        this.props.setTodoList(this.state.todo);
        this.setState({todo: ""});
    }

    render() {
        let displayError;
        if (this.props.errorMsg != "") {
            displayError = (<p className="warning">{this.props.errorMsg}</p>);
        }else {
            displayError = "";
        }
        return (
                <div className="item mt-5">
                    <input className="form-control mb-3"
                        onChange={(event)=>{this.inputChange(event.target.value)}}
                        value={this.state.todo}/>
                    <button className="btn btn-success mb-3"
                        onClick={()=>{this.addToDo()}}>
                        Add to list
                    </button>
                    {displayError}
                </div>
                );
             }
}

export default Form;