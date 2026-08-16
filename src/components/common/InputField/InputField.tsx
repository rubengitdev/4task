import { useRef } from 'react';
import './InputField.css';

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.SubmitEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        // START FORM INPUT CONTAINER
        <form
            className="input"
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}
        >
            {/* START INPUT FIELD */}
            <input
                ref={inputRef}
                className="input__box"
                type="input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new Task..."
            />
            {/* END INPUT FIELD */}

            {/* START SUBMIT BUTTON */}
            <button className="input_submit" type="submit">
                Add
            </button>
            {/* START SUBMIT BUTTON */}
        </form>
        // END FORM INPUT CONTAINER
    );
};

export default InputField;
