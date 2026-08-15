import { useRef } from 'react';
import './componentStyles.css';

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.SubmitEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className="input"
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}
        >
            <input
                ref={inputRef}
                className="input__box"
                type="input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new Task..."
            />
            <button className="input_submit" type="submit">
                Add
            </button>
        </form>
    );
};

export default InputField;
