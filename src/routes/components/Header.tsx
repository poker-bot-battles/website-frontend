import { Link } from "react-router";
import LightModeIcon from "@icons/lightMode.svg?react";
import NightModeIcon from "@icons/nightMode.svg?react";

export default function Header(props: {
  currentTheme: boolean;
  onThemeChange: () => void;
}) {
  return (
    <header className="navbar bg-base-200 p-4">
      {/* Make responsive */}
      <Link to={"/"} className="navbar-start">
        Poker <span className="text-primary">Bot</span> Battles
      </Link>
      <div className="navbar-end gap-2">
        <Link to={"/sign-up"} className="btn btn-primary">
          Sign Up
        </Link>
        <Link to={"/get-started"} className="btn btn-neutral">
          Get Started
        </Link>
        <Link to={"/documentation"} className="btn btn-neutral">
          Documentation
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
    </header>
  );
}
