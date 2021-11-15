import { useLocation } from 'react-router-dom';
import Dashboard from "../../Dashboard";
import CreateFile from "../../CreateFile";
import ListFile from "../../ListFile";
import Profile from "../../Profile";
import Logout from "../../Logout";

const Content = ({ currentLocation }) => {
    const location = useLocation();
    return (
        <div className="main-content flex-1 bg-gray-100 md:mt-2 pb-24 md:pb-5">
            <div className="bg-gray-800 -mt-2">
                <div className="bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h3 className="font-bold pl-2">{currentLocation}</h3>
                </div>
            </div>

            {location.pathname === "/dashboard" ?
                <Dashboard />
                : location.pathname === "/createfile" ?
                    <CreateFile />
                    : location.pathname === "/listfile" ?
                        <ListFile />
                        : location.pathname === "/profile" ?
                            <Profile />
                            :
                            <Logout />
            }
        </div>
    );
}

export default Content;