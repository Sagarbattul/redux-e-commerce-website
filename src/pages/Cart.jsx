import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { remove } from '../Redux/Cartslice';
import { selectCartTotal } from '../Redux/selectors';
const Cart = () => {
  const dispatch=useDispatch();
  const cartItems=useSelector((state)=>state.cart)
  const cartTotal = useSelector(selectCartTotal);

  console.log(cartItems)
  const handleRemove=(id)=>{
    dispatch(remove(id))

  }
  return (
<div>
  <div style={{display:"flex",justifyContent:"space-between"}}>
  <h3>Cart Page   </h3>
  <h2>Total Cart Value: {cartTotal.toFixed(2)}</h2>
  </div>
  <div className='cartWrapper'>
      {
        cartItems.map((item)=>(
          <div key={item.id} className='cartCard'>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            <h5>{item.totalPrice}</h5>
            <h5>qty : {item.quantity}</h5>
            <button className='btn' onClick={()=>handleRemove(item.id)}>Remove to cart</button>
            

          </div>
        ))
      }
    </div>
</div>
  )
}

export default Cart
