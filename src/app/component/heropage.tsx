import { FaSearch,FaTruck } from "react-icons/fa";

const HeroPage = () => {
  return (
    <div className="p-12 xl:ml-10 xl:mr-10 ml-5 mr-5 bg-[url('/bg.png')] rounded-md bg-black bg-cover bg-hero-image min-h-screen flex justify-center xl:justify-end  ">
     
      <section className="flex flex-col gap-8 pl-10 pr-10 pt-5  flex-wrap  justify-center ">
        <div className="flex justify-end ">
            <div className="bg-white h-16 w-16 blur-[0.5px] rounded-[50%] flex items-center justify-center">
                <FaTruck className="text-[#2C2D5B] h-6 w-6" />
                
            </div>

        </div>
        <h1 className="text-[40px] md:text-[50px] text-[#F67366] font-medium ">
          <span className="text-white text-center">Welcome To Prism</span>Shop
        </h1>
        <p className="text-[22px] text-white max-w-[400px] md:max-w-[750px]">
          Discover unique, high-quality products, from trendy fashion to stylish
          home decor and innovative gadgets. There is something special for
          everyone!
        </p>
        <form action="" className="md:w-[600px] w-[320px] h-[100px] md:ml-20">
          <div className="relative ">
            <input
              type="search"
              className=" w-full pl-8 pr-8 pt-4 pb-4 bg-white  rounded-full focus:outline-none placeholder:text-[10px] md:placeholder:text-[15px] h-16"
              placeholder="Looking for Something , Type to Search"
            />
            
            <div className="flex absolute right-1 top-1/2 -translate-y-1/2 p-2 items-center justify-center">
              <div className=" ">
              <button className=" md:gap-5 gap-2 p-2    bg-[#2C2D5B] md:w-[200px] flex justify-center items-center h-12 rounded-3xl">
              <FaSearch className="text-white font-normal md:h-4 h-2 " />
              <p className="text-white md:text-[20px] text-[12px] font-normal">Search</p>
            </button>
        
              </div>
             
           
            </div>
          </div>
        </form>
        <div className="flex justify-end -mt-10">
            <div className="w-20 h-20 rounded-[50%] bg-[#F67366]">
                <div className="w-12 h-12 rounded-[50%] bg-[#2C2D5B] ml-10 relative top-1/2">

                </div>

            </div>
        </div>
        <div className="flex md:ml-[]">
            <div className="bg-white h-16 w-16 blur-[0.5px] rounded-[50%] flex items-center justify-center">
                <FaTruck className="text-[#2C2D5B] h-6 w-6" />
                
            </div>
         </div>
      </section>
    </div>
  );
};

export default HeroPage;
