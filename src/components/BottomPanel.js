import React from 'react';


export default function BottomPanel({ length, del_all }) {
    return (
        <div className="bottom_panel">
            <span> {length} items left</span>
            <div className="filters">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <button onClick={del_all}>Del</button>
        </div>
    );
}

