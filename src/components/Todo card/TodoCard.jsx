import React from 'react'
import './TodoCard.css'

function TodoCard(props) {
  return (
    <div className='TodoMainDiv'>
       
         
      <h2>
        {props.title}
      </h2>

   
    </div>
  )
}

export default TodoCard
