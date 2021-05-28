import React, { Component } from 'react'


 class Todo extends Component {


    render() {
        return (
            <div>
                <h1>hello from Todo</h1>
                <h2>{this.props.changingData}</h2>
            </div>
        )
    }
}
export default Todo;

