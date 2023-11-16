const ServiceCard = ({ imgURL, label, subtext, subtext1, subtext2 }) => {
  return (
    <div className="flex-1 sm:w-[550px] sm:min-w-[550px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-blue-600 rounded-full">
        <img src={imgURL} alt="label" width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext2}
      </p>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext1}
      </p>
    </div>
  );
};

export default ServiceCard;
