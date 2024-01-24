"use client"
import { remove } from '@/redux/CartSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


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
                    <h5>{item.price}</h5>
                    <button onClick={() => removeItem(item)}>Remove</button>

                </div> 
                ))
            }
        </div>: <h2>No products</h2>}
    </div>
  )
}
