import { Outlet } from "react-router-dom";
import Navigation from "../../Navigation";
import Footer from "../../Footer";

const AppLayout = ({ children }) => {
    return (
        <main>
            <Navigation/>
            {/* Pages */}
            <Outlet />
            <Footer />
        </main>
    );
};
export default AppLayout;