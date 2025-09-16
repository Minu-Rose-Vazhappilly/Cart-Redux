import React from 'react'
import Header from '../components/Header'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {
    const ourWishlist = useSelector(state=>state.wishlistReducer)
    const dispatch = useDispatch()
    const userCart = useSelector(state=>state.cartReducer)

    const handleCart = (product)=>{
            dispatch(removeWishlistItem(product?.id))
            dispatch(addToCart(product))
            const existingProduct = userCart?.find(item=>item.id == product.id)
            if(existingProduct){
                alert("Product Updated Successfully")
            }
        }
  return (
    <>
        <Header/>
        <div className='p-15'>
        <h1 className='text-3xl font-bold text-center text-red-600 my-5'>My Wishlist</h1>
        <div style={{paddingTop:'100px'}} className='mx-5'>
            

           

            <div className="grid grid-cols-4 gap-4 ">

                 {
                ourWishlist?.length>0 ?
                 ourWishlist?.map(product=>(
                    <div className="rounded border p-2 shadow">
                    {/*image */}
                    <img height={'200px'} src={product?.thumbnail} alt="" />
                    {/*title */}
                    <div className='text-center'>
                        <h3 className='font-bold text-xl '>{product?.title}</h3>
                        {/*link */}
                        <div className='flex justify-evenly my-2'>
                            <button onClick={()=>dispatch(removeWishlistItem(product?.id))}><i className='fa-solid fa-heart-circle-xmark text-red-600'></i></button>
                            <button  onClick={()=>handleCart(product)}><i className='fa-solid fa-cart-plus text-green-600'></i></button>
                        </div>
                    </div>
                </div>
                 ))
                :
                <p className='font-bold  text-xl my-10'>Your Wishlist is Empty !!!</p>
            }
                
            </div>
        </div>
        </div>
    </>
  )
}

export default Wishlist