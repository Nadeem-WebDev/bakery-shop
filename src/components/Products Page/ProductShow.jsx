import Filters from './Filters'
import ProductCard from './ProductCard'
import { useContext, useState, useEffect } from 'react'
import { Data2Send } from '../../assets/BakeryData'


const ProductShow = () => {
    const {bakeryData,loading,error,filteredBakeryData,setFilteredBakeryData,filterInp}=useContext(Data2Send);
    useEffect(() => {
      if (!loading && bakeryData) {
        setFilteredBakeryData(bakeryData);
      } 
    }, [bakeryData]);

    const [currPage, setCurrPage] = useState(1);
    const itemsPerPage=8;
    const startIndex=(currPage-1)*itemsPerPage;
    const totalPages=Math.ceil(filteredBakeryData.length/itemsPerPage);
    const productsToShow=filteredBakeryData.slice(startIndex,startIndex+itemsPerPage);
    
    




  return (
    <div className='flex flex-row flex-wrap justify-between'>
      <Filters filteredBakeryData={filteredBakeryData} setFilteredBakeryData={setFilteredBakeryData} setCurrPage={setCurrPage} />
      <div className='flex flex-col w-[70%] md:w-[85%] border-l'>
        <div className='flex flex-row flex-wrap justify-evenly my-5 gap-5'>
            {
                loading || error ? <h1 className='text-center text-5xl w-full'>Loading...</h1> : productsToShow.map((data)=>(
                    <ProductCard key={data.id} link={data.imageUrl} title={data.title} price={data.price} rating={data.rating} totalRatings={data.totalRatings} />
                ))
            }
        </div>
        <footer className='w-full flex flex-row justify-around mb-5'>
            <button className={`border rounded-xl px-3 py-1  bg-blue-800 hover:bg-blue-900 text-amber-50 ${currPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={(()=>setCurrPage(currPage-1))} disabled={currPage === 1}>Prev</button>

            <div className='flex flex-row justify-center gap-2'>
              {Array.from({length:totalPages}).map((_,idx)=>(
                  <button key={idx} className={`border rounded-xl px-3 py-1 hover:scale-95 ${currPage===idx+1 ? "bg-blue-500":"bg-white"} cursor-pointer`} onClick={()=>setCurrPage(idx+1)}>{idx+1}</button>
              ))}
            </div>
            
            <button className={`border rounded-xl px-3 py-1 bg-blue-800 hover:bg-blue-900 text-amber-50 ${currPage >= totalPages ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={(()=>setCurrPage(currPage+1))} disabled={currPage >= totalPages}>Next</button>
        </footer>
      </div>
    </div>
  )
}

export default ProductShow
