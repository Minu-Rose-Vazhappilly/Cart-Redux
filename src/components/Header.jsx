import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  return (
    <nav className='flex justify-between p-5 w-full bg-violet-600 text-white fixed font-bold text-2xl'>
        <Link to='/'><i className="fa-solid fa-truck"></i> <span>Daily Cart</span></Link>
    <ul className='flex'>
    <li className='px-5'><Link to='/wishlist'><i className="fa-solid fa-heart text-red-600 me-1"></i><span>Wishlist</span><span className='p-1 bg-black  rounded-full ms-1 '>{userWishlist?.length}</span></Link></li>
    <li className='px-5'><Link to='/cart'><i className="fa-solid fa-cart-plus text-green-500 me-1"></i><span>Cart</span><span className='p-1 bg-black  rounded-full ms-1'>{userCart?.length}</span></Link></li>
    </ul>
    </nav>
  )
}

export default Header