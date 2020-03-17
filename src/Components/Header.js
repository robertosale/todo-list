import React, { Component } from 'react';
import List from './List';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {value:"",
                        tasks: []}
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.state.tasks.push(this.state.value);
        //this.setState({tasks: array})
        this.setState({value:""});
        

    }

    handleChange = (event) => { 
        this.setState({value: event.target.value})
        

    };
               
    


    render() { 
        return ( 
            <div>
                <h1>{this.props.title}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <button type="submit" >Add Task</button>
                </form>

                <List tasks={this.state.tasks} />

                
            </div>
         );
    }
}
 
export default Header;