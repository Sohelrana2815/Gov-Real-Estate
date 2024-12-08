import { BiArea, BiLocationPlus } from "react-icons/bi";
import { GrStatusInfo } from "react-icons/gr";

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
    facilities,
    image,
    agent,
  } = estate;
  return (
    <>
      <div>
        <div className="card card-compact bg-base-100 shadow-lg">
          <figure className="md:h-72">
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
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

            <div className="divider"></div>
            <div>
              <img src={agent} alt="" />
            </div>
            <p>{price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstateCard;
