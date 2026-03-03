import communityImage from "@images/community.jpg";
import community2Image from "@images/community2.jpg";
import freeImage from "@images/free.png";

export default function PointOfSale() {
  return (
    <div className="flex-down items-center p-8 gap-32 min-h-[50vh]">
      <div className="w-full lg:w-3/4 relative">
        <div className="absolute h-full w-2/3 left-0 top-0 z-0">
          <div className="absolute h-full w-full left-0 bg-linear-to-r from-transparent to-base-100" />
          <img src={communityImage} className="h-full w-full object-cover" />
        </div>
        <div className="relative flex-down items-end z-10 p-4">
          <h3 className="font-display-alternative text-4xl lg:text-6xl text-primary">
            Join our Community
          </h3>
          <p>
            Come alone or in a group to one of the biggest ITU events of the
            year. <br />
            Meet new people, have fun, and learn a lot about programming and
            poker!
          </p>
        </div>
      </div>
      <div className="w-full lg:w-3/4 relative">
        <div className="absolute h-full w-2/3 right-0 top-0 z-0">
          <div className="absolute h-full w-full left-0 bg-linear-to-l from-transparent to-base-100" />
          <img src={freeImage} className="h-full w-full object-cover" />
        </div>
        <div className="relative flex-down z-10 p-4">
          <h3 className="font-display-alternative text-4xl lg:text-6xl text-primary">
            It's absolutely free!
          </h3>
          <p>
            There's absolutely no barrier to entry. <br />
            Other than the price of beer and soda when coding.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-3/4 relative">
        <div className="absolute h-full w-2/3 left-0 top-0 z-0">
          <div className="absolute h-full w-full left-0 bg-linear-to-r from-transparent to-base-100" />
          <img src={community2Image} className="h-full w-full object-cover" />
        </div>
        <div className="relative flex-down items-end z-10 p-4">
          <h3 className="font-display-alternative text-4xl lg:text-6xl text-primary">
            Not convinced?
          </h3>
          <p>
            By participating you will not only join a great event <br />
            but just by signing up you are guaranteed <b>TWO</b> free beers at
            the event! <br />
          </p>
        </div>
      </div>
    </div>
  );
}
