const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <h2 className="text-center text-[#1563DF]">{heading}</h2>
      <p className="text-center font-bold text-xl">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
