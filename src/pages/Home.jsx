import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'

function Home() {
  const dispatch = useDispatch()
  const {loading,error,allProducts} = useSelector((state)=>state.productReducer)
  console.log(loading,error,allProducts);
  

  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='mx-5'>
      {
        loading && (
          <p>Loading...</p>
        )
      }
        
        <div className="grid grid-cols-4 gap-4 ">
           {
            allProducts?.length>0 ?(
               allProducts?.map((products)=>(
                <div className="rounded border p-2 shadow">
                {/*image */}
                <img height={'200px'} src={products.thumbnail} alt="" />
                {/*title */}
                <div className='text-center'>
                    <h3 className='font-bold text-xl '>{products.title}</h3>
                    {/*link */}
                    <Link to={`/${products.id}/view`} className='bg-violet-900 p-1 rounded text-white mt-3 inline-block'>View more...</Link>
                </div>
            </div>
               ))
            ):(
              <p>No Products Found</p>
            )
           }
        </div>
    </div>
    </>
  )
}

export default Home