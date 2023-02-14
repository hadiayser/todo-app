export default function Form({handleClick, todo, addToDo}){
    const handleSubmit = (event) =>{
        event.preventDefault()
        // prevent default gjør at siden ikke refresher, men adder ting
    }
    return (
        <form onSubmit={handleSubmit}>
           <label htmlFor="to-do">To do</label>
           <input
            name="title"
            id="to-do"
            type="text"
            value={todo.addToDo}
            onChange={addToDo}/>
           <label htmlFor="content">Content</label> 
           <textarea
            name="content"
            id="content"
            type="text"
            value={todo.addToDo}
            onChange={addToDo}/>
            <button className="todo-btn" type="submit" onClick={handleClick}>Add to Do</button>
        </form>
    )
}