import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import { useLocation } from 'react-router-dom';

const NavbarTitile = {
    dashboard: "Dashboard",
    createfile: "Create File",
    listfile: "List File",
    profile: "Profile",
    logout: "Logout",
};

const Layout = () => {
    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState(NavbarTitile?.[location?.pathname?.replace("/","")]);

    const handleSideBarClick = (e) => {
        setCurrentLocation(e);
    }

    return (
        <>
            <div className="flex flex-col md:flex-row">
                <Sidebar handleSideBarClick={handleSideBarClick} />
                <Content currentLocation={currentLocation} />
            </div>
        </>
    );
}

export default Layout;