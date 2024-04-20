import { ReactTyped } from "react-typed";

export default function Hero() {
    return (
        <div className="text-white">
            <div className="max-w-[800] mt-[-100] w-full h-screen mx-auto text-center flex flex-col">
                <p className="text-[rgb(0,223,154)] p-2 font-bold ">Crafting digital experiences</p>
                <h1 className="py-4 text-4xl font-bold uppercase md:text-7xl sm:text-6xl md:py-6 sm:py-5">Web & App Development</h1>
                <div className="flex items-center justify-center">
                    <p className="text-xl font-bold md:text-5xl sm:text-4xl">Fast, flexible, solutions for </p>
                    <ReactTyped 
                        className="pl-2 text-xl font-bold uppercase md:pl-4 md:text-5xl sm:text-4xl"
                        strings={[
                            "websites",
                            "applications",
                            "digital products",
                          ]}
                          typeSpeed={120}
                          backSpeed={140}
                          loop
                    />
                    
                </div>
                <p className="py-2 font-bold text-gray-500 md:text-2xl sm:text-x">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, esse.</p>
                    <button className="bg-[rgb(0,223,154)] py-3 text-black w-[200px] rounded-md font-medium my-6 mx-auto ">
                        Learn More
                    </button>
            </div>
        </div>
    );
}

//? Noted
//* npm install react-typed --save
// Menambahkannya untuk mendapatkan effek typed yang ada pada react