import React, { useEffect, useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import BottomPanel from './components/BottomPanel';


function App() {
  const [todos, setTodos] = useState([])
  let [length, setLength] = useState(0)

  useEffect(() => {
    let left_todo = todos.filter(todo => !todo.check)
    setLength(left_todo.length)
  }, [todos])

  useEffect(() => {
    if (localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function selected_todo(id) {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.check = !todo.check
      }
      return todo
    })
    )
  }

  function new_todo(name) {
    setTodos(todos.concat([{
      id: Date.now(),
      name: name,
      check: false
    }]));
  }

  function del_todo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function take_all() {
    switch (todos.every(todo => todo.check === true)) {
      case true:
        setTodos(todos.map((todo) => {
          todo.check = false
          return todo
        }))
        break;
      case false:
        setTodos(todos.map((todo) => {
          todo.check = true
          return todo
        }))
        break;
      default:
        setTodos(todos.map((todo) => {
          todo.check = true
          return todo
        }))
    }
  }

  function deleteAllTodos(){
    setTodos(todos.filter(todo => !todo.check))
  }
  
    return (
      <div>
        <h3>TODOS</h3>
        <div className="main_app">
          <NewTodo add={new_todo} all={take_all} />
          <TodoList todos={todos} del={del_todo} select={selected_todo} />
          {todos.length ? <BottomPanel length={length} del_all={deleteAllTodos}/> : null}
        </div>
      </div>
    );
  }

  export default App;
