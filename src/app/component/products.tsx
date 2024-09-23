"use client"; // Ensure this is a client component

import { useState } from "react";
import Image from "next/image";
import { FaCartArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Products = () => {
    const products = [
        {
            productName: "Headset",
            image: "/headset.png",
            price: "$30",
            description: "The ultimate music experience you can get",
        },
        {
            productName: "Laptop",
            image: "/headset.png",
            price: "$500",
            description: "A high-performance laptop for all your needs",
        },
        {
            productName: "Smartphone",
            image: "/headset.png",
            price: "$200",
            description: "Stay connected with the latest technology",
        },
        {
            productName: "Camera",
            image: "/headset.png",
            price: "$400",
            description: "Capture your best moments with clarity",
        },
        {
            productName: "Watch",
            image: "/headset.png",
            price: "$100",
            description: "A stylish watch for every occasion",
        },
        {
            productName: "Tablet",
            image: "/headset.png",
            price: "$250",
            description: "Portable power for work and entertainment",
        },
    ];

    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const productsPerPage = 4;

    const handleNextProduct = () => {
        if (currentProductIndex + productsPerPage < products.length) {
            setCurrentProductIndex(currentProductIndex + 1);
        }
    };

    const handlePrevProduct = () => {
        if (currentProductIndex > 0) {
            setCurrentProductIndex(currentProductIndex - 1);
        }
    };

    const currentProducts = products.slice(
        currentProductIndex,
        currentProductIndex + productsPerPage
    );

    return (
        <div className="pt-10 px-4 sm:px-10 bg-white text-[#2C2D5B]">
            <h2 className="text-[30px] sm:text-[40px] font-semibold pb-10 text-center sm:text-left">
                Explore Our Categories And <br />Pick For Yourself
            </h2>
            <div className="flex flex-col items-center sm:items-start bg-blue-100 p-4 sm:p-10 gap-10">
                <div className="flex items-center justify-between w-full">
                    <p className="text-[#F67366] text-[16px] sm:text-[20px] font-bold">Accessories</p>
                    <button className="bg-[#F67366] text-white h-10 sm:h-12 rounded-md w-[120px] sm:w-[150px] text-[16px] sm:text-[20px] font-medium">
                        More
                    </button>
                </div>

                <div className="p-4 sm:p-10 flex justify-between items-center gap-3 sm:gap-5 w-full">
                    <button
                        onClick={handlePrevProduct}
                        disabled={currentProductIndex === 0}
                        className={`bg-[#F67366] p-2 sm:p-3 rounded-full text-white ${currentProductIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        <FaArrowLeft size={18} />
                    </button>

                    {/* Grid to display products */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center w-full">
                        {currentProducts.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-3 sm:gap-6 bg-white shadow-md rounded-md p-3 sm:p-5 w-[220px] sm:w-[280px] items-center justify-center"
                            >
                                <h2 className="font-bold text-[18px] sm:text-[25px]">{item.productName}</h2>
                                <Image
                                    src={item.image}
                                    width={50}
                                    height={50}
                                    alt="product image"
                                />
                                <div className="flex justify-between text-[#F67366] items-center gap-4">
                                    <p>{item.price}</p>
                                    <FaCartArrowDown />
                                </div>
                                <p className="text-center text-sm sm:text-base">{item.description}</p>
                                <button className="bg-[#2C2D58] text-white rounded-sm w-[160px] sm:w-[200px] h-10 sm:h-12">
                                    Order Now
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleNextProduct}
                        disabled={currentProductIndex + productsPerPage >= products.length}
                        className={`bg-[#F67366] p-2 sm:p-3 rounded-full text-white ${currentProductIndex + productsPerPage >= products.length ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        <FaArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;
