import { useRef } from "react";
import { useState } from "react"


const App = () => {

  const [todo, setTodo] = useState([]);
  const todoValue = useRef();

  const addTodo = (event) => {

    event.preventDefault();
    console.log(todoValue);
    todo.push(todoValue.current.value);
    setTodo([...todo]);
    console.log(todo);
    todoValue.current.value = "";

  }

  const deleteTodo = (index) => {

    todo.splice(index, 1);
    setTodo([...todo]);
    console.log(todo);

  }

  const editTodo = (index) => {

    const updatedTodo = prompt("Enter Edit Todo");

    if (updatedTodo === "") {
      alert("Try Again!\nPlease Enter new Edited Todo");
      return
    }

    todo.splice(index, 1, updatedTodo);
    setTodo([...todo]);
    console.log(todo);
  }

  return (
    < >

      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Enter Todo" ref={todoValue} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todo.map((item, index) => {
          return <div key={index} >
            <li>{item}</li>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => editTodo(index)}>Edit</button>
          </div>
        })}
      </ul>

    </ >
  )
}

export default App
