import Laptop from "../assets/laptop.jpg";

export default function Analytics() {
  return (
    <div className="w-full px-4 py-16 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {/* image */}
        <img src={Laptop} alt="" className="w-[500px] mx-auto my-3" />

        {/* text */}
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[rgb(0,223,154)] font-bold">
            Data Analytics dashboard
          </p>
          <h1 className="py-2 text-xl font-bold md:text-4xl sm:text-3xl">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur commodi excepturi sed, molestiae consequuntur dolores rem ducimus dolorum nihil eveniet totam laudantium fugiat maxime quos laboriosam reprehenderit! Quasi aliquam mollitia porro eos dolorem vero ducimus voluptas veniam optio accusantium.
          </p>
          {/* button */}
        <button className="bg-black py-3 text-[rgb(0,223,154)] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0">
          Learn More
        </button>
        </div>

        
      </div>
    </div>
  );
}
