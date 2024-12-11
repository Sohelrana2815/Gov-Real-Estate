import { BiArea, BiHome } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdSegment } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import AnimatedComponent from "../../Components/AnimatedComponent/AnimatedComponent";

const EstateDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const estate = estates.find((estate) => estate.id === idInt);

  console.log(estate, idInt);

  return (
    <>
      <div className="max-w-screen-xl mx-auto md:mt-8">
        {/*Title and Price */}
        <AnimatedComponent animation="fade">
          <div className="flex items-center md:justify-between justify-evenly mt-4 md:mt-0">
            <h2 className="md:text-2xl font-bold">{estate.estate_title}</h2>
            <p className="md:text-2xl font-bold">${estate.price}</p>
          </div>
        </AnimatedComponent>
        <div className="divider"></div>
        {/* estate img */}
        <AnimatedComponent animation="zoom-in">
          <div className="flex justify-center px-4 md:px-0 md:w-full">
            <img src={estate.image} alt="" className="rounded-2xl" />
          </div>
        </AnimatedComponent>
        {/*  */}
        <AnimatedComponent animation="fade-right">
          <div className="mt-6 px-2 md:px-0">
            <h2 className="md:text-xl font-medium">Description</h2>
            <p>{estate.description}</p>
          </div>
          <div className="divider"></div>
          <h4 className="text-2xl font-medium pl-3 md:pl-0">Overview</h4>
          {/* Main overview container */}
          <div className="md:flex items-center gap-6 space-y-4 md:space-y-0 mt-6 pl-3 md:pl-0">
            {/* overview style 1*/}
            <div className="flex gap-x-5">
              <button className="btn btn-outline hover:bg-[#1563DF] hover:text-white">
                <BiHome className="text-xl" />
              </button>
              <div>
                <p className="text-base">ID:</p>
                <p className="text-base">{estate.id}</p>
              </div>
            </div>
            {/* overview style 2*/}
            <div className="flex gap-x-5">
              <button className="btn btn-outline hover:bg-[#1563DF] hover:text-white">
                <MdSegment className="text-xl" />
              </button>
              <div>
                <p className="text-base">Type:</p>
                <p className="text-base">{estate.segment_name}</p>
              </div>
            </div>
            {/* overview style 3*/}
            <div className="flex gap-x-5">
              <button className="btn btn-outline hover:bg-[#1563DF] hover:text-white">
                <CiLocationArrow1 className="text-xl" />
              </button>
              <div>
                <p className="text-base">Location</p>
                <p className="text-base">{estate.location}</p>
              </div>
            </div>
            {/* overview style 4*/}
            <div className="flex gap-x-5">
              <button className="btn btn-outline hover:bg-[#1563DF] hover:text-white">
                <BiArea className="text-xl" />
              </button>
              <div>
                <p className="text-base">Area</p>
                <p className="text-base">{estate.area}</p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          {/* Facilities */}
          <div className="mt-6 pl-4 md:pl-0">
            <p className="md:text-2xl font-medium py-3">Facilities</p>
            <ul className="list-disc ml-4">
              {estate.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>

          {/* Leave a comment */}

          <div className="pl-4 md:pl-0">
            <div className="divider"></div>
            <p className="md:text-2xl font-medium">Leave A comment</p>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form className="space-y-6 py-10">
              {/* Input field */}
              <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4 pr-4 md:pr-0">
                <div>
                  <input
                    type="text"
                    className="input input-bordered rounded-full w-full"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="input input-bordered rounded-full w-full"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              {/* text area */}
              <div className="pr-4 md:pr-0">
                <textarea
                  className="textarea textarea-bordered md:w-3/4 w-full"
                  placeholder="Write comment"
                ></textarea>
              </div>
              {/* Button */}
              <div>
                <button
                  type="submit"
                  className="btn bg-[#1563DF] text-white text-base rounded-full md:w-3/4"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </AnimatedComponent>
      </div>
    </>
  );
};

export default EstateDetails;
