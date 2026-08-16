import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import type { Todo } from '../../../types/model';
import './TodoCard.css';
import { useEffect, useRef, useState } from 'react';

interface TodoCardProps {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard = ({ todo, todos, setTodos }: TodoCardProps) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    // START FUNCTION HANDLE EDIT
    const handleEdit = (e: React.SubmitEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, todo: editTodo } : todo,
            ),
        );
        setEdit(false);
    };
    // END FUNCTION HANDLE EDIT

    // START FUNCTION HANDLE DELETE
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    // END FUNCTION HANDLE DELETE

    // START FUNCTION HANDLE DONE
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
            ),
        );
    };
    // END FUNCTION HANDLE DONE

    return (
        <form
            className={`todos__single ${todo.isDone ? 'todos__single--done' : ''}`}
            onSubmit={(e) => handleEdit(e, todo.id)}
        >
            <div className="todo__content">
                {todo.isDone && (
                    <span className="todo__success_mark">
                        <MdDone />
                    </span>
                )}

                {edit ? (
                    <input
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                        className="todos__single--text"
                        ref={inputRef}
                    />
                ) : todo.isDone ? (
                    <s className="todos__single--text">{todo.todo}</s>
                ) : (
                    <span className="todos__single--text">{todo.todo}</span>
                )}
            </div>

            <div className="icon__container">
                {/* START EDIT ICON */}
                <span
                    className="icon edit__icon background"
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}
                >
                    <AiFillEdit />
                </span>
                {/* END EDIT ICON */}

                {/* START COMPLETED ICON */}
                <span
                    className="icon completed__icon background"
                    onClick={() => handleDone(todo.id)}
                >
                    <MdDone />
                </span>
                {/* END COMPLETED ICON */}

                <hr className="divider" />

                {/* START DELETE ICON */}
                <span
                    className="icon delete__icon background"
                    onClick={() => handleDelete(todo.id)}
                >
                    <AiFillDelete />
                </span>
                {/* END DELETE ICON */}
            </div>
        </form>
    );
};

export default TodoCard;
