import './App.css';
import logo from './logo.svg';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';

const todoStart = [
  {
    id:0,
    title: "lager Middag",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  }
]

function App() {
  const [todo, setTodo] = useState({title: "", content: ""})
  const [todos, setTodos] = useState([...todoStart])
  const [id, setId] = useState(1)
  const addToDo = (event) =>{
    const inputName = event.target.name
    const inputValue = event.target.value
    setTodo((prev)=> ({...prev, [inputName]: inputValue}))
  }

  const handleClick = () => {
    setId((prev)=> prev + 1)
    setTodos((prev)=> [
      {id, title: todo.title, content: todo.content}, ...prev
    ])
  }

  const removeToDos = (todoid) => {
    setTodos(todos.filter((item)=> item.id !== todoid))
  } 

  return (
    <>
    <Navbar />
    <section className='container'>
    <Form handleClick={handleClick} addToDo={addToDo} todo={todo}/> 
    </section>
    <Todos todoStart={todos} removeToDos={removeToDos}/>
    </>
  );
}

export default App;