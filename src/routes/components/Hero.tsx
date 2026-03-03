import { Link } from "react-router";

import backgroundImage from "@images/IMG_2584 1.png";
import LogoDark from "@icons/pokerbotDark.svg?react";

export default function Hero() {
  return (
    <div className="hero h-[70vh]">
      <div
        className="hero-overlay h-[150%] bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="h-full w-full bg-linear-to-b from-transparent to-base-100" />
      </div>
      <div className="hero-content flex-col items-start w-full gap-0">
        <LogoDark className="w-full h-fit" />
        <p className="lg:text-xl">
          A classic game No Limit Texas Holdem <br />
          where everyone is a robot
        </p>
        <div className="flex-down gap-2 sm:flex-row">
          <Link to={"/get-started"} className="btn btn-primary lg:btn-lg">
            Get Started
          </Link>
          <Link to={"/documentation"} className="btn btn-primary lg:btn-lg">
            Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}
