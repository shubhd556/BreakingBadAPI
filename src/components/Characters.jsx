import React from 'react'
import CharCard from './CharCard'
import Spinner from './Spinner'
function Characters({items,isLoading}) {
    return isLoading ? (<Spinner/>): (
        <section className="cards">
            {items.map(item=>(
            <CharCard key={item.char_id}item ={item}></CharCard>
            )
            )}
        </section>
    )
    
}

export default Characters
