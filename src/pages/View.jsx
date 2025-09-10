import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function View() {
  return (
    <div>
        <Header/>
        <div className='p-20'>
            <div className="grid grid-cols-2 gap-6 ">
                <div className='flex flex-col '>
                    <div>
                        <img height={'250px'} src="https://1.bp.blogspot.com/-PxDukBAYVgI/UrkAGMwpPdI/AAAAAAAAAbo/Md-9v9Q8UCM/s1600/makeup+forever.jpg" alt="" />
                    </div>
                    <div className='flex justify-between'>
                        <Link to={'/wishlist'} className='bg-violet-900 p-1 rounded text-white mt-3 inline-block'>ADD TO WISHLIST</Link>
                        <Link to={'/cart'} className='bg-blue-500 p-1 rounded text-white mt-3 inline-block'>ADD TO CART</Link>
                    </div>
                </div>
                <div >
                <div>
                    <h1 className='text-3xl font-bold'>Title</h1>
                    <h2 className='text-2xl text-red-500 font-bold'>$ 500</h2>
                    <h3 className='text-xl mt-3'><span className='font-bold'>Description</span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos neque ab animi facere dicta, esse deserunt. Illum, voluptas voluptatum velit repellendus non aliquid, sunt maxime enim dolore cumque debitis sit.
        
                    </h3>
                    <h3 className='rounded shadow my-3 p-2'>
                        Client Review
                    </h3>
                    <div className='rounded shadow my-3 p-2'>
                        <p>
                            <span className='font-bold'>client-name</span>:message
                        </p>
                        <p>Rating:3</p><i className="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default View