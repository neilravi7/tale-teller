import { Outlet } from "react-router-dom";

const AuthLayout = ({ children }) => {
    return (
        <main className="bg-info" style={{width:"100%", height:"100%"}}>
            <div className="bg-primary-subtle">
            <section className="py-5">
                <div className="container">
                    <div className="row rounded-3">
                        {/* Pages */}
                        <Outlet />
                    </div>
                </div>
            </section>
            </div>
            
        </main>
    );
};
export default AuthLayout;