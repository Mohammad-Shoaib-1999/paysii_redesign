import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex justify-start items-center flex-1 flex-col w-full max-sm:w-full rounded-[20px] shadow-3xl  ">
      <img src={imgURL} alt={name} className=" w-[280px] h-[280px] pt-6" />
      <div className="mt-8 flex justify-center gap-2.5"></div>
      <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 p-10 font-semibold font-montserrat text-slate-gray text-m leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
