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
                    <li key={task.id}>
                        <div id={task.id} onClick={this.deleteTask}>✖</div>
                        {task.num}: {task.text}
                    </li>
                    );
                })}
            </ul>
        );
    };
};

export default Overview;