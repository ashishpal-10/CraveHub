"use client";

import Image from "next/image";
import React, { useState } from "react";
import menuImg from "../../public/menu1.png";
import crossImg from "../../public/cross1.png";

import Link from "next/link";
import CartIcons from "./CartIcon";

const Menu = () => {
  const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },

  ];

  const [open, setOpen] = useState(false);

  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src={menuImg}
          alt="Error"
          width={25}
          height={25}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src={crossImg}
          alt=""
          width={25}
          height={25}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Navbar Links Here  */}
       {open && (
      <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)]  w-full flex flex-col items-center justify-center gap-8 text-3xl z-10">
        {
            links.map((item)=>(
                <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>{item.title}</Link>
            ))
        }

    { !user ?(
        <Link href="/login"  onClick={()=>setOpen(false)}>Login</Link>):
        (<Link href="/orders"  onClick={()=>setOpen(false)}>Orders</Link>)
    }
    <Link href="/cart"  onClick={()=>setOpen(false)}>
    <CartIcons/>
    </Link>
      </div>)}


    </div>
  );
};

export default Menu;
