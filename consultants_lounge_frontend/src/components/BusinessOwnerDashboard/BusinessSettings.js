import { useState } from 'react';
import '../../styles/BusinessSettings.css'


export default function BusinessSettings() {
    const [activeTab, setActiveTab] = useState("account");
    return (
        <div>
            <h1> Settings </h1>
            {/* Navigation Tabs */}
            <div>
                <button onClick={() => setActiveTab("account")}>Account</button>
                <button onClick={() => setActiveTab("privacy-security")}>Privacy & Security</button>
                <button onClick={() => setActiveTab("payments")}>Payments</button>
                <button onClick={() => setActiveTab("notifications")}>Notifications</button>
            </div>
            {/* Content Sections */}
            {activeTab === "account" && (
                <div id="account">
                    <div>
                        <h2>Account Info </h2>
                        <label> First Name </label>
                        <input type="text" />
                        <label> Last Name </label>
                        <input type="text" />
                        <label> Email Address </label>
                        <input type="email" />
                    </div>
                    <div>
                        <h2> Location </h2>
                        <p> This will hep us provide a better search/job matching experience</p>
                        <input type="text" placeholder="Enter your city" />
                    </div>
                    <div>
                        <h2> Language </h2>
                        <label> Primary Language </label>
                        <select>
                            <option value="english"> English </option>
                            <option value="french"> French </option>
                            <option value="spanish"> Spanish </option>
                            <option value="german"> German</option>
                            <option value="italian"> Italian </option>
                            <option value="portuguese"> Portuguese </option>
                        </select>
                        <label> Proficiency</label>
                        <select>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="native">Native Speaker</option>
                        </select>
                        <button> Add Language </button>
                    </div>
                    <div>
                        <h2> Phone Number </h2>
                        <input type="tel" />
                    </div>
                </div>)}
            {activeTab === "privacy-security" && (
                <div id="privacy-security">
                    <h2>Password </h2>
                    <div>
                    <h6> Change Password </h6>
                    <p> Changing your password will log you out of all your Consultants Lounge sessions </p>
                    <label> Current Password </label>
                    <input type="text"/> 
                    <label> New Password </label>
                    <input type="text"/> 
                    <label> Confirm Password </label>
                    <input type="text"/>
                    <button> SAVE NEW PASSWORD </button>
                    </div>
                    <h2>Two-Factor Authentication</h2>
                    <div>
                     <p> Make your account more secure with two-factor authentication. Each time you login you’ll be asked to enter your password and an authorization code. To enable two-factor authentication, you will need to enter a valid phone number. </p>
                     <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <p> Disabled </p>
                     </div>
                     <h2> Privacy </h2>
                     <div> 
                     <h2> Profile Visibility</h2>
                     <button> Public </button>
                     <button> Private </button>
                    </div>
                    <h2> My Account </h2>
                    <div>
                        <p> Delete My Account</p>
                        <p> Delete your account and all data associated with it.</p>
                        <button> DELETE ACCOUNT </button>
                    </div>
                </div>
            )}
            {activeTab === "payments" && (
                <div id="payments">
                    <h2>Banking Information</h2>
                    <div>
                        <p> Provide your banking information where we can deposit your payment.</p>
                        <button> ADD BANK ACCOUNT </button>
                    </div>
                    <h2> Tax Documents</h2>
                    <div>
                        <p> This will help us provide better search/job matching experience </p>
                    </div>
                </div>
            )}
            {activeTab === "notifications" && (
                <div id="notifications">
                    <h2>Notifications</h2>
                    <div>
                        <p> You have been invited to a job </p>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <br />
                    <br />
                    <div>
                        <p> You must add banking information </p>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
            )}
        </div>
    );
}