import React from 'react'
import CharCard from './CharCard'
function Characters({items,isLoading}) {
    return isLoading ? (<h1>Loading Data...</h1>): (
        <section className="cards">
            {items.map(item=>(
            <CharCard key={item.char_id}item ={item}></CharCard>
            )
            )}
        </section>
    )
    
}

export default Characters
