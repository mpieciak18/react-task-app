import React from 'react';
import './Overview.css'

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
    /* margin-top: 30px; */

    render() {
        return (
            <ul id='unorderedList'>
                {this.props.tasks.map((task) => {
                    let listItemContents;

                    if (task.beingEdited != true) {
                        listItemContents = (
                            <div id={task.num} className='listItemContents'>
                                <div className='xButton' onClick={this.deleteTask}>✕</div>
                                <div className='taskNum'>{task.num}:</div>
                                <div className='taskText'>{task.text}</div>
                                <button className='editButton' type='button' onClick={this.startEdit}>edit</button>
                            </div>
                        )    
                    } else {
                        listItemContents = (
                            <form id={task.num} className='listItemContents' onSubmit={this.onSubmitEdit}>
                                <div onClick={this.deleteTask}>✖</div>
                                <input value={task.text} type='text' onChange={this.handleEdit}></input>
                                <button type='submit'>submit</button>
                            </form>
                        )
                    }                

                    return (
                    <li key={task.id} id={task.id} className='listItem'>
                        {listItemContents}
                    </li>
                    );
                })}
            </ul>
        );
    };
};

export default Overview;