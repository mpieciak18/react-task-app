import React from 'react';

class Overview extends React.Component {
    constructor(props) {
        super(props);
    };

    deleteTask = (e) => {
        this.props.deleteTask(e)
    }

    render() {
        return (
            <ul>
                {this.props.tasks.map((task) => {
                    return (
                    <li key={task.id} id={task.id}>
                        <div onClick={this.deleteTask}>✖</div>
                        {/* if (condition satisfied) render '{task.num}: {task.text}' */}
                        {/* else render '<input />' */}
                        {task.num}: {task.text}
                        {/* if (condition satisfied) set button type to button */}
                        {/* else set button type to submit' */}
                        <button></button>
                    </li>
                    );
                })}
            </ul>
        );
    };
};

export default Overview;