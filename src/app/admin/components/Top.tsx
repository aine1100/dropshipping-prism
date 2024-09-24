import Link from "next/link";
import Image from "next/image";
import { FaBell, FaSearch } from "react-icons/fa";

export default function Top() {
    let name = "John Doe";
    return (
        <div className="flex space-x-[4rem] items-center">
            <div className="relative w-[720px] ">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full h-[64px] pl-[3rem] focus:border-none border-[#4547A0] border-[1px] rounded-lg"
                />
                <FaSearch className="absolute top-1/2 left-[1rem] transform -translate-y-1/2 text-[#63686F] text-[20px]" />
            </div>

            <div className="space-x-[2rem] flex items-center text-center">
                <Link href="/admin/profile" className="text-[20px] font-bold ">
                    {name}
                </Link>
                <Image
                    src={'/headset.png'}
                    alt={name}
                    width={100}
                    height={100}
                    className="w-[72px] h-[64px] rounded-[50%] border-[2px] border-[#298AFF]"
                />
                <FaBell className="text-[30px] text-[#F67366]" />
            </div>
        </div>
    );
}
