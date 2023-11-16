import Nav from "../components/Nav";
import Hero from "./Hero";
import PopularProducts from "./PopularProducts";
import Services from "./Services";
import CustomerReviews from "./CustomerReviews";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Home = () => {
  return (
    <main className="relative rounded-[20px] shadow-3xl">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b rounded-[20px] shadow-3xl">
        <Hero />
      </section>
      <section className="padding rounded-[20px] shadow-3xl ">
        <PopularProducts />
      </section>
      <section className="padding-x py-10 rounded-[20px] shadow-3xl">
        <Services />
      </section>
      <section className="bg-pale-blue padding rounded-[20px] shadow-3xl">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=" bg-slate-100 padding-x padding-t pb-8 rounded-[20px] shadow-3xl">
        <Footer />
      </section>
    </main>
  );
};

export default Home;
