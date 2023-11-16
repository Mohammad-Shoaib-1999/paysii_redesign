import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex justify-start flex-col gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          How <span className="text-blue-600">It</span> Works
        </h2>
        <p className="lg:max-w-lg  mt-2 font-montserrat text-slate-gray">
         Follow the Steps
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
