import { useParams } from "react-router-dom";

const EstateDetails = () => {
  const { id } = useParams();
  return (
    <>
      <div>Details: {id}</div>
    </>
  );
};

export default EstateDetails;
