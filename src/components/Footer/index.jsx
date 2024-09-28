
import { FaSquareGithub, FaSquareXTwitter, FaSquareFacebook } from "react-icons/fa6";

const Footer = (props) => {
    return (
        <footer className="border-top bg-light">
            <div className="container p-5 ">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a href="#!">
                                    <span className="fa-stack fa-lg">
                                        <FaSquareXTwitter size={30} className="text-dark"></FaSquareXTwitter>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!">
                                    <span className="fa-stack fa-lg">
                                        <FaSquareFacebook size={30} className="text-dark"></FaSquareFacebook>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!">
                                    <span className="fa-stack fa-lg">
                                        <FaSquareGithub size={30} className="text-dark" ></FaSquareGithub>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div className="small text-center text-muted fst-italic">
                            Copyright © Your Website 2023
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;