import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import type { Todo } from './types/model';

const App = () => {
    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = (e: React.SubmitEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo('');
        }
    };

    return (
        <div className="App">
            <span className="heading">4Task</span>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            {todos.map((t) => (
                <li>{t.todo}</li>
            ))}
        </div>
    );
};

export default App;
