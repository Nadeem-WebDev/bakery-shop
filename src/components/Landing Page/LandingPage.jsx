import { Link } from 'react-router-dom'
import { Data2Send } from '../../assets/BakeryData'
import { useContext } from 'react'
import pancake from "../../assets/imgs/pancake.png";


const LandingPage = () => {
  const {bakeryData}=useContext(Data2Send);
  let fildata=bakeryData.filter(items=>items.isBestSeller===true).slice(0,4);
  console.log(fildata);
  


  return (
    <div className='flex flex-col'>
      <section className='flex flex-col items-center justify-center h-85 w-full bg-linear-to-b from-purple-300 to-purple-500 font-cursive relative'>
        <img src={pancake} alt="product" className='h-40 w-40 absolute top-18 left-[25%] md:top-auto md:left-20 md:h-80 md:w-80 z-0' />
        <div className='flex flex-col items-start justify-evenly w-[90%] md:w-120 h-60 text-2xl z-100 text-gray-700'>
            <h1>Quality Products...</h1>
            <h1>with sweets, eggs & breads</h1>
            <p className='text-[15px]'>From the first loaf to the last pastry, we bake love and freshness into every bite. At our bakery, every visit feels like home.</p>
            <Link to="/products" className='rounded-xl bg-amber-700 p-2 hover:cursor-pointer hover:bg-amber-800'>See All...</Link>
        </div>
      </section>
      <section className='bg-linear-to-b from-purple-400 to-purple-600 p-5'>
        <h1 className='text-2xl text-center mt-5 font-extrabold text-gray-300'>Our Bestsellers...</h1>
        <div className='flex flex-row flex-wrap justify-evenly my-5 gap-5'>
          {bakeryData.filter(item => item.isBestSeller === true).slice(0, 4).map(({ title, imageUrl, price }, index) => (
            <div key={index} className="flex flex-col justify-between bg-gray-300 w-[65%] md:w-60 shadow-2xs rounded-lg ml-5 hover:shadow-2xl hover:cursor-pointer relative">
              <img src={imageUrl} alt={title} className="h-65 object-cover bg-gray-200 rounded-t-lg" />
              <p className="text-md font-semibold p-2">{title}</p>
              <h1 className="text-sm font-semibold p-2">₹ {price}</h1>
            </div>
          ))}
        </div>
      </section>


      <section className='bg-linear-to-b from-purple-500 to-purple-700'>
        <h1 className='text-2xl text-center mt-5 font-extrabold text-gray-300'>Choose Your Favs...</h1>
        <div className='flex flex-row flex-wrap justify-center items-center gap-20 p-10 w-full h-full '>
            {[
              {flav:"Pineapple",url:"https://res.cloudinary.com/dtrjdcrme/image/upload/v1647262271/ecommerce/pineapple.webp"},
              {flav:"Chocolate",url:"https://res.cloudinary.com/dtrjdcrme/image/upload/v1647262271/ecommerce/chocolate.webp"},
              {flav:"Strawberry",url:"https://res.cloudinary.com/dtrjdcrme/image/upload/v1647262271/ecommerce/strawberry.webp"},
              {flav:"Vanilla",url:"https://res.cloudinary.com/dtrjdcrme/image/upload/v1647262271/ecommerce/vanilla.webp"}
            ].map(({flav,url})=>(
              <section key={flav}>
                <div className='group relative w-50 h-50 rounded-xl overflow-hidden  hover:cursor-pointer hover:scale-105'>
                  <img src={url} alt={url} className='h-full w-full absolute object-cover brightness-40 group-hover:brightness-60' />
                  <span className='h-full w-full absolute flex justify-center items-center text-white'>{flav}</span>
                </div>
              </section>
            ))}
        </div>
      </section>
    </div>
  )
}

export default LandingPage
