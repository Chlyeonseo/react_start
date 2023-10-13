import React from 'react'

function Pop({ setOpen, children }) {
    return (
        <aside className="pop">
            <div className="con">{children}</div>
            <span className='close'
                onClick={() => setOpen(false)}
            >close</span>
        </aside>
    )
}

export default Pop