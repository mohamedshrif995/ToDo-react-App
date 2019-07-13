import React, { Component } from 'react'

export class Addtodo extends Component {
    state = {
        content: ''
    }
    handlerChange = key => {
        this.setState({
            [key.target.id]: key.target.value
        })
     
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log('content', this.state)
        this.props.AddTodo(this.state)
           this.setState({
            content:''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Addtodo</label>
                    <input type='text' name='todo' id='content' onChange={this.handlerChange} value={this.state.content}/>
                    <button onSubmit={this.handleSubmit}> Add todo</button>
                </form>
            </div>
        )
    }
}

export default Addtodo
