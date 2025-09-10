import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='mx-5'>
        
        <div className="grid grid-cols-4 gap-4 ">
            <div className="rounded border p-2 shadow">
                {/*image */}
                <img height={'200px'} src="https://1.bp.blogspot.com/-PxDukBAYVgI/UrkAGMwpPdI/AAAAAAAAAbo/Md-9v9Q8UCM/s1600/makeup+forever.jpg" alt="" />
                {/*title */}
                <div className='text-center'>
                    <h3 className='font-bold text-xl '>title</h3>
                    {/*link */}
                    <Link to={'/id/view'} className='bg-violet-900 p-1 rounded text-white mt-3 inline-block'>View more...</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home