'use client';

import { useState } from 'react';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import { BsBoxSeamFill } from 'react-icons/bs';
import { MdOutlineSettingsSuggest } from 'react-icons/md';

export default function Sidenav() {
    const [active, setActive] = useState<string>('Dashboard'); // Active state

    const menuItems = [
        { name: 'Dashboard', icon: <WidgetsOutlinedIcon className="text-[32px]" /> },
        { name: 'Receipt', icon: <ReceiptLongOutlinedIcon className="text-[32px]" /> },
        { name: 'Orders', icon: <ShoppingBagIcon className="text-[32px]" /> },
        { name: 'Products', icon: <BsBoxSeamFill className="text-[32px]" /> },
    ];

    return (
        <div className="flex flex-col justify-between items-center w-[320px] h-screen shadow-xl pt-[3rem]">
            <h2 className="text-[36px] text-[#1F3C88]">Admin Portal</h2>
            <div className="justify-evenly space-y-[2rem] ">
                {menuItems.map((item) => (
                    <div
                        key={item.name}
                        className={`flex space-x-[24px] cursor-pointer ${active === item.name
                                ? 'text-[#fff] pl-[6rem] bg-[#1F3C88] items-center h-[60px] w-[18rem] rounded-r-[20px] -ml-[1.5rem]' 
                                : 'text-[#63686F] pl-[5rem] h-[60px] items-center '
                            }`}
                        onClick={() => setActive(item.name)}
                    >
                        {item.icon}
                        <p className="text-[24px]">{item.name}</p>
                    </div>
                ))}
            </div>
            <div
                className={`flex space-x-[24px] cursor-pointer ${active === 'Settings' ? 'text-[#1F3C88]' : 'text-[#63686F]'
                    }`}
                onClick={() => setActive('Settings')}
            >
                <MdOutlineSettingsSuggest className="text-[32px]" />
                <p className="text-[24px]">Settings</p>
            </div>
        </div>
    );
}
