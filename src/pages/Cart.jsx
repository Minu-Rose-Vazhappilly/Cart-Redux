import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const userCart = useSelector(state => state.cartReducer)
    const navigate = useNavigate()
    console.log(userCart);
    const [totalCart,setTotalCart] = useState(0)
    const dispatch = useDispatch()
    const checkout = ()=>{
        dispatch(emptyCart())
        alert("Your order has been confirmed.Thank you for shopping with us")
        navigate('/')

    }
    useEffect(()=>{
        if(userCart?.length>0){
            setTotalCart(Math.ceil(userCart?.map(item=>item.totalPrice)?.reduce((prev,curr)=>prev+curr)))
        }
    },[userCart])
    const handleDecrementQuantity = (product)=>{
        if(product.quantity>1){
            dispatch(decrementQuantity(product.id))
        }else{
            dispatch(removeCartItem(product.id))
        }
    }
    return (
        <>
            <Header />
            <div style={{ paddingTop: '100px' }} className='mx-5'>Cart
                <h1 className='text-5xl font-bold my-10'>Cart Summary</h1>
                {
                    userCart?.length > 0 ? (
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='col-span-2 rounded shadow p-5'>
                                <table className='table-auto w-full'>
                                    <thead>
                                        <tr>
                                            <td className='font-semibold'>#</td>
                                            <td className='font-semibold'>Name</td>
                                            <td className='font-semibold'>Image</td>
                                            <td className='font-semibold'>Quantity</td>
                                            <td className='font-semibold'>Price</td>
                                            <td className='font-semibold'>...</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            userCart?.map((product, index) => (
                                                <tr>
                                                    <td>{index+1}</td>
                                                    <td>{product?.title}</td>
                                                    <td><img width={'70px'} height={'70px'} src={product?.thumbnail} alt="" /></td>
                                                    <td>
                                                        <div className="flex">
                                                            <button onClick={()=>dispatch(handleDecrementQuantity(product))} className="font-bold">-</button>
                                                            <input type="text" style={{ width: '40px' }} className='border p-2 rounded' readOnly value={product?.quantity} />
                                                            <button onClick={()=>dispatch(incrementQuantity(product?.id))} className="font-bold">+</button>
                                                        </div>
                                                    </td>
                                                    <td>$ {product?.totalPrice}</td>
                                                    <td><button onClick={()=>dispatch(removeCartItem(product?.id))}><i className="fa-solid fa-trash text-red-500"></i></button></td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                                <div className='float-right mt-4'>
                                    <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 text-white text-lg p-2 inline-block rounded mx-2'>EMPTY CART</button>
                                    <button className='bg-blue-600 text-white text-lg p-2 inline-block rounded mx-2'>SHOP MORE</button>
                                </div>
                            </div>
                            <div className='col-span-1 rounded shadow p-5'>
                                <h2 className='font-bold text-2xl mb-4'>Total Amount: <span className='text-red-600'>$ {totalCart}</span></h2>
                                <hr />
                                <button onClick={checkout} className='rounded bg-green-600 p-2 text-white mt-4 w-full text-xl'>CHECK OUT</button>
                            </div>
                        </div>
                    ) : (
                        <p className='font-bold text-xl text-center'>Your Cart is empty...</p>
                    )

                }


            </div>
        </>
    )
}

export default Cart