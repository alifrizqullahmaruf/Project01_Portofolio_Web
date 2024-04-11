export default function Navbar(){
    return(
        <>
            <nav className="bg-gray-100">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href="#" className="text-lg font-semibold text-black">Logo</a>
                        </div>
                        <div className="hidden sm:block">
                            <div className="flex space-x-4">
                                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-700 hover:text-white">About</a>
                                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-700 hover:text-white">Work</a>
                                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-700 hover:text-white">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
