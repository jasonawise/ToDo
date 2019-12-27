import React, { Component } from "react";
import { connect } from "react-redux";

const AddToDo = ({ messageVisibility, dispatch }) => {
    return (
        <div>
            {messageVisibility &&
                <h1>Add To Do</h1>
            }
            <button>Add Me</button>
        </div>
    );
};

const mapStateToProps = state => ({
    messageVisibility: state.message.messageVisibility,
});

// const mapDispatchToProps =

export default connect(mapStateToProps)(AddToDo);
