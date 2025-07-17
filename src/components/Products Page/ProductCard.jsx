import { IoMdHeart } from "react-icons/io"

const ProductCard = ({link,title,price,rating,totalRatings}) => {
  return (
    <div className=' flex flex-col justify-between w-[65%] md:w-60 rounded-lg ml-5 hover:shadow-2xl active:shadow-2xl hover:cursor-pointer relative'>
      <img src={link} alt="" className='h-65 object-cover bg-gray-200 rounded-t-lg' />
      <p className='text-md font-semibold p-2'>{title}</p>
      <h1 className='text-sm font-semibold p-2'>₹ {price}</h1>
      <h2 className='text-sm font-semibold p-2 text-blue-500'>{rating}⭐ | ({totalRatings}) ratings</h2>
      <button className='m-2 border rounded-lg hover:cursor-pointer hover:bg-black active:bg-black hover:text-gray-100 active:text-gray-100 p-1 active:scale-95'>add to cart</button>
      <IoMdHeart className='text-3xl mr-3 hover:cursor-pointer hover:text-red-500 active:text-red-500 absolute top-1 right-0'/>
    </div>
  )
}

export default ProductCard
