import Bannersection from "./components/BannerSection/Bannersection";
import Bannersection2 from "./components/BannerSection/Bannersection2";
import Blogsection from "./components/Blogs/Blogsection";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import OurVision from "./components/OurVision/OurVision";
import Overveiwcounter from "./components/Overveiwcounter/Overveiwcounter";
import VideoBanner from "./components/VideoBanner/VideoBanner";



export const App = () => {
  return (
    <>
    <main className="overflow-x"> 
      <Navbar/>
      <Hero/>
      <Overveiwcounter/>
      <OurVision/>
      <Bannersection/>
      <Bannersection2/>
      <VideoBanner/>
      <Blogsection/>
    </main>
    </>
  )
}
export default App;