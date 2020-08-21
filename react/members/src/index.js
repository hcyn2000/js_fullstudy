// 入口文件
import React from "react";  // es6 import
import ReactDOM from 'react-dom'
import "./styles.css"   //css   wxss    global.css
import { MyComponent } from './demo'

// react 语法
function App() {
    return (
        // WXML JSX
        <div className="App">
            App
            <MyComponent />
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)