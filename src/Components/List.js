import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log("PROPS::::::::",this.props.tasks);

        return (
            <ul>
                {this.props.tasks.map(element => {
                    return <li>{element}</li>
                    
                })}

            </ul>


          );
    }
}
 
export default List;