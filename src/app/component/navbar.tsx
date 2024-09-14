"use client"
import Link from "next/link"
import Logo from "../images/logo.png"
import Image from "next/image"
export default function Navbar(){
const navbarContent=[
    {
        name:"Categories",
        src:""
    },{
        name:"Services",
        src:""
    },{
        name:"Industries",
        src:""
    },{
        name:"Become A supplier",
        src:""
    },{
        name:"Help center",
        src:""
    }
]

return(
    <>
    <div className="flex pl-10 pr-10 pt-5 justify-center items-center bg-white gap-10 text-[#2C2D5B] ">
        <div className="flex gap-2 items-center justify-center">
            <Image src={Logo} alt="" className="" />
            <h1 className="text-[30px] font-bold text-[#2C2D5B]">Prism<span className="text-[#F67366]">Shop</span></h1>

        </div>
        <div className="flex items-center justify-center gap-5">
            {
                navbarContent.map((items,index)=>(
                    <div key={index} className="flex items-center justify-center text-[20px]">
                        <Link href={items.src}>
                        {items.name}
                        </Link>
                        </div>
                ))
            }


        </div>
        <div className="flex gap-8 items-center justify-center pl-20">
            <button className="w-32 h-12 rounded-md border-2 border-[#2C2D5B] bg-white text-[20px] hover:bg-[#2C2D5B] hover:text-white">Login</button>
            <button className="w-32 h-12 rounded-md border-2 border-[#2C2D5B]  text-[20px] bg-[#2C2D5B] text-white">Sign up</button>


        </div>


    </div>
    </>
)
}