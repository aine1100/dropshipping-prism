import HeroPage from "./component/heropage";
import Navbar from "./component/navbar";
import RectanglePage from "./component/rectangle";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <HeroPage/>
      <RectanglePage/>
    
    </div>
  );
}
