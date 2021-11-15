import { Link } from "react-router-dom";

const Sidebar = ({ handleSideBarClick }) => {
    return (
        <div className="bg-gray-800 shadow-xl h-16 fixed bottom-0 md:relative md:h-screen z-10 w-full md:w-48">
            <div className="md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                    <li className="mr-3 flex-1">
                        <Link to="/dashboard">
                            <button onClick={() => handleSideBarClick("Dashboard")} className="block w-full bg-gray-900 text-center py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-500">
                                <i className="fa fa-home pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Dasboard</span>
                            </button>
                        </Link>
                    </li>
                    <li className="mr-3 flex-1">
                        <Link to="/createfile">
                            <button onClick={() => handleSideBarClick("Create File")} className="block w-full text-left py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-500">
                                <i className="fas fa-plus-circle pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Create File</span>
                            </button>
                        </Link>
                    </li>
                    <li className="mr-3 flex-1">
                        <Link to="/listfile">
                            <button onClick={() => handleSideBarClick("List File")} className="block w-full text-left py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-500">
                                <i className="fa fa-list pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">List File</span>
                            </button>
                        </Link>
                    </li>
                    <li className="mr-3 flex-1">
                        <Link to="/profile">
                            <button onClick={() => handleSideBarClick("Profile")} className="block w-full text-left py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-500">
                                <i className="fas fa-user pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Profile</span>
                            </button>
                        </Link>
                    </li>
                    <li className="mr-3 flex-1">
                        <Link to="/logout">
                            <button onClick={() => handleSideBarClick("Logout")} className="block w-full text-left py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-500">
                                <i className="fas fa-sign-out-alt pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Logout</span>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;