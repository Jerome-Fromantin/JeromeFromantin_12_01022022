import HorizBar from "./HorizBar"
import VerticBar from "./VerticBar"
import { Outlet } from "react-router-dom"

/**
 * This component contains the sub-components that would appear on each page of the application when completed.
 * @function Layout
 * HorizBar : The top horizontal bar with the logo and fake links for the navigation.
 * VerticBar : The left vertical bar with copyright and icons on fake links for another navigation.
 * Outlet : The remaining content, different on each page. Here only the profile page.
 */
 function Layout() {
    return (
        <div className="whole">
            <HorizBar/>
            <div className="underHorizBar">
                <VerticBar/>
                <div className="dashboard"><Outlet/></div>
            </div>
        </div>
    )
}

export default Layout
