import React from 'react';

export default function NewTodo({ add, all }) {

    function add_todo(e) {
        if (e.which === 13) {
            let text = e.target.value
            add(text)
            e.target.value = ''
        }
    }




    return (
        <div className="new_todo">
            <span onClick={()=>{all()}}>&#10003;</span>
            <input type="text" id="input_new_todo" onKeyDown={add_todo} placeholder="What do you want to do?" />
        </div>
    );
}

