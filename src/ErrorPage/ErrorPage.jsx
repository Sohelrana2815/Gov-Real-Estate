import { BiRightArrowAlt } from "react-icons/bi";
import errorPage from "../assets/Error/errorImg.png";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <img src={errorPage} alt="" />
      <div className="flex justify-center">
        <Link to="/">
          <button className="flex btn rounded-full bg-[#1563DF] text-white px-10">
            GO BACK
            <BiRightArrowAlt className="text-xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
