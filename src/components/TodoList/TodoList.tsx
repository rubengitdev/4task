import type { Todo } from '../../types/model';
import './TodoList.css';
import TodoCard from '../common/TodoCard/TodoCard';

interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
    return (
        <div className="todos">
            {todos.map((todo) => (
                <TodoCard
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </div>
    );
};

export default TodoList;
