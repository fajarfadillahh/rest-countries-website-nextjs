import Link from "next/link";
import { useEffect, useState } from "react";

// import components
import CountrySearch from "./CountrySearch";
import CountryRegion from "./CountryRegion";
import CountryCard from "./CountryCard";

export default function CountryList({ dataCountries }) {
  const [filterCountries, setFilterCountries] = useState(dataCountries);
  const [selectedRegion, setSelectedRegion] = useState("All");

  useEffect(() => {
    // filter countries by region
    const filtered =
      selectedRegion === "All"
        ? dataCountries
        : dataCountries.filter((country) => country.region === selectedRegion);

    setFilterCountries(filtered);
  }, [dataCountries, selectedRegion]);

  const handleSelectedRegion = (region) => {
    setSelectedRegion(region);
  };

  return (
    <section className="section pt-32">
      <div className="container grid gap-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <CountrySearch />
          <CountryRegion onRegion={handleSelectedRegion} />
        </div>

        <div className="grid gap-12 justify-self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filterCountries?.map((country) => {
            return (
              <Link
                href={`/country/${country.alpha3Code.toLowerCase()}`}
                key={country.numericCode}
              >
                <CountryCard country={country} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
