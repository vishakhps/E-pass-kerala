import React, { Component } from 'react'

export default class Print extends Component {
   Print = () =>{
       window.print()
   };
    render() {
        return (
            <div>
                <button onClick={this.Print} className="printBtn">Print</button>
            </div>
        )
    }
}
