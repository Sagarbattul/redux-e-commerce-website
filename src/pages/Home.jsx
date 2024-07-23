import React, { useEffect } from 'react'
import { add } from '../Redux/Cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts,STATUSES } from '../Redux/Productslice';
const Home = () => {


const dispatch=useDispatch();
const {data:products,status}=useSelector((state)=>state.product);
  useEffect(()=>{
   dispatch(fetchproducts())
  },[]) 
  const handleAdd=(product)=>{
dispatch(add(product));   //action.payload pass
  }
  if(status===STATUSES.LOADING){
    return <h2 style={{fontWeight:"bolder"}}>Loading...</h2>
  }
  return (
    <div className='productsWrapper'>
      {
        products.map((pro)=>(
          <div key={pro.id} className='card'>
            <img src={pro.image} alt="" />
            <h4>{pro.title}</h4>
            <h5>{pro.price}</h5>
            <button className='btn' onClick={()=>handleAdd(pro)}>Add to cart</button>

          </div>
        ))
      }
    
    </div>
  )
}

export default Home
