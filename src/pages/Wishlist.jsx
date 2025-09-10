import React from 'react'
import Header from '../components/Header'

function Wishlist() {
  return (
    <>
        <Header/>
        <div>
        <h1 className='text-3xl font-bold text-center text-red-600 my-5'>My Wishlist</h1>
        <div style={{paddingTop:'100px'}} className='mx-5'>
            
            <div className="grid grid-cols-4 gap-4 ">
                <div className="rounded border p-2 shadow">
                    {/*image */}
                    <img height={'200px'} src="https://1.bp.blogspot.com/-PxDukBAYVgI/UrkAGMwpPdI/AAAAAAAAAbo/Md-9v9Q8UCM/s1600/makeup+forever.jpg" alt="" />
                    {/*title */}
                    <div className='text-center'>
                        <h3 className='font-bold text-xl '>title</h3>
                        {/*link */}
                        <div className='flex justify-evenly my-2'>
                            <button><i className='fa-solid fa-heart-circle-xmark text-red-600'></i></button>
                            <button><i className='fa-solid fa-cart-plus text-green-600'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Wishlist