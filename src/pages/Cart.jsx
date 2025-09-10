import React from 'react'
import Header from '../components/Header'

function Cart() {
    return (
        <>
            <Header />
            <div style={{ paddingTop: '100px' }} className='mx-5'>Cart
                <h1 className='text-5xl font-bold my-10'>Cart Summary</h1>
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
                                <tr>
                                    <td>1</td>
                                    <td>title</td>
                                    <td><img width={'70px'} height={'70px'} src="https://1.bp.blogspot.com/-PxDukBAYVgI/UrkAGMwpPdI/AAAAAAAAAbo/Md-9v9Q8UCM/s1600/makeup+forever.jpg" alt="" /></td>
                                    <td>
                                        <div className="flex">
                                            <button className="font-bold">-</button>
                                            <input type="text" style={{ width: '40px' }} className='border p-2 rounded' readOnly value={10} />
                                            <button className="font-bold">+</button>
                                        </div>
                                    </td>
                                    <td>$ 400</td>
                                    <td><button><i className="fa-solid fa-trash text-red-500"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='float-right mt-4'>
                            <button className='bg-red-600 text-white text-lg p-2 inline-block rounded mx-2'>EMPTY CART</button>
                            <button className='bg-blue-600 text-white text-lg p-2 inline-block rounded mx-2'>SHOP MORE</button>
                        </div>
                    </div>
                    <div className='col-span-1 rounded shadow p-5'>
                        <h2 className='font-bold text-2xl mb-4'>Total Amount: <span className='text-red-600'>$ 500</span></h2>
                        <hr />
                        <button className='rounded bg-green-600 p-2 text-white mt-4 w-full text-xl'>CHECK OUT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart