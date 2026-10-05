import Link from "next/link";
import React from "react";
import Menu from "@/components/menu";
import CartIcon from "./CartIcon";


const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 flex items-center justify-between p-4 border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* logo */}
      <div>
        <Link href={"/"} className="text-2xl font-bold">
          CraveHub
        </Link>
      </div>

      <div className="hidden md:flex gap-4 font-bold">
        <Link href="/">Homepage</Link>
        <Link href="/menu"> Our Menu</Link>
        <Link href="/orders">Orders</Link>
      </div>

      {/* phone Number  */}
      
      
        <div className="hidden md:flex gap-4 font-bold  items-center justify-end">
         <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          {/* <Image src="https://img.icons8.com/ios/50/phone--v1.png"  width={20} height={20} alt="error"/> */}
          <span>+ 12345 67890</span>
         </div>
         
          {!user ? <Link href="/">Login</Link> : <Link href="/">Orders</Link>}
          <CartIcon />
        </div>
   

      {/* Mobile View */}
      <div className="md:hidden">
        <Menu/>
      </div>
    </div>
  );
};

export default Navbar;
