import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById("root")
const App = () => {
    const [user, setUser] = React.useState({name: "lgp", password: "123"})
    const [n,setN]=React.useState(0)
    const name = (e) => {
        setUser(()=>{
            return {
                ...user,
                name:  e.target.value
            }
        })
    }
    const password = (e) => {
        setUser(()=>{
            return{
                ...user,
                password:e.target.value
            }
        })
    }
    const reset=()=>{
        setUser(()=>{
            return{
                ...user
            }
        })
    }
    const add=()=>{
        setN((x)=>x+1)
        setN((x)=>x+1)
    }
    return (
        //onSubmit=(e)=>e.preventDefault() 阻止默认事件
        <div>
            <form >
                <label>
                    <span>用户名:</span>
                    <input type="text" value={user.name} onChange={name}/>
                </label>
                <br/>
                <label>
                    <span>密码:</span>
                    <input type="password" value={user.password} onChange={password}/>
                </label>
                <br/>
                <button type="submit" style={{color:"red"}}>提交</button>
                <button onClick={reset} style={{color:"blue"}}>重置</button>
            </form>

            <div>用户名：{user.name}</div>
            <div>密码：{user.password}</div>
            <hr/>
            <div>{n}</div>
            <button onClick={add}>+1</button>
        </div>
    )
}
ReactDOM.render(<App/>, root)