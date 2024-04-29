//! rafce = otomatis memebuat class dengan nama yang ada
const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="my-4 lg:col-span-2">
          <h1 className="py-2 text-xl font-bold md:text-4xl sm:text-3xl">
            Want tips and triks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div>
          <div className="my-4">
            <div className="flex flex-col items-center justify-between w-full sm:flex-row">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex w-full p-3 text-black rounded-md"
              />
              <button className="bg-[rgb(0,223,154)] p-2 rounded-md text-black font-medium w-[200px] ml-4 my-6 px-6 py-3">
                Notify me
              </button>
            </div>
            <p className="">
              We care bout the protection of your data. Read our
              <br />
              <a href="" className="text-[rgb(0,223,154)]">
                {" "}
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
