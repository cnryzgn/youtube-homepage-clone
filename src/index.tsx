import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './styles/App.css'

const root: ReactDOM.Root = ReactDOM.createRoot(
    document.querySelector('#root') as HTMLElement
)

root.render(
    <App />
)