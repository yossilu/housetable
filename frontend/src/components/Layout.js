import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
    
    return (
        /*app main layout, header is here for fun*/
        <main className="App">
            <Header></Header>
            <div className="outlet"><Outlet/></div>
        </main>
    )
}

export default Layout