import React from 'react';
import { connect } from "react-redux";

const ToDoList = ({ messageVisibility }) => {
    return (
        <div>
            { messageVisibility &&
                <h1>My To DO</h1>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    messageVisibility: state.message.messageVisibility,
});

export default connect(mapStateToProps)(ToDoList);