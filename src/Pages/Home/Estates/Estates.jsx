import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import EstateCard from "./EstateCard";
import { FaArrowRight } from "react-icons/fa6";

const Estates = () => {
  const [estates, setEstates] = useState([]);
  const [visibleEstates, setVisibleEstates] = useState(6);

  useEffect(() => {
    fetch("estateData.json")
      .then((response) => response.json())
      .then((data) => setEstates(data))
      .catch((error) => console.error("Error White fetching data", error));
  }, []);

  return (
    <>
      <SectionTitle
        heading="Featured Properties"
        subHeading="Recommended For You"
      />

      <div className="max-w-screen-2xl mx-auto font-Manrope">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 p-4">
          {estates.slice(0, visibleEstates).map((estate) => (
            <EstateCard key={estate.id} estate={estate} />
          ))}
        </div>
        {/* All Properties Button */}
        <div className={visibleEstates === estates.length ? "hidden" : ""}>
          <div className="flex justify-center py-4">
            <button
              onClick={() => setVisibleEstates(estates.length)}
              className="btn rounded-full bg-[#1563DF] text-white"
            >
              View All Properties
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Estates;
