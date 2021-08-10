import React, { useState } from 'react'

function Search({ getQuery }) {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    return (
        <section className="search">
            <form>
                <input
                    type="text"
                    className="formi"
                    style={{ border: "3px solid grey", borderRadius: "20px" }}
                    placeholder="Search for Character"
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search
