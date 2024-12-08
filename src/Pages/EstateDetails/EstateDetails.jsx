import { BiArea, BiHome } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdSegment } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";

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
        <div className="flex items-center justify-between">
          <h2 className="md:text-2xl font-bold">{estate.estate_title}</h2>
          <p className="md:text-2xl font-bold">${estate.price}</p>
        </div>
        <div className="divider"></div>
        {/* estate img */}
        <div className="flex justify-center">
          <img src={estate.image} alt="" className="rounded-2xl" />
        </div>
        {/*  */}
        <div>
          <h2 className="md:text-xl font-medium">Description</h2>
          <p>{estate.description}</p>
        </div>
        <div className="divider"></div>

        <h4 className="text-xl font-medium">Overview</h4>
        {/* Main overview container */}
        <div className="flex items-center gap-6">
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
              <p className="text-base">Location</p>
              <p className="text-base">{estate.area}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstateDetails;
