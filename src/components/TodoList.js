import React from 'react'
import TodoItem from './TodoItem'


export default function TodoList({ todos ,del,select }) {
    return (
        <ul>
            {todos.map(function (todo, index) {
                return <TodoItem
                    key={todo.id}
                    id={index}
                    todo={todo}
                    del={del}
                    select={select}
                />
            })}

        </ul>
    )
}