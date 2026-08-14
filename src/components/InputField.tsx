import './styles.css';

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: InputFieldProps) => {
    return (
        <form className="input" action="">
            <input
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
