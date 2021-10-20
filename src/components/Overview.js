import React from 'react';

class Overview extends React.Component {
    constructor(props) {
        super(props);
    };

    deleteTask = (e) => {
        this.props.deleteTask(e)
    }

    startEdit = (e) => {
        this.props.startEdit(e)
    }

    handleEdit = (e) => {
        this.props.handleEdit(e)
    }

    onSubmitEdit = (e) => {
        this.props.onSubmitEdit(e)
    }

    render() {
        return (
            <ul>
                {this.props.tasks.map((task) => {
                    let listItem;

                    if (task.beingEdited != true) {
                        listItem = (
                            <div id={task.num}>
                                <div onClick={this.deleteTask}>✖</div>
                                <div>{task.num}: {task.text}</div>
                                <button type='button' onClick={this.startEdit}>edit</button>
                            </div>
                        )    
                    } else {
                        listItem = (
                            <form id={task.num} onSubmit={this.onSubmitEdit}>
                                <div onClick={this.deleteTask}>✖</div>
                                <input value={task.text} type='text' onChange={this.handleEdit}></input>
                                <button type='submit'>submit</button>
                            </form>
                        )
                    }                

                    return (
                    <li key={task.id} id={task.id}>
                        {listItem}
                    </li>
                    );
                })}
            </ul>
        );
    };
};

export default Overview;