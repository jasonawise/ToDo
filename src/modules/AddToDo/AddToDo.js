import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToDo } from "./actions/actions";

const AddToDo = ({ messageVisibility, addToDo }) => {
    return (
        <div>
            {messageVisibility &&
                <h1>Add To Do</h1>
            }
            <button onClick={addToDo}>Add Me</button>
        </div>
    );
};

const mapStateToProps = state => ({
    messageVisibility: state.message.messageVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addToDo, }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
