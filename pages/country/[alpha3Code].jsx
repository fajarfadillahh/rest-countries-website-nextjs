// import components
import CountryDetails from "@/components/Detailspage/CountryDetails";

export default function Details({ dataCountry }) {
  return (
    <>
      <CountryDetails country={dataCountry} />
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://restcountries.com/v2/all");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: {
        alpha3Code: `${item.alpha3Code}`,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { alpha3Code } = params;
  const res = await fetch(`https://restcountries.com/v2/alpha/${alpha3Code}`);
  const data = await res.json();

  return {
    props: {
      dataCountry: data,
    },
  };
}
