import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { requestCreator } from "../Helper/utils"
import { API_URL } from "../Helper/urls"
import { toast } from 'react-toastify';


const Profile = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const location = useLocation();
    const [userData, setUserData] = useState({});

    useEffect(()=>{
        if(isAuthenticated && user){
            const userId = user.user_id;
            const URL = API_URL.getUserProfile(userId);
            const requestOption = requestCreator("GET", {}, true);
            fetch(URL, requestOption)
            .then((response) => {
                if(!response.ok){
                    throw new Error(`Error: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setUserData(
                    data
                )
                toast.success("Profile data fetch successfully");
            }).catch((error)=>{
                toast.error(error.message);
            })
        }
    },[]);

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />
    }

    console.log("userData: ", userData);
    
    return (
        <section className="bg-light py-3 py-md-5 py-xl-8">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h2 className="mb-4 display-5 text-center">Profile</h2>
                        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row gy-4 gy-lg-0">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <div className="row gy-4">
                            <div className="col-12">
                                <div className="card widget-card border-light shadow-sm">
                                    <div className="card-header text-bg-primary">
                                        Welcome, 
                                    </div>
                                    <div className="card-body">
                                        <div className="text-center mb-3">
                                            <img
                                                src=""
                                                className="img-fluid rounded-circle"
                                                alt="profile image"
                                            />
                                        </div>
                                        <h5 className="text-center mb-1"></h5>
                                        <p className="text-center text-secondary mb-4">
                                            Developer
                                        </p>
                                        <ul className="list-group list-group-flush mb-4">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <h6 className="m-0">Followers</h6>
                                                <span></span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <h6 className="m-0">Following</h6>
                                                <span>5,987</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <h6 className="m-0">Friends</h6>
                                                <span>4,620</span>
                                            </li>
                                        </ul>
                                        <div className="d-grid m-0">
                                            <button className="btn btn-outline-primary" type="button">
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 col-xl-9">
                        <div className="card widget-card border-light shadow-sm">
                            <div className="card-body p-4">
                                <ul className="nav nav-tabs" id="profileTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="overview-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#overview-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="overview-tab-pane"
                                            aria-selected="true"
                                        >
                                            Overview
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="profile-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="profile-tab-pane"
                                            aria-selected="false"
                                        >
                                            Profile
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="email-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#email-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="email-tab-pane"
                                            aria-selected="false"
                                        >
                                            Emails
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="password-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#password-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="password-tab-pane"
                                            aria-selected="false"
                                        >
                                            Password
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content pt-4" id="profileTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="overview-tab-pane"
                                        role="tabpanel"
                                        aria-labelledby="overview-tab"
                                        tabIndex={0}
                                    >
                                        <h5 className="mb-3">About</h5>
                                        <p className="lead mb-3">
                                            Ethan Leo is a seasoned and results-driven Project Manager
                                            who brings experience and expertise to project management.
                                            With a proven track record of successfully delivering
                                            complex projects on time and within budget, Ethan Leo is the
                                            go-to professional for organizations seeking efficient and
                                            effective project leadership.
                                        </p>
                                        <h5 className="mb-3">Profile</h5>
                                        <div className="row g-0">
                                            <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                <div className="p-2">First Name</div>
                                            </div>
                                            <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                <div className="p-2">Ethan</div>
                                            </div>
                                            <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                <div className="p-2">Last Name</div>
                                            </div>
                                            <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                <div className="p-2">Leo</div>
                                            </div>
                                            <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                <div className="p-2">Education</div>
                                            </div>
                                            <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                <div className="p-2">M.S Computer Science</div>
                                            </div>
                                            <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                <div className="p-2">Address</div>
                                            </div>
                                            <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                <div className="p-2">Mountain View, California</div>
                                            </div>
                                            <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                <div className="p-2">Country</div>
                                            </div>
                                            <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                <div className="p-2">United States</div>
                                            </div>
                                            <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                <div className="p-2">Job</div>
                                            </div>
                                            <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                <div className="p-2">Project Manager</div>
                                            </div>
                                            <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                <div className="p-2">Company</div>
                                            </div>
                                            <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                <div className="p-2">GitHub Inc</div>
                                            </div>
                                            <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                <div className="p-2">Phone</div>
                                            </div>
                                            <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                <div className="p-2">+1 (248) 679-8745</div>
                                            </div>
                                            <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                <div className="p-2">Email</div>
                                            </div>
                                            <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                <div className="p-2">leo@example.com</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="profile-tab-pane"
                                        role="tabpanel"
                                        aria-labelledby="profile-tab"
                                        tabIndex={0}
                                    >
                                        <form action="#!" className="row gy-3 gy-xxl-4">
                                            <div className="col-12">
                                                <div className="row gy-2">
                                                    <label className="col-12 form-label m-0">
                                                        Profile Image
                                                    </label>
                                                    <div className="col-12">
                                                        <img
                                                            src="./assets/img/profile-img-1.jpg"
                                                            className="img-fluid"
                                                            alt="Luna John"
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <a
                                                            href="#!"
                                                            className="d-inline-block bg-primary link-light lh-1 p-2 rounded"
                                                        >
                                                            <i className="bi bi-upload" />
                                                        </a>
                                                        <a
                                                            href="#!"
                                                            className="d-inline-block bg-danger link-light lh-1 p-2 rounded"
                                                        >
                                                            <i className="bi bi-trash" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="inputFirstName" className="form-label">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputFirstName"
                                                    defaultValue="Ethan"
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="inputLastName" className="form-label">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputLastName"
                                                    defaultValue="Leo"
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="inputEducation" className="form-label">
                                                    Education
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputEducation"
                                                    defaultValue="M.S Computer Science"
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="inputSkills" className="form-label">
                                                    Skills
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputSkills"
                                                    defaultValue="HTML, SCSS, Javascript, React, Vue, Angular, UI, UX"
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="inputJob" className="form-label">
                                                    Job
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputJob"
                                                    defaultValue="Project Manager"
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="inputCompany" className="form-label">
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputCompany"
                                                    defaultValue="GitHub Inc"
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="inputPhone" className="form-label">
                                                    Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="inputPhone"
                                                    defaultValue={+12486798745}
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="inputEmail" className="form-label">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="inputEmail"
                                                    defaultValue="leo@example.com"
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="inputAddress" className="form-label">
                                                    Address
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputAddress"
                                                    defaultValue="Mountain View, California"
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="inputCountry" className="form-label">
                                                    Country
                                                </label>
                                                <select className="form-select" id="inputCountry">
                                                    <option value="Afghanistan">Afghanistan</option>
                                                    <option value="Åland Islands">Åland Islands</option>
                                                    <option value="Albania">Albania</option>
                                                    <option value="Algeria">Algeria</option>
                                                    <option value="American Samoa">American Samoa</option>
                                                    <option value="Andorra">Andorra</option>
                                                    <option value="Angola">Angola</option>
                                                    <option value="Anguilla">Anguilla</option>
                                                    <option value="Antarctica">Antarctica</option>
                                                    <option value="Antigua and Barbuda">
                                                        Antigua and Barbuda
                                                    </option>
                                                    <option value="Argentina">Argentina</option>
                                                    <option value="Armenia">Armenia</option>
                                                    <option value="Aruba">Aruba</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Austria">Austria</option>
                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                    <option value="Bahamas">Bahamas</option>
                                                    <option value="Bahrain">Bahrain</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Barbados">Barbados</option>
                                                    <option value="Belarus">Belarus</option>
                                                    <option value="Belgium">Belgium</option>
                                                    <option value="Belize">Belize</option>
                                                    <option value="Benin">Benin</option>
                                                    <option value="Bermuda">Bermuda</option>
                                                    <option value="Bhutan">Bhutan</option>
                                                    <option value="Bolivia">Bolivia</option>
                                                    <option value="Bosnia and Herzegovina">
                                                        Bosnia and Herzegovina
                                                    </option>
                                                    <option value="Botswana">Botswana</option>
                                                    <option value="Bouvet Island">Bouvet Island</option>
                                                    <option value="Brazil">Brazil</option>
                                                    <option value="British Indian Ocean Territory">
                                                        British Indian Ocean Territory
                                                    </option>
                                                    <option value="Brunei Darussalam">
                                                        Brunei Darussalam
                                                    </option>
                                                    <option value="Bulgaria">Bulgaria</option>
                                                    <option value="Burkina Faso">Burkina Faso</option>
                                                    <option value="Burundi">Burundi</option>
                                                    <option value="Cambodia">Cambodia</option>
                                                    <option value="Cameroon">Cameroon</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Cape Verde">Cape Verde</option>
                                                    <option value="Cayman Islands">Cayman Islands</option>
                                                    <option value="Central African Republic">
                                                        Central African Republic
                                                    </option>
                                                    <option value="Chad">Chad</option>
                                                    <option value="Chile">Chile</option>
                                                    <option value="China">China</option>
                                                    <option value="Christmas Island">
                                                        Christmas Island
                                                    </option>
                                                    <option value="Cocos (Keeling) Islands">
                                                        Cocos (Keeling) Islands
                                                    </option>
                                                    <option value="Colombia">Colombia</option>
                                                    <option value="Comoros">Comoros</option>
                                                    <option value="Congo">Congo</option>
                                                    <option value="Congo, The Democratic Republic of The">
                                                        Congo, The Democratic Republic of The
                                                    </option>
                                                    <option value="Cook Islands">Cook Islands</option>
                                                    <option value="Costa Rica">Costa Rica</option>
                                                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                    <option value="Croatia">Croatia</option>
                                                    <option value="Cuba">Cuba</option>
                                                    <option value="Cyprus">Cyprus</option>
                                                    <option value="Czech Republic">Czech Republic</option>
                                                    <option value="Denmark">Denmark</option>
                                                    <option value="Djibouti">Djibouti</option>
                                                    <option value="Dominica">Dominica</option>
                                                    <option value="Dominican Republic">
                                                        Dominican Republic
                                                    </option>
                                                    <option value="Ecuador">Ecuador</option>
                                                    <option value="Egypt">Egypt</option>
                                                    <option value="El Salvador">El Salvador</option>
                                                    <option value="Equatorial Guinea">
                                                        Equatorial Guinea
                                                    </option>
                                                    <option value="Eritrea">Eritrea</option>
                                                    <option value="Estonia">Estonia</option>
                                                    <option value="Ethiopia">Ethiopia</option>
                                                    <option value="Falkland Islands (Malvinas)">
                                                        Falkland Islands (Malvinas)
                                                    </option>
                                                    <option value="Faroe Islands">Faroe Islands</option>
                                                    <option value="Fiji">Fiji</option>
                                                    <option value="Finland">Finland</option>
                                                    <option value="France">France</option>
                                                    <option value="French Guiana">French Guiana</option>
                                                    <option value="French Polynesia">
                                                        French Polynesia
                                                    </option>
                                                    <option value="French Southern Territories">
                                                        French Southern Territories
                                                    </option>
                                                    <option value="Gabon">Gabon</option>
                                                    <option value="Gambia">Gambia</option>
                                                    <option value="Georgia">Georgia</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="Ghana">Ghana</option>
                                                    <option value="Gibraltar">Gibraltar</option>
                                                    <option value="Greece">Greece</option>
                                                    <option value="Greenland">Greenland</option>
                                                    <option value="Grenada">Grenada</option>
                                                    <option value="Guadeloupe">Guadeloupe</option>
                                                    <option value="Guam">Guam</option>
                                                    <option value="Guatemala">Guatemala</option>
                                                    <option value="Guernsey">Guernsey</option>
                                                    <option value="Guinea">Guinea</option>
                                                    <option value="Guinea-bissau">Guinea-bissau</option>
                                                    <option value="Guyana">Guyana</option>
                                                    <option value="Haiti">Haiti</option>
                                                    <option value="Heard Island and Mcdonald Islands">
                                                        Heard Island and Mcdonald Islands
                                                    </option>
                                                    <option value="Holy See (Vatican City State)">
                                                        Holy See (Vatican City State)
                                                    </option>
                                                    <option value="Honduras">Honduras</option>
                                                    <option value="Hong Kong">Hong Kong</option>
                                                    <option value="Hungary">Hungary</option>
                                                    <option value="Iceland">Iceland</option>
                                                    <option value="India">India</option>
                                                    <option value="Indonesia">Indonesia</option>
                                                    <option value="Iran, Islamic Republic of">
                                                        Iran, Islamic Republic of
                                                    </option>
                                                    <option value="Iraq">Iraq</option>
                                                    <option value="Ireland">Ireland</option>
                                                    <option value="Isle of Man">Isle of Man</option>
                                                    <option value="Israel">Israel</option>
                                                    <option value="Italy">Italy</option>
                                                    <option value="Jamaica">Jamaica</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Jersey">Jersey</option>
                                                    <option value="Jordan">Jordan</option>
                                                    <option value="Kazakhstan">Kazakhstan</option>
                                                    <option value="Kenya">Kenya</option>
                                                    <option value="Kiribati">Kiribati</option>
                                                    <option value="Korea, Democratic People's Republic of">
                                                        Korea, Democratic People's Republic of
                                                    </option>
                                                    <option value="Korea, Republic of">
                                                        Korea, Republic of
                                                    </option>
                                                    <option value="Kuwait">Kuwait</option>
                                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                    <option value="Lao People's Democratic Republic">
                                                        Lao People's Democratic Republic
                                                    </option>
                                                    <option value="Latvia">Latvia</option>
                                                    <option value="Lebanon">Lebanon</option>
                                                    <option value="Lesotho">Lesotho</option>
                                                    <option value="Liberia">Liberia</option>
                                                    <option value="Libyan Arab Jamahiriya">
                                                        Libyan Arab Jamahiriya
                                                    </option>
                                                    <option value="Liechtenstein">Liechtenstein</option>
                                                    <option value="Lithuania">Lithuania</option>
                                                    <option value="Luxembourg">Luxembourg</option>
                                                    <option value="Macao">Macao</option>
                                                    <option value="Macedonia, The Former Yugoslav Republic of">
                                                        Macedonia, The Former Yugoslav Republic of
                                                    </option>
                                                    <option value="Madagascar">Madagascar</option>
                                                    <option value="Malawi">Malawi</option>
                                                    <option value="Malaysia">Malaysia</option>
                                                    <option value="Maldives">Maldives</option>
                                                    <option value="Mali">Mali</option>
                                                    <option value="Malta">Malta</option>
                                                    <option value="Marshall Islands">
                                                        Marshall Islands
                                                    </option>
                                                    <option value="Martinique">Martinique</option>
                                                    <option value="Mauritania">Mauritania</option>
                                                    <option value="Mauritius">Mauritius</option>
                                                    <option value="Mayotte">Mayotte</option>
                                                    <option value="Mexico">Mexico</option>
                                                    <option value="Micronesia, Federated States of">
                                                        Micronesia, Federated States of
                                                    </option>
                                                    <option value="Moldova, Republic of">
                                                        Moldova, Republic of
                                                    </option>
                                                    <option value="Monaco">Monaco</option>
                                                    <option value="Mongolia">Mongolia</option>
                                                    <option value="Montenegro">Montenegro</option>
                                                    <option value="Montserrat">Montserrat</option>
                                                    <option value="Morocco">Morocco</option>
                                                    <option value="Mozambique">Mozambique</option>
                                                    <option value="Myanmar">Myanmar</option>
                                                    <option value="Namibia">Namibia</option>
                                                    <option value="Nauru">Nauru</option>
                                                    <option value="Nepal">Nepal</option>
                                                    <option value="Netherlands">Netherlands</option>
                                                    <option value="Netherlands Antilles">
                                                        Netherlands Antilles
                                                    </option>
                                                    <option value="New Caledonia">New Caledonia</option>
                                                    <option value="New Zealand">New Zealand</option>
                                                    <option value="Nicaragua">Nicaragua</option>
                                                    <option value="Niger">Niger</option>
                                                    <option value="Nigeria">Nigeria</option>
                                                    <option value="Niue">Niue</option>
                                                    <option value="Norfolk Island">Norfolk Island</option>
                                                    <option value="Northern Mariana Islands">
                                                        Northern Mariana Islands
                                                    </option>
                                                    <option value="Norway">Norway</option>
                                                    <option value="Oman">Oman</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Palau">Palau</option>
                                                    <option value="Palestinian Territory, Occupied">
                                                        Palestinian Territory, Occupied
                                                    </option>
                                                    <option value="Panama">Panama</option>
                                                    <option value="Papua New Guinea">
                                                        Papua New Guinea
                                                    </option>
                                                    <option value="Paraguay">Paraguay</option>
                                                    <option value="Peru">Peru</option>
                                                    <option value="Philippines">Philippines</option>
                                                    <option value="Pitcairn">Pitcairn</option>
                                                    <option value="Poland">Poland</option>
                                                    <option value="Portugal">Portugal</option>
                                                    <option value="Puerto Rico">Puerto Rico</option>
                                                    <option value="Qatar">Qatar</option>
                                                    <option value="Reunion">Reunion</option>
                                                    <option value="Romania">Romania</option>
                                                    <option value="Russian Federation">
                                                        Russian Federation
                                                    </option>
                                                    <option value="Rwanda">Rwanda</option>
                                                    <option value="Saint Helena">Saint Helena</option>
                                                    <option value="Saint Kitts and Nevis">
                                                        Saint Kitts and Nevis
                                                    </option>
                                                    <option value="Saint Lucia">Saint Lucia</option>
                                                    <option value="Saint Pierre and Miquelon">
                                                        Saint Pierre and Miquelon
                                                    </option>
                                                    <option value="Saint Vincent and The Grenadines">
                                                        Saint Vincent and The Grenadines
                                                    </option>
                                                    <option value="Samoa">Samoa</option>
                                                    <option value="San Marino">San Marino</option>
                                                    <option value="Sao Tome and Principe">
                                                        Sao Tome and Principe
                                                    </option>
                                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                                    <option value="Senegal">Senegal</option>
                                                    <option value="Serbia">Serbia</option>
                                                    <option value="Seychelles">Seychelles</option>
                                                    <option value="Sierra Leone">Sierra Leone</option>
                                                    <option value="Singapore">Singapore</option>
                                                    <option value="Slovakia">Slovakia</option>
                                                    <option value="Slovenia">Slovenia</option>
                                                    <option value="Solomon Islands">Solomon Islands</option>
                                                    <option value="Somalia">Somalia</option>
                                                    <option value="South Africa">South Africa</option>
                                                    <option value="South Georgia and The South Sandwich Islands">
                                                        South Georgia and The South Sandwich Islands
                                                    </option>
                                                    <option value="Spain">Spain</option>
                                                    <option value="Sri Lanka">Sri Lanka</option>
                                                    <option value="Sudan">Sudan</option>
                                                    <option value="Suriname">Suriname</option>
                                                    <option value="Svalbard and Jan Mayen">
                                                        Svalbard and Jan Mayen
                                                    </option>
                                                    <option value="Swaziland">Swaziland</option>
                                                    <option value="Sweden">Sweden</option>
                                                    <option value="Switzerland">Switzerland</option>
                                                    <option value="Syrian Arab Republic">
                                                        Syrian Arab Republic
                                                    </option>
                                                    <option value="Taiwan">Taiwan</option>
                                                    <option value="Tajikistan">Tajikistan</option>
                                                    <option value="Tanzania, United Republic of">
                                                        Tanzania, United Republic of
                                                    </option>
                                                    <option value="Thailand">Thailand</option>
                                                    <option value="Timor-leste">Timor-leste</option>
                                                    <option value="Togo">Togo</option>
                                                    <option value="Tokelau">Tokelau</option>
                                                    <option value="Tonga">Tonga</option>
                                                    <option value="Trinidad and Tobago">
                                                        Trinidad and Tobago
                                                    </option>
                                                    <option value="Tunisia">Tunisia</option>
                                                    <option value="Turkey">Turkey</option>
                                                    <option value="Turkmenistan">Turkmenistan</option>
                                                    <option value="Turks and Caicos Islands">
                                                        Turks and Caicos Islands
                                                    </option>
                                                    <option value="Tuvalu">Tuvalu</option>
                                                    <option value="Uganda">Uganda</option>
                                                    <option value="Ukraine">Ukraine</option>
                                                    <option value="United Arab Emirates">
                                                        United Arab Emirates
                                                    </option>
                                                    <option value="United Kingdom">United Kingdom</option>
                                                    <option value="United States" selected="">
                                                        United States
                                                    </option>
                                                    <option value="United States Minor Outlying Islands">
                                                        United States Minor Outlying Islands
                                                    </option>
                                                    <option value="Uruguay">Uruguay</option>
                                                    <option value="Uzbekistan">Uzbekistan</option>
                                                    <option value="Vanuatu">Vanuatu</option>
                                                    <option value="Venezuela">Venezuela</option>
                                                    <option value="Viet Nam">Viet Nam</option>
                                                    <option value="Virgin Islands, British">
                                                        Virgin Islands, British
                                                    </option>
                                                    <option value="Virgin Islands, U.S.">
                                                        Virgin Islands, U.S.
                                                    </option>
                                                    <option value="Wallis and Futuna">
                                                        Wallis and Futuna
                                                    </option>
                                                    <option value="Western Sahara">Western Sahara</option>
                                                    <option value="Yemen">Yemen</option>
                                                    <option value="Zambia">Zambia</option>
                                                    <option value="Zimbabwe">Zimbabwe</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="inputYouTube" className="form-label">
                                                    YouTube
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputYouTube"
                                                    defaultValue="https://www.youtube.com/EthanLeo"
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="inputX" className="form-label">
                                                    X
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputX"
                                                    defaultValue="https://twitter.com/EthanLeo"
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="inputFacebook" className="form-label">
                                                    Facebook
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputFacebook"
                                                    defaultValue="https://www.facebook.com/EthanLeo"
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="inputLinkedIn" className="form-label">
                                                    LinkedIn
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputLinkedIn"
                                                    defaultValue="https://www.linkedin.com/EthanLeo"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="inputAbout" className="form-label">
                                                    About
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="inputAbout"
                                                    defaultValue={
                                                        "Ethan Leo is a seasoned and results-driven Project Manager who brings experience and expertise to project management. With a proven track record of successfully delivering complex projects on time and within budget, Ethan Leo is the go-to professional for organizations seeking efficient and effective project leadership."
                                                    }
                                                />
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary">
                                                    Save Changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="email-tab-pane"
                                        role="tabpanel"
                                        aria-labelledby="email-tab"
                                        tabIndex={0}
                                    >
                                        <form action="#!">
                                            <fieldset className="row gy-3 gy-md-0">
                                                <legend className="col-form-label col-12 col-md-3 col-xl-2">
                                                    Email Alerts
                                                </legend>
                                                <div className="col-12 col-md-9 col-xl-10">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="emailChange"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="emailChange"
                                                        >
                                                            Email Changed
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="passwordChange"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="passwordChange"
                                                        >
                                                            Password Changed
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="weeklyNewsletter"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="weeklyNewsletter"
                                                        >
                                                            Weekly Newsletter
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="productPromotions"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="productPromotions"
                                                        >
                                                            Product Promotions
                                                        </label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className="row">
                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-primary mt-4">
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="password-tab-pane"
                                        role="tabpanel"
                                        aria-labelledby="password-tab"
                                        tabIndex={0}
                                    >
                                        <form action="#!">
                                            <div className="row gy-3 gy-xxl-4">
                                                <div className="col-12">
                                                    <label htmlFor="currentPassword" className="form-label">
                                                        Current Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="currentPassword"
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="newPassword" className="form-label">
                                                        New Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="newPassword"
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="confirmPassword" className="form-label">
                                                        Confirm Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="confirmPassword"
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-primary">
                                                        Change Password
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;




