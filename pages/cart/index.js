"use client"
import { remove } from '@/redux/CartSlice'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TbShoppingBagX } from "react-icons/tb";

export default function Cart() {
 const dispatch = useDispatch()
 const cartItems = useSelector((state) => state.cart)

 const removeItem = (item) =>{
    dispatch(remove(item.id))
 }
  return (
    <div style={{padding:'20px'}}>
        <h3>Added Items</h3>
       
       {cartItems.length >0? 
       <div >
            {
                cartItems.map((item) => (
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderWidth:'1px',borderColor:'#000',borderStyle: 'solid',padding:'15px',marginBottom:'10px'}}>
                    <img style={{height:'200px'}} src={item.image} />
                    <h5>{item.title}</h5>
                    <h5>BDT: {item.price}</h5>
                    <button onClick={() => removeItem(item)}>Remove</button>

                </div> 
                ))
            }
        </div>: 
        (<div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop:'200px'}}>
        
        <TbShoppingBagX size={150} />
        
        <Link style={{textDecoration:'none',marginTop:'50px',fontSize:'25px'}} href='/'>Go To Home</Link>
        </div>
        )
        }
    </div>
  )
}
