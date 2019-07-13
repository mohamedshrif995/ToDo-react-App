import React, { Component } from 'react';
import Todos from './Todos'
import Addtodo from './Addtodo'


class App extends Component {
  state = {
    todos: [
      {  content: 'walk up',id:1 },
      {  content: 'have abreak fast',id:2 }

    ]
  }

DelateTodo=(id)=>{
  const delateTods=this.state.todos.filter(todo=>{
  return todo.id!==id
  })
  this.setState({
    todos:delateTods
  })
}
Addtodos=(todo)=>{
  todo.id=Math.random()
  let AddNewTodo=[...this.state.todos,todo]
  this.setState({
    todos:AddNewTodo
  })
 
  console.log('my state',this.state )
}
  render() {
  console.log('my ',this.state )

    return (
      <div className="todo-app container">
        <h1 className="center blue-text">todo's</h1>
              <Todos todos={this.state.todos} DelateTodo={this.DelateTodo}/>
              <Addtodo AddTodo={this.Addtodos}/>
        
      </div>
    );
  }
}

export default App;
