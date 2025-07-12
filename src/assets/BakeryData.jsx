
import { useEffect, useState, createContext } from "react";
import axios from "axios";


export const Data2Send=createContext();

const BakeryData = ({children}) => {
    const api_url="https://bakinlane-server.netlify.app/.netlify/functions/api/products";
    const [bakeryData, setBakeryData] = useState([]);
    const [filteredBakeryData, setFilteredBakeryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    

    useEffect(() => {
    // Fetch users using axios
    const fetchProducts = async () => {
      try {
        const response = await axios.get(api_url);
        setBakeryData(response.data.products);        //save data to array
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

    // filtering input
    const filterInp=(inp)=>{
      const sortInp=bakeryData.filter(data=>data.title.toLowerCase().includes(inp))
      inp==="" ? setFilteredBakeryData(bakeryData):setFilteredBakeryData(sortInp);      
    }
 
  
    return (
      <Data2Send.Provider value={{bakeryData,setBakeryData,filteredBakeryData,setFilteredBakeryData,loading,error,filterInp}}>
        {children}
      </Data2Send.Provider>
    )
  
  

}

export default BakeryData;

