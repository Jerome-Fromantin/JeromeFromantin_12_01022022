import HorizBar from "./HorizBar"
import VerticBar from "./VerticBar"
import { Outlet } from "react-router-dom"

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
