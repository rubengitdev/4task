import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

const App = () => {
    const [todo, setTodo] = useState<string>('');

    console.log(setTodo);

    return (
        <div className="App">
            <span className="heading">4Task</span>

            <InputField todo={todo} setTodo={setTodo} />
        </div>
    );
};

export default App;
