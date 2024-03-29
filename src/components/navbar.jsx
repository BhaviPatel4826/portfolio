"use client"
import Link from "next/link"
import React, {useState} from 'react';
import Image from "next/image";
import NavLink from "./navLink";
const links = [
    {url: "/", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/portfolio", title: "Portfolio"},
    {url: "/contact", title: "Contact"},
];

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return(
        <div className="flex h-full text-black items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
          <div className="hidden md:flex gap-4 w-1/2 text-black">
              {links.map(link=>(
                  <NavLink link={link} key={link.title}/>
              ))}
          </div>
         
            {/* Social Media */}
            <div className="hidden md:flex  gap-4 w-1/2 justify-end">
                <Link href = "/">
                     <Image src= "/github.png" alt="" width={24} height={24} />
                </Link>
                <Link href = "/">
                     <Image src= "/github.png" alt="" width={24} height={24} />
                </Link>
                <Link href = "/">
                     <Image src= "/github.png" alt="" width={24} height={24} />
                </Link>
             </div>
          {/*RESPONSIVE MENU*/}
          <div className="md:hidden justify-end ">
              {/*MENU BUTTON*/}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" 
                onClick = {() => setOpen((prev) => !prev)}>

                  <div className="w-10 h-1 bg-white rounded" ></div>
                  <div className="w-10 h-1 bg-white rounded" ></div>
                  <div className="w-10 h-1 bg-white rounded" ></div>
                </button>
                { open && (
                    <div className=" absolute top-0 left-0 w-screen bg-black h-screen text-white flex flex-col items-center justify-center gap-8 text-4xl">
                        {links.map(link=>(
                            <Link href={link.url} key={link.title}>{link.title}</Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar