import { AiOutlineMenu } from "react-icons/ai";


export default function Navbar(){
    return(

        <div className="flex items-center justify-between h-24 px-4 text-white max-w-[1240px] mx-auto">
            <h1 className="w-full text-3xl font-bold text-[rgb(0,223,154)]">REACT</h1>
            <ul className="flex hidden">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resaource</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <AiOutlineMenu size={20} />
            <div className="fixed top-0 left-0 border-r h--full w-[60%] border-r-gray-900 bg-[#000300]">
            <h1 className="w-full text-3xl font-bold text-[rgb(0,223,154)] p-4">REACT</h1>
                <ul className="p-4 uppercase">
                    <li className="p-4 border-b border-b-gray-600">Home</li>
                    <li className="p-4 border-b border-b-gray-600">Company</li>
                    <li className="p-4 border-b border-b-gray-600">Resaource</li>
                    <li className="p-4 border-b border-b-gray-600">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    )
}

//? Noted
// npm install react-icons --save
// Kode diatas digunnakan untuk mengintall icon secar otomatis pada react link : https://www.npmjs.com/package/react-icons 
