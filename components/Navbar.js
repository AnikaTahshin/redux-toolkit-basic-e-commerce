"use client";

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const Navbar = () => {

    const item = useSelector((state) => state.cart)
  const link = [{ name: "Home", path: "/" },
  { name: "Cart", path: "/cart" }];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        padding: "20px",
        backgroundColor:'gray',
        
      }}
    >
      <span style={{ fontSize: "25px" }}>React Redux Shop</span>
      <div style={{ marginRight: "50px",display: "flex",
        justifyContent: "space-between",
        alignContent: "center", }}>
        {
            link.map((el) => <NavLink key={el.path} data={el} />)
        }
        
        {/* <Link href={"/"}>Home</Link>
        <Link href={"/cart"}>Cart</Link> */}
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <HiOutlineShoppingBag  size={25} />
        <span style={{position:'absolute',top:18,right:64}}> {item.length}</span>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({data}) => {
    return(
       <div>
         <Link style={{fontSize:'25px',marginRight:'10px',textDecoration:'none'}} href={data.path}>{data.name}</Link>
       </div>
    )
};

export default Navbar;
