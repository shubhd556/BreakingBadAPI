import React,{useState} from 'react'
import CharCard from './CharCard'
import Spinner from './Spinner'
import ReactPaginate from 'react-paginate'
function Characters({items,isLoading}) {
    const [pageNumber,setPage]=useState(0)

    const userperPage = 10
    const pagesvisited = pageNumber*userperPage
    const displayUsers = items.slice(pagesvisited, pagesvisited+userperPage)
    .map(item=>(
        <CharCard key={item.char_id} item ={item}></CharCard>
    ));
    const pageCounti = Math.ceil(items.length/userperPage);
    const changePage = ({selected})=>{
        setPage(selected);
    }
    return isLoading ? (<Spinner/>): (
        <div>
        <section className="cards">
           {displayUsers}
           </section>
           <ReactPaginate
           previousLabel={"Prev"}
           nextLabel={"Next"}
           pageCount={pageCounti}
           onPageChange={changePage}
           containerClassName={"paginationBtn"}
           previousLinkClassName={"previousBtn"}
           nextLinkClassName={"nextBtn"}
           disabledClassName-={"paginationDisabled"}
           activeClassName={"activepagination"}
           />
        </div>
    )
    
}

export default Characters
