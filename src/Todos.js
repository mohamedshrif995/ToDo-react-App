import React from 'react'

const Todos = ({todos,DelateTodo}) => {
    const TodoList=todos.length?(
        todos.map(todo=>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span>
                        {todo.content}
                    </span>
                    <button onClick={()=>{DelateTodo(todo.id)}}>delate</button>
                </div> 
            )
        })
    ):(
        <p className="center">please add things to do</p>
    )
    return (
       <div className="todos collection">
          {TodoList}
       </div>
    )
}

export default Todos
