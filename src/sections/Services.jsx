import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <>
      <section id="products" className="max-container max-sm:mt-12">
        <div className="flex justify-start flex-col gap-5">
          <h2 className="text-4xl font-palanquin font-bold">
            We <span className="text-blue-600">are</span> simply
          </h2>
          <p className="lg:max-w-lg  mt-2 font-montserrat text-slate-gray">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value
          </p>
        </div>
        <section className="max-container flex justify-center flex-wrap gap-9">
          {services.map((service) => (
            <ServiceCard key={service.label} {...service} />
          ))}
        </section>
      </section>
    </>
  );
};

export default Services;
