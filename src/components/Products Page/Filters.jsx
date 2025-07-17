import {useState,useContext,useEffect} from 'react'
import { Data2Send } from '../../assets/BakeryData';


const Filters = ({filteredBakeryData,setFilteredBakeryData,setCurrPage,mobileFilter,setMobileFilter}) => {
    const [priceOrder, setPriceOrder] = useState(null);
    const [rating, setRating] = useState(null);
    const [priceRange, setPriceRange] = useState([]);
    const [type, setType] = useState([])
    const [flavor, setFlavor] = useState([])
    const {bakeryData}=useContext(Data2Send);

    // price order filtering
    useEffect(() => {
        const sorted = [...filteredBakeryData].sort((a, b) =>
            priceOrder === "high to low" ? b.price - a.price : a.price - b.price
        );
        setFilteredBakeryData(sorted);
    }, [priceOrder]);

    // rating order filtering
    useEffect(() => {
        const sorted=[...bakeryData].filter((data)=>Number(data.rating)>=Number(rating));
        setFilteredBakeryData(sorted);

    }, [rating]);
    
    // price range filtering
    useEffect(() => {
        if (priceRange.length!==0) {
            let sortedSet = new Set();

            priceRange.forEach((price) => {
                const matchingItems = bakeryData.filter((data) => data.priceCategory === price);
                matchingItems.forEach(item => sortedSet.add(item));     // add each item individually
            });

            setFilteredBakeryData([...sortedSet]);
        }else if(priceRange.length===0){
            setFilteredBakeryData([...bakeryData]);
        }

    }, [priceRange]);

    // type filtering
    useEffect(() => {
        if (type.length!==0) {
            let sortedSet = new Set();

            type.forEach((tp) => {
                const matchingItems = bakeryData.filter((data) => data.item === tp);
                matchingItems.forEach(item => sortedSet.add(item));     // add each item individually
            });

            setFilteredBakeryData([...sortedSet]);
        }else if(type.length===0){
            setFilteredBakeryData([...bakeryData]);
        }

    }, [type]);

    // flavor filtering
    useEffect(() => {
        if (flavor.length!==0) {
            let sortedSet = new Set();

            flavor.forEach((flv) => {
                const matchingItems = bakeryData.filter((data) => data.categoryName === flv);
                matchingItems.forEach(item => sortedSet.add(item));     // add each item individually
            });

            setFilteredBakeryData([...sortedSet]);
        }else if(flavor.length===0){
            setFilteredBakeryData([...bakeryData]);
        }

    }, [flavor]);





  return (
    <section className={`${mobileFilter===false ? "w-[0%] hidden":"w-full h-fit block"} md:block md:w-[15%] md:h-full p-3 flex flex-col gap-2`}>
        <div className='flex flex-row justify-between'>
            <h1 className="font-semibold" >Filters</h1>
            <button className="font-semibold hover:cursor-pointer">Clear</button>
        </div>
        <hr />
        <form>
            <h1 className="font-semibold mb-1" >SORT</h1>
            <input type="radio" id="h2l" name="price-order" value="high to low" onChange={(e)=>setPriceOrder(e.target.value)}  />
            <label htmlFor="h2l"> high to low</label><br />
            <input type="radio" id="l2h" name="price-order" value="low to high" onChange={(e)=>setPriceOrder(e.target.value)} />
            <label htmlFor="l2h"> low to high</label><br />
        </form>
        <hr />
        <form>
            <h1 className="font-semibold mb-1">RATING</h1>
            <input type="radio" id="4+" name="rating-range" value="4" onChange={(e)=>{setRating(e.target.value);setCurrPage(1)}} />
            <label htmlFor="4+"> 4 ⭐ and above</label><br />
            <input type="radio" id="3+" name="rating-range" value="3" onChange={(e)=>{setRating(e.target.value);setCurrPage(1)}} />
            <label htmlFor="3+"> 3 ⭐ and above</label><br />
            <input type="radio" id="2+" name="rating-range" value="2" onChange={(e)=>{setRating(e.target.value);setCurrPage(1)}} />
            <label htmlFor="2+"> 2 ⭐ and above</label><br />
        </form>
        <hr />
        <form>
            <h1 className="font-semibold mb-1" >PRICE RANGE</h1>
            <input 
            type="checkbox" 
            id="<500" 
            name="price-range" 
            value="under500" 
            onChange={(e)=>{setCurrPage(1);e.target.checked ? setPriceRange([...priceRange,e.target.value]):setPriceRange(priceRange.filter(item => item !== e.target.value))}} 
            />
            <label htmlFor="<500"> {"<"}500</label><br />
            <input 
            type="checkbox" 
            id="500-1000" 
            name="price-range" 
            value="price500To1000" 
            onChange={(e)=>{setCurrPage(1);e.target.checked ? setPriceRange([...priceRange,e.target.value]):setPriceRange(priceRange.filter(item => item !== e.target.value))}} 
            />
            <label htmlFor="500-1000"> 500-1000</label><br />
            <input 
            type="checkbox" 
            id="1000-1500" 
            name="price-range" 
            value="price1000To1500" 
            onChange={(e)=>{setCurrPage(1);e.target.checked ? setPriceRange([...priceRange,e.target.value]):setPriceRange(priceRange.filter(item => item !== e.target.value))}} 
            />
            <label htmlFor="1000-1500"> 1000-1500</label><br />
            <input 
            type="checkbox" 
            id="1500-2000" 
            name="price-range" 
            value="price1500To2000" 
            onChange={(e)=>{setCurrPage(1);e.target.checked ? setPriceRange([...priceRange,e.target.value]):setPriceRange(priceRange.filter(item => item !== e.target.value))}} 
            />
            <label htmlFor="1500-2000"> 1500-2000</label><br />
        </form>
        <hr />
        <form>
            <h1 className="font-semibold mb-1" >TYPES</h1>
            <input 
            type="checkbox" 
            id="cake" 
            name="bread-types" 
            value="Cake" 
            onChange={(e)=>{setCurrPage(1);e.target.checked ? setType([...type,e.target.value]):setType(type.filter(item => item !== e.target.value))}} 
            />
            <label htmlFor="cake"> Cakes</label><br />
            <input 
            type="checkbox" 
            id="muffins" 
            name="bread-types" 
            value="Muffin" 
            onChange={(e)=>{setCurrPage(1);e.target.checked ? setType([...type,e.target.value]):setType(type.filter(item => item !== e.target.value))}} 
            />
            <label htmlFor="muffins"> Muffins</label><br />
        </form>
        <hr />
        <form>
            <h1 className="font-semibold mb-1" >FLAVORS</h1>
            <input 
            type="checkbox" 
            id="Chocolate" 
            name="flavors" 
            value="Chocolate"
            onChange={(e)=>{setCurrPage(1);e.target.checked ? setFlavor([...flavor,e.target.value]):setFlavor(flavor.filter(item => item !== e.target.value))}} 
            />
            <label htmlFor="Chocolate"> Chocolate</label><br />
            <input 
            type="checkbox" 
            id="Vanilla" 
            name="flavors" 
            value="Vanilla"
            onChange={(e)=>{setCurrPage(1);e.target.checked ? setFlavor([...flavor,e.target.value]):setFlavor(flavor.filter(item => item !== e.target.value))}} 
            />
            <label htmlFor="Vanilla"> Vanilla</label><br />
            <input 
            type="checkbox" 
            id="Red Velvet"
             name="flavors" 
             value="Red Velvet"
             onChange={(e)=>{setCurrPage(1);e.target.checked ? setFlavor([...flavor,e.target.value]):setFlavor(flavor.filter(item => item !== e.target.value))}} 
            />
            <label htmlFor="Red Velvet"> Red Velvet</label><br />
            <input 
            type="checkbox" 
            id="Pineapple" 
            name="flavors" 
            value="Pineapple"
            onChange={(e)=>{setCurrPage(1);e.target.checked ? setFlavor([...flavor,e.target.value]):setFlavor(flavor.filter(item => item !== e.target.value))}} 
            />
            <label htmlFor="Pineapple"> Pineapple</label><br />
            <input 
            type="checkbox" 
            id="Strawberry" 
            name="flavors" 
            value="Strawberry"
            onChange={(e)=>{setCurrPage(1);e.target.checked ? setFlavor([...flavor,e.target.value]):setFlavor(flavor.filter(item => item !== e.target.value))}} 
            />
            <label htmlFor="Strawberry"> Strawberry</label><br />
        </form>

    </section>
  )
}

export default Filters
