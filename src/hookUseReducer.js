import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById("root")
const initial = {
    name: "lgp",
    age: 18,
    king: "汉族"
}
const reducer = (state, action) => {
    if (action.type === "name") {
        return {...state, name: action.name}
    } else if (action.type === "age") {
        return {...state, age: action.age}
    } else if (action.type === "king") {
        return {...state, king: action.king}
    } else if (action.type === "reset") {
        return {...initial}
    } else {
        throw new Error('Unknown type')
    }
}

const App = () => {
    const [state, action] = React.useReducer(reducer, initial)
    const name = (e) => {
        action({type: "name", name: e.target.value})
    }
    const age = (e) => {
        action({type: "age", age: e.target.value})
    }
    const king = (e) => {
        action({type: "king", king: e.target.value})
    }
    const reset = () => {
        action({type:"reset"})
    }
    return (
        <>
            <form>
                <label>
                    <span>姓名</span><input type="text" value={state.name} onChange={name}/>
                </label>
                <br/>
                <label>
                    <span>年龄</span><input type="text" value={state.age} onChange={age}/>
                </label>
                <br/>
                <label>
                    <span>民族</span><input type="text" value={state.king} onChange={king}/>
                </label>
                <br/>
                <button type="submit">提交</button>
                <button onClick={reset}>重置</button>
            </form>
            <span>{state.name}</span>; <span>{state.age}</span> ;<span>{state.king}</span>
        </>
    )
}
ReactDOM.render(<App/>, root)