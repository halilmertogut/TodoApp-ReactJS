import { useState } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

function App() {
    const [todo, setTodo] = useState([]);

    const deleteBooksById = (id) =>{
        const updatedTodo = todo.filter((todo) => {
            return todo.id !== id;
        })
        setTodo(updatedTodo);
    };
    const createTodo = (txt) =>
 {
    //console.log(txt);

    const updatedTodo = [
        ...todo,
        {id:Math.round(Math.random()*9999),
        txt}
    ];
    setTodo(updatedTodo);
 }

    return (
    <div className="app">
        <TodoList todo={todo} onDelete={deleteBooksById} />
        <TodoCreate onCreate={createTodo}  />
    </div>
    );
}

export default App