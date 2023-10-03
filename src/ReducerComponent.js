import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 2
}
const reducer = (state = initialState, { type, value }) => {
    switch (type) {
        case "increment":
            return { ...state, firstCounter: state.firstCounter + value }
        case "decrement":
            return { ...state, firstCounter: state.firstCounter - value }
        case "reset":
            return { firstCounter: 0, secondCounter: 2 }
        case "increment2":
            return { ...state, secondCounter: state.secondCounter + value }
        case "decrement2":
            return { ...state, secondCounter: state.secondCounter - value }
        case "reset":
            return { firstCounter: 0, secondCounter: 2 }
        default:
            return { state }
    }
}

const ReducerComponent = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>{count.firstCounter}</h1>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment by 1</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement by 1</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment by 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement by 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <h1>{count.secondCounter}</h1>
            <button onClick={() => dispatch({ type: "increment2", value: 2 })}>Increment by 2</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 2 })}>decrement by 2</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default ReducerComponent