import TodoShow from "./TodoShow";

function TodoList({todo , onDelete}) {

    const renderedTodo = todo.map((todo) => {
        return <TodoShow onDelete={onDelete} key={todo.id} todo={todo}/>
    });
    return <div className="book-list">{renderedTodo}</div>;
}


export default TodoList;