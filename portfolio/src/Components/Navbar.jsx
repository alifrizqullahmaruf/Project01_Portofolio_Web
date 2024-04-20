import { useState } from "react"; // Import useState hook dari React
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import ikon menu dari react-icons

export default function Navbar() {
    // Membuat useState untuk mengatur status navigasi
    const [nav, setNav] = useState(false);

    // Fungsi untuk mengubah status navigasi
    const handleNavbar = () => {
        setNav(!nav);
    }

    return (
        <div className="flex items-center justify-between h-24 px-4 text-white max-w-[1240px] mx-auto">
            {/* Judul navbar */}
            <h1 className="w-full text-3xl font-bold text-[rgb(0,223,154)]">REACT</h1>
            
            {/* Navigasi desktop (hidden pada mobile) */}
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resource</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            
            {/* Tombol menu yang bisa di-klik */}
            <div onClick={handleNavbar} className="block md:hidden">
                {(!nav) ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            
            {/* Navigasi mobile yang muncul ketika tombol menu diklik */}
            <div className={ !nav ? 'fixed top-0 left-0 border-r h-full w-[60%] border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text-[rgb(0,223,154)] p-4 ">REACT</h1>
                <ul className="p-4 uppercase">
                    <li className="p-4 border-b border-b-gray-600">Home</li>
                    <li className="p-4 border-b border-b-gray-600">Company</li>
                    <li className="p-4 border-b border-b-gray-600">Resource</li>
                    <li className="p-4 border-b border-b-gray-600">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    );
}
