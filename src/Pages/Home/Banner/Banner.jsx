import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner from "../../../assets/Banner/banner.jpg";
import banner1 from "../../../assets/Banner/banner1.jpg";
import banner2 from "../../../assets/Banner/banner2.jpg";
import { BiSearch } from "react-icons/bi";
import "./Banner.css";
import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";
const Banner = () => {
  return (
    <AnimatedComponent animation="fade">
      <Carousel>
        <div className="relative">
          <img src={banner} alt="estate" className="w-full h-auto" />
          <div className="banner-style">
            <h2 className="text-white text-2xl md:text-7xl font-bold">
              Find Your Dream Home
            </h2>
            <p className="text-white text-sm md:text-xl text-center max-w-screen-md">
              We are a real estate agency that will help you find the best
              residence you dream of, let’s discuss for your dream house?
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <button className="btn btn-sm md:btn-md bg-blue-600 text-white md:text-lg rounded-full md:px-12 border-none">
                For Rent
              </button>
              <button className="btn btn-sm md:btn-md btn-outline text-white md:text-lg rounded-full md:px-12">
                For Sale
              </button>
            </div>
            <div className="w-1/2 hidden md:block">
              <label className="input input-bordered flex items-center gap-2 rounded-full py-8">
                <input
                  type="text"
                  className="grow text-xl"
                  placeholder="Search"
                />
                <BiSearch className="text-xl" />
              </label>
            </div>
          </div>
        </div>
        <div>
          <img src={banner1} />
        </div>
        <div>
          <img src={banner2} />
        </div>
      </Carousel>
    </AnimatedComponent>
  );
};

export default Banner;
