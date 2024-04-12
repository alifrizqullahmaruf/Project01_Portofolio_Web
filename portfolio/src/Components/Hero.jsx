
export default function Hero() {
    return (
        <>
            <div className="flex flex-col items-center px-4 py-12 mx-auto bg-gray-100 md:flex-row sm:px-6 lg:px-8">
                <div className="mb-4 md:w-1/2 md:mb-0">
                    <p className="mb-4 text-sm text-gray-600 ">Flutter | React Native</p>
                    <h1 className="mb-2 text-3xl font-bold text-gray-800">Mobile Developer</h1>
                    <p className="mb-4 text-sm text-gray-600">This is a template Figma file, turned into code using Anima. 
    Learn more at AnimaApp.com</p>
                    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">Contact</button>
                </div>
                <div className="flex justify-center md:w-1/2">
                    <img src="./src/assets/foto_alif.png" alt="Gambar Hero" className="w-full rounded-lg" style={{ width: '250px' }}/>
                </div>
            </div>
        </>
    );
}
