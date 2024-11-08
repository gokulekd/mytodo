import React from 'react'
import './InputText.css'
import  Todocard from '../Todo card/TodoCard.jsx'
import { useState } from 'react'

function InputText() {
    const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (inputValue.trim()) { 
      setItems([...items, inputValue]); 
      setInputValue(''); 
    }
  };
      
    return (
        <div className="App">
        <h1>Add your task here</h1>
       
        <form onSubmit={handleSubmit}>  
          <input
            type="text" 
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something..."
            className="inputTextField"
          />
          <br />
          <button type="submit" className="form-button">Add to List</button>
        </form>


          {items.map((item, index) => (
          <Todocard title = {item}/>
          ))}
      
 
      </div>
     );
}

export default InputText
