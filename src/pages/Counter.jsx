const Counter = ({ counter, increment, decrement }) => {
    return (
        <div>
            <button type="button" onClick={increment}>Plus</button>
            <button type="button" onClick={decrement}>Minus</button>
            <h1>{counter}</h1>
        </div>
    )
}


export default Counter