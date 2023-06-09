import { RiSearchLine } from "react-icons/ri";

export default function CountrySearch({ onSearch }) {
  return (
    <form className="flex h-[56px] max-w-lg items-center rounded-md bg-white shadow-sm">
      <div className="inline-flex h-full w-[80px] items-center justify-center text-gray-600">
        <RiSearchLine className="text-[1.3rem]" />
      </div>

      <input
        type="text"
        onChange={onSearch}
        placeholder="Search for a country..."
        className="h-full w-full bg-transparent pr-8 font-semibold text-gray-900 outline-none placeholder:text-gray-600"
      />
    </form>
  );
}
