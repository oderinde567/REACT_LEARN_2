

export const Counter: React.FC {
 const [count, setCount] = useState<number>(0);
 const handleIncrement = () => {
    setCount(count + 1)
 }
 return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={handleIncrement}>
            Increment +
        </button>
    </div>
 );
};

const styles ={
    card: {
        border: '1px solid #ccc',
        borderRadus: '8px'
    }
}