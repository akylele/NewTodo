import React,{useState} from 'react';



export default function TodoItem({ todo, del, select }) {
  const [readonly,setReadonly] = useState(true)
  const classDone = []

  if (todo.check) {
    classDone.push('done')
  }

  return (
    <li className="todo_item" id={todo.id}>
      <input type="checkbox" checked={todo.check} onChange={() => { select(todo.id) }} />
      <input type="text" readOnly={readonly} onDoubleClick={()=>{setReadonly(false)}} defaultValue={todo.name} className={classDone} />
      <button onClick={() => { del(todo.id) }}>&#10006;</button>
    </li>
  );
}


