import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toogleMessage } from "./actions/actions";

const AddToDo = ({ messageVisibility, toogleMessage }) => {
    return (
        <div>
            {messageVisibility &&
                <h1>Add To Do</h1>
            }
            <button onClick={toogleMessage}>Add Me</button>
        </div>
    );
};

const mapStateToProps = state => ({
    messageVisibility: state.message.messageVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({ toogleMessage, }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
