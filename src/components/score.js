const Score = (props) => {
    return (
        <div>
        <h2>Score: {props.score}</h2>
        <button onClick={props.handleDecrease} className="decrease">Decrease</button>
        <button onClick={props.handleIncrease} className="increase">Increase</button>
        <button onClick={props.handleReset} className="decrease">Reset</button>
        </div>
    )
}

export default Score