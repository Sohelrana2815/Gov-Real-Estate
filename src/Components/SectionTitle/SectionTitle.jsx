const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="font-Manrope">
      <h2 className="text-center text-[#1563DF] text-xl">{heading}</h2>
      <p className="text-center font-bold text-4xl">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
