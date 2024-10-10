import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
// import { Howl } from "howler";
// import SoundBar from "./SoundBar/SoundBar";
import Link from "next/link";

// const multiPop = new Howl({
//   src: ["/sounds/multi-pop.mp3"],
// });

const Header = ({ children }) => {
  const inputRef = useRef(null);

  const handleClick = useCallback((e) => {
    if (e.target.cheked) multiPop.play();
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape" && inputRef.current?.cheked) {
      inputRef.current.cheked = false;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <nav className="w-full fixed top-0 py-8 z-50 select-none bg-gradient-to-b from-black shadow-black transition-none duration-300">
      <div className="flex justify-between section-container">
        <Link href="#home" className="link">
          <Image src="/logo.svg" alt="Logo - WahabArf" width={25} height={25} />
        </Link>
        <div className="outer-menu relative flex items-center gap-8 z-[1]">
          {/* <SoundBar /> */}
          <input
            ref={inputRef}
            aria-labelledby="menu"
            aria-label="menu"
            className="checkbox-toggle link absolute top-0 right-0 w-6 h-6 opacity-0"
            type="checkbox"
            onClick={handleClick}
          />
          <div className="hamburger w-6 h-6 flex items-center justify-center">
            <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center" />
          </div>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Header;
