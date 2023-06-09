import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiArrowDownSLine } from "react-icons/ri";

// regions list
const regions = [
  { name: "All", value: "All" },
  { name: "Africa", value: "Africa" },
  { name: "America", value: "Americas" },
  { name: "Asia", value: "Asia" },
  { name: "Europe", value: "Europe" },
  { name: "Oceania", value: "Oceania" },
];

export default function CountryRegion({ onRegion }) {
  const [region, setRegion] = useState("All");

  const handleSelectedRegion = (region) => {
    setRegion(region);
    onRegion(region);
  };

  return (
    <Menu as="div" className="relative z-10 w-max lg:justify-self-end">
      <Menu.Button className="inline-flex h-[56px] w-[210px] items-center justify-between rounded-md bg-white px-6 font-semibold text-gray-900 shadow-sm">
        {region === "All" ? "Filter by Region" : region}
        <RiArrowDownSLine size="1.3rem" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-in duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className="absolute mt-2 flex w-full flex-col gap-1 rounded-md bg-white px-6 py-4 shadow-sm"
        >
          {regions.map((region) => {
            return (
              <Menu.Item
                as="li"
                key={region.name}
                onClick={() => handleSelectedRegion(region.value)}
                className="cursor-pointer font-semibold text-gray-900 hover:text-gray-600"
              >
                {region.name}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
