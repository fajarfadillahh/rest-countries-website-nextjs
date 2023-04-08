import Link from "next/link";

// import components
import CountrySearch from "./CountrySearch";
import CountryRegion from "./CountryRegion";
import CountryCard from "./CountryCard";

export default function CountryList({ dataCountries }) {
  return (
    <section className="section pt-32">
      <div className="container grid gap-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <CountrySearch />
          <CountryRegion />
        </div>

        <div className="grid gap-12 justify-self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dataCountries?.map((country) => {
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
