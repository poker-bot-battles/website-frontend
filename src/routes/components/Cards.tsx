import CodeIcon from "@icons/codeIcon.svg?react";
import PokerIcon from "@icons/pokerIcon.svg?react";
import BeerIcon from "@icons/beerIcon.svg?react";
import { Link } from "react-router";

export default function Cards() {
  return (
    <div className="flex gap-8 p-[2%] flex-wrap">
      <div className="card p-8 bg-base-200 flex-1 basis-md">
        <CodeIcon
          height={80}
          width={80}
          className="self-end fill-base-content"
        />
        <h2 className="font-bold mt-0">Show Off Your Algorithmic Prowess</h2>
        <p>
          Test your skills against other ITU students by creating a
          poker-playing algorithm, and use it to battle it on our homemade
          server.
        </p>
        <p>
          Languages include ones you've (probably) already encountered. We have
          documentation in both Python and Java for the lowest barrier to entry
        </p>
        <div className="flex flex-1 items-end justify-end py-8 ">
          <Link
            to={"/documentation"}
            className="link link-primary text-xl font-bold btn-lg"
          >
            {"See our Documentation >"}
          </Link>
        </div>
      </div>
      <div className="card p-8 bg-base-200 flex-1 basis-md">
        <PokerIcon
          height={80}
          width={80}
          className="self-end fill-base-content"
        />
        <h2 className="font-bold mt-0">
          A Classic Game of No Limit Texas Holdem
        </h2>
        <p>
          You and your robot will be playing standard games of No Limit Texas
          Holdem on our digital pokertable.
        </p>
        <p>
          And if you aren't familar with Texas Holdem, worry not. There's plenty
          of resources and people willing to help if you're ever stuck
        </p>
        <div className="flex flex-1 items-end justify-end py-8">
          <p className="link link-primary text-xl font-bold btn-lg">
            <a href="https://adventuregamers.com/guides/texas-holdem-rules">
              {"See the Texas Holdem Rules >"}
            </a>
          </p>
        </div>
      </div>
      <div className="card p-8 bg-primary text-primary-content flex-1 basis-md">
        <BeerIcon
          height={80}
          width={80}
          className="self-end fill-primary-content"
        />
        <h2 className="font-bold mt-0">Win Prices, Drink Beer, and Have Fun</h2>
        <p>
          The best of the bots win prices such as your own cards, pokerset. And
          if you're not in the top there's still opportunity to get free beer.
        </p>
        <p>
          Having fun is not a requirement but hopefully comes naturally when
          friends, alcohol, and gambling are involved.
        </p>
        <div className="flex flex-1 items-end justify-center py-8">
          <Link to={"/sign-up"} className="btn btn-lg">
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
}
