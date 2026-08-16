import { useState } from 'react';
import './App.css';
import InputField from './components/common/InputField/InputField';
import type { Todo } from './types/model';
import TodoList from './components/TodoList';

const App = () => {
    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);

    // START FUNCTION: HANDLE ADD (To handle form submit when user add tasks)
    const handleAdd = (e: React.SubmitEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo('');
        }
    };
    // END FUNCTION: HANDLE ADD (To handle form submit when user add tasks)

    return (
        <div className="App">
            <span className="heading">4Task</span>
            <span className="subheading">
                Finish your tasks or you can't pay your bills!
            </span>

            {/* START COMPONENT InputField */}
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            {/* END COMPONENT InputField */}

            {/* START COMPONENT TodoList */}
            <TodoList todos={todos} setTodos={setTodos} />
            {/* END COMPONENT TodoList */}
        </div>
    );
};

export default App;
