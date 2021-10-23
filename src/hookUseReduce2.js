import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById("root")
const initial = {
    name: "",
    age: "",
    king: "汉族"
}
const reducer = (state, action) => {
    if (action.type === "submit") {
        return {...state, ...action.formDate}
    }
    if (action.type === "reset") {
        return {...initial}
    }
}

const App2 = () => {
    const [state, action] = React.useReducer(reducer, initial)
    const submit = (e) => {
        alert("提交了")
    }
    const reset = () => {
        action({type: "reset"})
    }
    return (
        <>
            <form onSubmit={submit} onReset={reset}>
                <label>
                    <span>姓名</span><input type="text" value={state.name} onChange={(e) => {
                    action({type: "submit", formDate: {name: e.target.value}})
                }}/>
                </label>
                <br/>
                <label>
                    <span>年龄</span><input type="text" value={state.age} onChange={(e) => {
                    action({type: "submit", formDate: {age: e.target.value}})
                }}/>
                </label>
                <br/>
                <label>
                    <span>民族</span><input type="text" value={state.king} onChange={(e) => {
                    action({type: "submit", formDate: {king: e.target.value}})
                }}/>
                </label>
                <br/>
                <button type="submit">提交</button>
                <button type="reset">重置</button>
            </form>
            <span>{state.name}</span> |<span>{state.age}</span>| <span>{state.king}</span>
        </>
    )
}
ReactDOM.render(<App2/>, root)