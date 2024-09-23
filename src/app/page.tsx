import HeroPage from "./component/heropage";
import Navbar from "./component/navbar";
import RectanglePage from "./component/rectangle";
import Products from "./component/products";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <HeroPage/>
      <RectanglePage/>
      <Products/>
    
    </div>
  );
}
