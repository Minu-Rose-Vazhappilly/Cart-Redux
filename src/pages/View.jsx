import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function View() {
    const userWishlist = useSelector(state=>state.wishlistReducer)
    const userCart = useSelector(state=>state.cartReducer)
    const dispatch = useDispatch()
    const { id } = useParams()
    console.log(id);
    const [product, setProduct] = useState({})
    useEffect(() => {
        const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
        setProduct(allProducts.find(item => item.id == id))
    }, [])
    //console.log(product);
    const handleAddToWishlist = ()=>{
        const existingProduct = userWishlist?.find(item=>item.id==product.id)
        if(existingProduct){
            alert("Product already exists in your wishlist...Add another!!!")
        }else{
            dispatch(addToWishlist(product))
        }
    }

    const handleCart = ()=>{
        dispatch(addToCart(product))
        const existingProduct = userCart?.find(item=>item.id == product.id)
        if(existingProduct){
            alert("Product Updated Successfully")
        }
    }

    return (
        <div>
            <Header />
            <div className='p-20'>
                <div className="grid grid-cols-2 gap-6 ">
                    <div className='flex flex-col '>
                        <div>
                            <img height={'250px'} src={product?.thumbnail} alt="" />
                        </div>
                        <div className='flex justify-between'>
                            <button  className='bg-violet-900 p-1 rounded text-white mt-3 inline-block' onClick={handleAddToWishlist}>ADD TO WISHLIST</button>
                            <button  className='bg-blue-500 p-1 rounded text-white mt-3 inline-block' onClick={handleCart}>ADD TO CART</button>
                        </div>
                    </div>
                    <div >
                        <div>
                            <h1 className='text-3xl font-bold'>{product?.title}</h1>
                            <h2 className='text-2xl text-red-500 font-bold'>$ {product?.price}</h2>
                            <h3 className='text-xl mt-3'><span className='font-bold'>Description</span>
                                {product?.description}

                            </h3>
                            <h3 className='rounded shadow my-3 p-2'>
                                Client Review
                            </h3>
                            {
                                product?.reviews?.length > 0 &&
                                product?.reviews?.map(item => (
                                    <div className='rounded shadow my-3 p-2'>
                                        <p>
                                            <span className='font-bold'>{item?.
                                                reviewerName}</span>{item?.comment}
                                        </p>
                                        <p>{item?.rating}</p><i className="fa-solid fa-star"></i>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default View