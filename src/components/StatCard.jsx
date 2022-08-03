const StatCard = ({ title, text }) => {
  return (
    <div className="flex h-12 w-full flex-row gap-1 border border-[#D8D8D8] border-opacity-20 px-6 py-7 sm:h-auto sm:w-40 sm:py-5 sm:pl-6 lg:w-64 lg:pb-7">
      <div className="flex h-full w-full flex-row items-center justify-between gap-1 sm:flex-col sm:items-stretch sm:justify-center">
        <div className="heading-4 text-xs opacity-50 sm:text-[0.7rem] md:text-xs">
          {title}
        </div>
        <div className="heading-2 text-xl md:text-2xl lg:text-4xl">{text}</div>
      </div>
    </div>
  );
};
export default StatCard;
