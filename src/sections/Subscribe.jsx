const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Create Your
        <span className="text-blue-600"> Account </span> in a few minutes
      </h3>

      <div className="flex max-sm:justify-end items-center max-sm:w-full ">
        <button
          type="button"
          className="text-2xl text-black  rounded-[20px] border-2  w-[170px]  
        border-black px-1 py-1
       "
        >
          Sign Up
        </button>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Subscribe;
