import { BiArea, BiLocationPlus } from "react-icons/bi";
import { GrStatusInfo } from "react-icons/gr";
import { Link } from "react-router-dom";
import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";

const EstateCard = ({ estate }) => {
  const {
    id,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    image,
    customer_profile,
  } = estate;
  return (
    <>
      <AnimatedComponent animation="fade-in">
        <div>
          <div className="card card-compact bg-base-100 py-2 shadow-md">
            <figure className="md:h-72 relative xl:border xl:border-blue-500">
              <p className="absolute text-white rounded-full top-0 left-0 mt-4 ml-2 bg-black bg-opacity-50 px-3 py-1">
                {segment_name}
              </p>
              <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body space-y-2">
              <h2 className="card-title">{estate_title}</h2>
              <div className="flex items-center">
                <p className="flex items-center gap-2 text-base">
                  <GrStatusInfo />
                  For {status}
                </p>
                <p className="flex items-center gap-2 text-base">
                  <BiLocationPlus />
                  {location}
                </p>
                <p className="flex items-center gap-2 text-base">
                  <BiArea />
                  {area}
                </p>
              </div>
              <hr />
              {/* Mani container */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {/* Customer avatar */}
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={customer_profile.photo} alt="" />
                    </div>
                  </div>
                  {/* Customer name */}
                  <div>
                    <div>
                      <p className="text-base">{customer_profile.name}</p>
                    </div>
                  </div>
                </div>
                {/* price */}
                <div>
                  <p className="text-base font-medium">${price}</p>
                </div>
              </div>
              {/* Button */}
              <div>
                <Link to={`/estateDetails/${id}`}>
                  <button className="btn rounded-full px-8 text-white bg-[#1563DF]">
                    View Property
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </>
  );
};

export default EstateCard;
