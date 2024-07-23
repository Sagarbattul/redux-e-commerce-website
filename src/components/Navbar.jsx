import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items = useSelector((state)=>state.cart);
  return (
   <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <span>Redux Toolkit</span>
     <div>
      <Link to={"/"} style={{fontWeight:"bolder",marginRight:"20px",textDecoration:"none",color:"black"}} >Home</Link>
      <Link to={"/cart"} style={{fontWeight:"bolder",marginRight:"7px"}} >Cart</Link>
      <span style={{fontWeight:"bolder"}}>item:{items.length}</span>
    </div>
   </div>
  )
}

export default Navbar

