import { Link } from "react-router";
import LightModeIcon from "@icons/lightMode.svg?react";
import NightModeIcon from "@icons/nightMode.svg?react";
import LogoFlatDark from "@icons/logoIconFlatDark.svg?react";
import BurgerIcon from "@icons/burger.svg?react";
import { useState } from "react";

export default function Header(props: {
  currentTheme: boolean;
  onThemeChange: () => void;
}) {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setInnerWidth(window.innerWidth);
  });

  const NavContent = (
    <div className="flex flex-col md:flex-row gap-2">
      <Link to={"/sign-up"} className="btn btn-primary">
        Sign Up
      </Link>
      <Link to={"/get-started"} className="btn btn-neutral">
        Get Started
      </Link>
      <Link to={"/documentation"} className="btn btn-neutral">
        Documentation
      </Link>
      <Link to={"/visual-codespace"} className="btn btn-neutral">
        Create Your Robot
      </Link>
      <Link to={"/submit"} className="btn btn-neutral">
        Submit Your Bot
      </Link>

      <label className="swap swap-rotate px-4">
        <input
          type="checkbox"
          checked={!props.currentTheme}
          onClick={() => props.onThemeChange()}
        />
        <LightModeIcon className="swap-on h-7 aspect-square fill-base-content" />
        <NightModeIcon className="swap-off h-7 aspect-square fill-base-content" />
      </label>
    </div>
  );

  const Drawer = (
    <div className="drawer w-fit">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-1"
          className="btn btn-ghost btn-square drawer-button"
        >
          <BurgerIcon className="fill-base-content" />
        </label>
      </div>
      <div className="drawer-side bg-base-100 grid place-items-center">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {NavContent}
      </div>
    </div>
  );

  return (
    <header className="navbar bg-base-200 p-4">
      {/* Make responsive */}
      <Link to={"/"} className="flex-1">
        <LogoFlatDark className="max-h-[40px]" width={200} />
      </Link>
      {innerWidth >= 768 ? NavContent : Drawer}
    </header>
  );
}
