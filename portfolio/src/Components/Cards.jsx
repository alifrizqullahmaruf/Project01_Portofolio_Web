import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full bg-white py-[10rem] ">
      <div className="grid md:grid-cols-3 max-w-[1240px] mx-auto gap-8">
        <div className="flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105">
          <img
            src={Single}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="py-8 text-2xl font-bold text-center">Single User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">500 GB Storage</p>
            <p className="py-2 mx-8 border-b">1 Granted User</p>
            <p className="py-2 mx-8 border-b">Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

        </div>
        <div className="flex flex-col w-full p-4 my-4 duration-300 bg-gray-100 rounded-lg shadow-xl hover:scale-105">
          <img
            src={Double}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
          />
          <h2 className="py-8 text-2xl font-bold text-center">Double User</h2>
          <p className="text-4xl font-bold text-center">$249</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">1 TB Storage</p>
            <p className="py-2 mx-8 border-b">2 Granted Users</p>
            <p className="py-2 mx-8 border-b">Send up to 5 GB</p>
          </div>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

        </div>
        <div className="flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105">
          <img
            src={Triple}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="py-8 text-2xl font-bold text-center">Triple User</h2>
          <p className="text-4xl font-bold text-center">$349</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">2 TB Storage</p>
            <p className="py-2 mx-8 border-b">3 Granted Users</p>
            <p className="py-2 mx-8 border-b">Send up to 10 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

        </div>
      </div>
    </div>
  );
}

export default Cards;
