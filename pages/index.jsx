// import components
import CountrySearch from "@/components/Homepage/CountrySearch";

export default function Home() {
  return (
    <section className="section pt-32">
      <div className="container grid gap-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <CountrySearch />
          <div>country region</div>
        </div>

        <div className="grid gap-12 justify-self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div>country card</div>
        </div>
      </div>
    </section>
  );
}
