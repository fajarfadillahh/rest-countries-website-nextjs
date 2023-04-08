// import components
import CountryList from "@/components/Homepage/CountryList";

export default function Home({ dataCountries }) {
  return (
    <>
      <CountryList dataCountries={dataCountries} />
    </>
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
