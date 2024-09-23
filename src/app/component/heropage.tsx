import { FaSearch, } from "react-icons/fa";
import imageOne from "../images/image.png"
const HeroPage = () => {
  return (
    <div className={`p-10 bg-[url(${imageOne})] bg-cover bg-center min-h-screen flex  justify-end  `}>
      <section className="flex flex-col gap-10 p-10 ">
        <h1 className="text-[50px] text-[#F67366] font-medium">
          <span className="text-white">Welcome To Prism</span>Shop
        </h1>
        <p className="text-[22px] text-white">
          Discover unique, high-quality products, from trendy fashion to stylish
          home<br/> decor and innovative gadgets. There's something special for
          everyone!
        </p>
        <form action="" className="md:w-[600px] w-[320px] h-[100px]">
          <div className="relative ">
            <input
              type="search"
              className=" w-full pl-8 pr-8 pt-4 pb-4 bg-white  rounded-full focus:outline-none placeholder:text-[15px] h-16"
              placeholder="Looking for Something , Type to Search"
            />
            
            <div className="flex absolute right-1 top-1/2 -translate-y-1/2 p-2 items-center justify-center">
              <div className=" ">
              <button className=" gap-5    bg-[#2C2D5B] w-[200px] flex justify-center items-center h-12 rounded-3xl">
              <FaSearch className="text-white font-normal h-4" />
              <p className="text-white text-[20px] font-normal">Search</p>
            </button>
        
              </div>
             
           
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default HeroPage;
