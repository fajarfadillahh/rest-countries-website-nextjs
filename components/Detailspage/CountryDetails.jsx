import Link from "next/link";
import { useEffect, useState } from "react";
import { RiArrowLeftLine } from "react-icons/ri";

export default function CountryDetails({ country }) {
  const [borders, setBorders] = useState([]);

  // get border countries
  useEffect(() => {
    const getBorderCountries = async () => {
      const borderName = await Promise.all(
        country.borders.map(async (border) => {
          const res = await fetch(
            `https://restcountries.com/v2/alpha/${border}`
          );
          const data = await res.json();

          return data;
        })
      );
      setBorders(borderName);
    };

    getBorderCountries();
  }, [country]);

  return (
    <section className="section pt-32">
      <div className="container grid gap-10">
        <Link
          href="/"
          className="inline-flex h-[56px] w-max items-center gap-4 rounded-md bg-white px-8 font-semibold text-gray-900 shadow-sm"
        >
          <RiArrowLeftLine size="1.3rem" />
          Back
        </Link>

        <div className="grid gap-12 sm:mx-auto sm:max-w-2xl sm:justify-center lg:max-w-full lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="h-[270px] max-w-[580px] overflow-hidden rounded-md sm:h-[320px] lg:h-[430px] xl:min-w-[580px]">
            <img
              src={`${country.flag}`}
              alt="country flag"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="grid gap-6">
            <h3 className="section-title text-[26px] lg:text-[32px]">
              {country.name}
            </h3>

            <div className="grid gap-10 sm:grid-cols-2 sm:items-start lg:gap-20">
              <ul className="grid gap-3">
                {[
                  ["Native Name:", `${country.nativeName}`],
                  ["Population:", `${country.population.toLocaleString()}`],
                  ["Region:", `${country.region}`],
                  ["Sub Region:", `${country.subregion}`],
                  ["Capital:", `${country.capital}`],
                ].map(([name, value]) => {
                  return (
                    <li key={name} className="inline-flex items-start gap-1">
                      <h3 className="whitespace-nowrap font-semibold text-gray-900">
                        {name}
                      </h3>
                      <p className="text-gray-800">{value}</p>
                    </li>
                  );
                })}
              </ul>

              <ul className="grid gap-3">
                {[
                  ["Top Level Domain:", `${country.topLevelDomain}`],
                  [
                    "Currencies:",
                    `${country.currencies.map((item) => item.name)}`,
                  ],
                  [
                    "Languages:",
                    `${
                      country.languages
                        ? country.languages.map((item) => item.name).join(", ")
                        : "Unknown"
                    }`,
                  ],
                ].map(([name, value]) => {
                  return (
                    <li key={name} className="inline-flex items-start gap-1">
                      <h3 className="whitespace-nowrap font-semibold text-gray-900">
                        {name}
                      </h3>
                      <p className="text-gray-800">{value}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="section-title mb-3 text-[20px]">
                Border Countries:
              </h3>

              <ul className="flex flex-wrap items-center gap-4">
                {borders.length === 0 ? (
                  <li className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-[14px] text-gray-800 shadow-sm">
                    No Border...
                  </li>
                ) : (
                  borders.map((border) => {
                    return (
                      <Link
                        href={`/country/${border.alpha3Code.toLowerCase()}`}
                        key={border.alpha3Code}
                        className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-[14px] text-gray-800 shadow-sm"
                      >
                        {border.name}
                      </Link>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
