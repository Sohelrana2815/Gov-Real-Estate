import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import EstateCard from "./EstateCard";

const Estates = () => {
  const [estates, setEstates] = useState([]);

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

      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-center">Estates Data: {estates.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {estates.map((estate) => (
            <EstateCard key={estate.id} estate={estate} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Estates;
