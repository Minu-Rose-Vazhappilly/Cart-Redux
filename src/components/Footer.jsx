import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='grid text-white grid-cols-4 bg-violet-600 p-7 w-full bottom-0 mt-5'>
            <div>
                <p className='font-bold'><i className="fa-solid fa-truck me-2"></i>Daily cart</p>
                <p className='text-sm'>Designed and built with all the love in the world by the luminar team with help of our contributors </p>
                <p className='text-sm'>code licensed Luminar,docs CC BY 3.0</p>
                <p className='text-sm'>Currently v5.3.2.</p>
            </div>
            <div><p className='font-bold'>Links</p>
                <p className='text-sm'><Link to={'/'}>Home Page</Link></p>
                <p className='text-sm'><Link to={'/cart'}>Cart Page</Link></p>
                <p className='text-sm'><Link to={'/wishlist'}>Wishlist Page</Link></p>
            </div>
            <div><p className='font-bold'> Guides</p>
                <p className='text-sm'>React</p>
                <p className='text-sm'>React Bootstrap</p>
                <p className='text-sm'>React Router</p>
            </div>
            <div>
                <p>Contact Us</p>
                <div>
                    
                    <div className="mt-2 flex ">
                        <div className="me-2 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                            
                            <input id="price" type="text" name="price" placeholder="Enter your email here" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 me-1" />
                            
                        </div>
                        <div className="">🡢</div>
                    </div>
                </div>
                <div className='mt-3'>
                    <i className="fa-brands fa-twitter me-4"></i>
                    <i className="fa-brands fa-instagram me-4"></i>
                    <i className="fa-brands fa-facebook me-4"></i>
                    <i className="fa-brands fa-linkedin me-4"></i>
                    <i className="fa-brands fa-github me-4"></i>
                    <i className="fa-brands fa-whatsapp"></i>
                </div>
            </div>

        </div>
    )
}

export default Footer