import { Outlet } from "react-router-dom";
import Navigation from "../../Navigation";
import Footer from "../../Footer";

const AppLayout = ({ children }) => {
    return (
        <main>
            <div className="container-fluid">
                <Navigation/>
            </div>
            {/* Pages */}
            <Outlet />
            <Footer />
        </main>
    );
};
export default AppLayout;