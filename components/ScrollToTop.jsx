import { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

export default function ScrollToTop() {
  const [visible, setVisible] = useState("-bottom-full");

  useEffect(() => {
    window.addEventListener("scroll", handleVisible);

    return () => {
      window.removeEventListener("scroll", handleVisible);
    };
  }, [visible]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleVisible = () => {
    if (window.scrollY > 10) {
      setVisible("bottom-12");
    } else {
      setVisible("-bottom-full");
    }
  };

  return (
    <div
      className={`fixed bottom-12 right-8 inline-flex h-[36px] w-[36px] items-center justify-center rounded-md bg-white text-[1.3rem] text-gray-900 shadow-md transition-all duration-300 ${visible}`}
      onClick={handleScrollToTop}
    >
      <RiArrowUpSLine />
    </div>
  );
}
