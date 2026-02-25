import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";
import cat3 from "../../assets/cat3.png";
import cat4 from "../../assets/cat4.png";
import cat5 from "../../assets/cat5.png";
import cat6 from "../../assets/cat6.png";

export default function AboutUs() {
  return (
    <div className="flex-down self-center py-16 min-h-[50vh]">
      <div className="relative flex-down gap-8 items-end z-10 p-4">
        <h2 className="font-display-alternative text-6xl text-primary">
          Who are we?
        </h2>
        <div className="flex w-full gap-8 flex-wrap justify-center">
          <div className="flex-down gap-4 w-3xs">
            <img src={cat1} className="rounded-2xl" />
            <div className="flex-down">
              <p className="font-display-alternative text-2xl m-0">
                Gergely Takács
              </p>
              <p>Chair</p>
            </div>
          </div>
          <div className="flex-down gap-4 w-3xs">
            <img src={cat6} className="rounded-2xl aspect-square" />
            <div className="flex-down">
              <p className="font-display-alternative text-2xl m-0">
                Luca Costa Martins
              </p>
              <p>Vice-Chair</p>
            </div>
          </div>
          <div className="flex-down gap-4 w-3xs">
            <img src={cat2} className="rounded-2xl" />
            <div className="flex-down">
              <p className="font-display-alternative text-2xl m-0">
                Andreas Nygaard Schiøtt
              </p>
              <p>Treasurer</p>
            </div>
          </div>
          <div className="flex-down gap-4 w-3xs">
            <img src={cat3} className="rounded-2xl" />
            <div className="flex-down">
              <p className="font-display-alternative text-2xl m-0">
                August Bugge
              </p>
              <p>Marketing</p>
            </div>
          </div>
          <div className="flex-down gap-4 w-3xs">
            <img src={cat4} className="rounded-2xl" />
            <div className="flex-down">
              <p className="font-display-alternative text-2xl m-0">
                Laura Benthin Hansen
              </p>
              <p>Head of funding</p>
            </div>
          </div>
          <div className="flex-down gap-4 w-3xs">
            <img src={cat5} className="rounded-2xl" />
            <div className="flex-down">
              <p className="font-display-alternative text-2xl m-0">
                Tobias Mondrup Holm
              </p>
              <p>Development lead</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
