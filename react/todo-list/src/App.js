import './App.css';
import { createRef, useState } from 'react'
import Test from './Test'
// JSX
const todoDefault = [
  {
    text: 'eat',
    done: false,
  },
  {
    text: 'slepp',
    done: false,
  },
]
function App() {
  const [todos, setTodos] = useState(todoDefault) // [响应式数据，修改数据的方法]
  const ref = createRef()
  const arr = [1, 2, 3]
  const handleClick = () => {
    // ref.current DOM 节点
    let val = ref.current.value
    const newTodo = todos.concat({ text: val, done: false })
    setTodos(newTodo)
    console.log(val);
  }
  const delItem = (i) => {
    let newTodos = todos.slice(0)
    newTodos.splice(i, 1)
    setTodos(newTodos)  // 显示调用一下 更改数据的Api, 没有监听数据 get set
  }

  return (
    <>
      <Test name="小米" age={18} onMessage={(msg) => {
        console.log(msg)
      }}></Test>
      <input type="text" ref={ref} />
      <button onClick={handleClick}
        ref={(el) => {
          console.log(el);
        }}
      >添加待办事项</button>
      {
        todos.map((todoItem, i) => {
          return <li key={i} onClick={() => {
            delItem(i)
          }}>{todoItem.text}</li>
        })
      }
      { arr}
      { console.log(1)}

    </>
  );
}

export default App;
