import axios from "axios";
import { statistics } from "../constants";
import { useEffect, useState } from "react";

const Hero = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    axios
      .get("/api/paysiiorm/api/sendingcountrylist.json")
      .then((response) => {
        const modifiedCountries = response.data.map((country) => ({
          id: country.country.countryId,
          name: country.country.countryName,
        }));
        setCountries(modifiedCountries);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });

    axios
      .get("/api/paysiiorm/api/payingcountrylist.json")
      .then((response) => {
        const modifiedCities = response.data.map((country) => ({
          id: country.countryId,
          name: country.countryName,
        }));
        setCities(modifiedCities);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  }, []);

  const handleCheckRates = () => {
    // Add logic to check rates based on selectedCountry and selectedCity
    console.log(`Checking rates for ${selectedCountry} - ${selectedCity}`);
  };

  return (
    <section
      id="home"
      className="w-full  xl:flex-row  flex flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-center w-full  max-xl:padding-x pt-28">
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Remittance
          </span>
          <br />
          <span className="text-blue-600 inline-block mt-3">Made</span> Easy
        </h1>
        <p className="pt-10 text-xl font-montserrat text-blue-600">
          Faster, Simpler, Safer
        </p>

        <div className="flex justify-center items-center gap-10 rounded-[20px] shadow-2xl px-10 py-10 ">
          <select
            className="input text-2xl rounded-[20px] px-2 py-2"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>

          <select
            className="input text-2xl rounded-[20px] px-2 py-2"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>

          <button
            onClick={handleCheckRates}
            className="text-2xl text-black  rounded-[20px] border-2  w-[170px]  
        border-black px-1 py-1
       "
          >
            Check Rates
          </button>
        </div>
        <h2 className="mt-10 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10">
            We{" "}
          </span>
          <span className="text-blue-600 inline-block mt-3">deliver</span>{" "}
          instantly to
        </h2>
        <div className="flex justify-center items-center flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <img src={stat.imgURL} alt="label" width={54} height={54} />

              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
