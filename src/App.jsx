import { useRef } from "react";
import { useState } from "react"


function App() {

  const [text, setText] = useRef();
  const [todo, setTodo] = useState([]);



  function addTodo(event) {
    event.preventDefault();
    console.log(text);
    setTodo([...todo, text]);
    console.log(todo);
    setText("");
  }

  const deleteTodo = (index)=>{
    todo.splice(index, 1);
    setTodo([...todo]);
  }

  const editTodo = (index)=>{
    const updatedTodo = prompt("Edit Todo");
    todo.splice(index, 1, updatedTodo);
    setTodo([...todo]);
  }

  return (
    < >

      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Enter Todo" onChange={(e) => setText(e.target.value)} Ref={text} />
        <button type="submit">Add Todo</button>
        <ul>
          {todo.map((item, index) => {
            return <div key={index} >
              <li>{item}</li>
              <button onClick={() => deleteTodo(index)}>Delete</button>
              <button onClick={() => editTodo(index)}>Edit</button>
            </div>
          })}
        </ul>





      </form>

    </ >
  )
}

export default App
