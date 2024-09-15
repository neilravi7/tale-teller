import React from 'react';
import { FaSquareGithub, FaSquareXTwitter, FaSquareFacebook } from "react-icons/fa6";


function ProfileCard(props) {
    return (
        <>
            <div className="col-12">
                <div className="card widget-card border-light shadow-sm">
                    <div className="card-header text-bg-primary">
                        Social Accounts
                    </div>
                    <div className="card-body">
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
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="card widget-card border-light shadow-sm">
                    <div className="card-header text-bg-primary">About Me</div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush mb-0">
                            <li className="list-group-item">
                                <h6 className="mb-1">
                                    <span className="bii bi-mortarboard-fill me-2" />
                                    Education
                                </h6>
                                <span>M.S Computer Science</span>
                            </li>
                            <li className="list-group-item">
                                <h6 className="mb-1">
                                    <span className="bii bi-geo-alt-fill me-2" />
                                    Location
                                </h6>
                                <span>Mountain View, California</span>
                            </li>
                            <li className="list-group-item">
                                <h6 className="mb-1">
                                    <span className="bii bi-building-fill-gear me-2" />
                                    Company
                                </h6>
                                <span>GitHub Inc</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="card widget-card border-light shadow-sm">
                    <div className="card-header text-bg-primary">Skills</div>
                    <div className="card-body">
                        <span className="badge text-bg-primary">HTML</span>
                        <span className="badge text-bg-primary">SCSS</span>
                        <span className="badge text-bg-primary">Javascript</span>
                        <span className="badge text-bg-primary">React</span>
                        <span className="badge text-bg-primary">Vue</span>
                        <span className="badge text-bg-primary">Angular</span>
                        <span className="badge text-bg-primary">UI</span>
                        <span className="badge text-bg-primary">UX</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileCard;