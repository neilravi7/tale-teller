import { Outlet } from "react-router-dom";

const AuthLayout = ({ children }) => {
    return (
        <main>
            <section className="py-5">
                <div className="container px-5">
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        {/* Pages */}
                        <Outlet />
                    </div>
                </div>
            </section>
        </main>
    );
};
export default AuthLayout;