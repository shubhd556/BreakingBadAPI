import React,{useEffect,useState} from 'react'
import axios from "axios";
import Header from "./Header";
import Search from "./Search";
import Characters from "./Characters";
function Home() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");
    useEffect(() => {
      const fetchItems = async () => {
        const result = await axios(
          `https://www.breakingbadapi.com/api/characters?name=${query}`
        );
  
        setItems(result.data);
        setIsLoading(false);
      };
      fetchItems();
    }, [query]);
    return (
        <div>
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <Characters isLoading={isLoading} items={items} />
        </div>
    )
}

export default Home
