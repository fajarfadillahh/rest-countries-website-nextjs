// import components
import CountryRegion from "@/components/Homepage/CountryRegion";
import CountrySearch from "@/components/Homepage/CountrySearch";
import CountryCard from "@/components/Homepage/CountryCard";

export default function Home({ dataCountries }) {
  return (
    <section className="section pt-32">
      <div className="container grid gap-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <CountrySearch />
          <CountryRegion />
        </div>

        <div className="grid gap-12 justify-self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dataCountries?.map((country) => {
            return <CountryCard key={country.numericCode} country={country} />;
          })}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://restcountries.com/v2/all");
  const data = await res.json();

  return {
    props: {
      dataCountries: data,
    },
  };
}
