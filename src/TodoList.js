import React from 'react'

const TodoList = ({todolist,deleteHandler}) => {
  return (
    <div>
      {todolist.map((todo,index) => 
      <div key={index}>
        <h5>
          {todo} &nbsp; 
          <button class="delete-btn" onClick={()=> deleteHandler(index)}>Delete</button>
        </h5>

      </div> )}
      
    </div>
  )
}

export default TodoList
