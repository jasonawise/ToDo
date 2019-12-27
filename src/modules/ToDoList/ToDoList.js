import React from 'react';
import { connect } from "react-redux";

const ToDoList = ({ messageVisibility, todo}) => {
    return (
        <div>
            { messageVisibility &&
                <h1>{todo}</h1>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    messageVisibility: state.message.messageVisibility,
    todo: state.message.todo
});

export default connect(mapStateToProps)(ToDoList);