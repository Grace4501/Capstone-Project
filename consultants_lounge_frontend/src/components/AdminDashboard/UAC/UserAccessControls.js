import '../../../styles/UserAccessControls.css';
import {Routes,Route, Link } from 'react-router-dom';
import Details from './Details.js';
import UserActivity from './UserActivity.js';

export default function UserAccess() {
    return (
        <div className="UserAccessControls">
            <br/>
            <br/>
            <br/>
            <h4>User Access Controls </h4>
            {/* Select user  */}
            <div className="SelectUser">
                <input type="search" placeholder="Names"  />
            </div>
            {/* User access details*/}
            <div className ="UserAccessContainer"> 
            <div className="UserAccesssDetails">
                <div className="Profile Role">
                    <img />
                    <h5 className="username"> User Name</h5>
                    <h5 className="role"> Role</h5>
                    <h6 className="role-admin"><b>Role: Admin</b></h6>
                </div>
                <div className="buttons">
                <Link className="details" Link to="/user-access/details"> Details </Link>
                <Link  className="useractivity"to="/user-access/userActivity"> User Activity </Link>
                </div>
            </div>
            <Routes>
            <Route path="/details" element={<Details />} />
            <Route path="/userActivity" element={<UserActivity />} />
            </Routes>
            </div>
        </div>
    );
}