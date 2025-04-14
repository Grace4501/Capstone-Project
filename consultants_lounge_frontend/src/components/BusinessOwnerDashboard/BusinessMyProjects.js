import { useState } from 'react';
import '../../styles/BusinessMyProject.css';
import Options2 from '../../resources/Options2.png';
import BlankProfile from '../../resources/BlankProfile.png';

export default function BusinessMyProjects() {
    const [activeTab, setActiveTab] = useState("my-invites");

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <h1>My Projects</h1>
            {/* Navigation sections */}
            <div className="tab-navigation">
                <button onClick={() => setActiveTab("my-invites")}>My Invites</button>
                <button onClick={() => setActiveTab("current-projects")}>Current Projects</button>
                <button onClick={() => setActiveTab("new-projects")}>New Projects</button>
                <button onClick={() => setActiveTab("reviews")}>Reviews</button>
                <button onClick={() => setActiveTab("my-invoices")}>My Invoices</button>
                <button onClick={() => setActiveTab("my-projecthistory")}>My Project History</button>
            </div>
            <br />
            {/* Content Sections */}
            {activeTab === "my-invites" && (
                <div id="my-invites" className="content-section">
                    <div className="project-container">
                        {/* Project Content */}
                        <div className="project-content">
                            <h2>Creating new website UI elements</h2>
                            <button><img src={Options2} alt="Options" /></button>
                            <p>Visual elements: With the site architecture and some content in place, we can start working on the visual brand. Depending on the client, this may already be well-defined, but you might also be defining the visual style from the ground up. Tools like style tiles, moodboards, and element collages can help with this process.</p>
                            <br />
                            <div>
                                <h5>Concept Design</h5>
                                <input type="checkbox" />
                                <p>Design process will be shaped by existing branding elements, colour choices, and logos</p>
                                <input type="checkbox" />
                                <p>Do high-quality images give a website a professional look and feel?</p>
                                <p>3 days left</p>
                                <input type="checkbox" />
                                <p>Also communicate a message, are mobile-friendly, and help build trust</p>
                                <input type="checkbox" />
                                <p>The usual suspects (Sketch, Illustrator, Photoshop, etc.)</p>
                            </div>
                        </div>
                        {/* Project Details */}
                        <div className="project-details">
                            <h2>Project Description</h2>
                            <button><img src={Options2} alt="Options" /></button>
                            <p>Visual elements: With the site architecture and some content in place, we can start working on the visual brand.</p>
                            <p>Due Date: Mon, 16 Sep 2020</p>
                            <p>Participants:</p>
                            <img src={BlankProfile} alt="Participant" />
                            <img src={BlankProfile} alt="Participant" />
                            <img src={BlankProfile} alt="Participant" />
                            <br />
                            <p>Status: Start Day, Deadline, Tags</p>
                            <p>Mon, 16 Sep 2020</p>
                            <p>9 days left</p>
                            <p>Webdesign, Media, UI Design, User Experience</p>
                            <p>Attachments: 3 - design-scope.pdf, dashboard.png, wireframe-elements.sketch</p>
                            <div className="progress-container">
                                <div className="progress-bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === "current-projects" && (
                <div id="current-projects" className="content-section">
                    <p>Project Status</p>
                </div>
            )}
            {activeTab === "new-projects" && (
                <div id="new-projects" className="content-section">
                    <p>Project Upload</p>
                </div>
            )}
            {activeTab === "reviews" && (
                <div id="reviews" className="content-section">
                    <p>Project Upload</p>
                </div>
            )}
            {activeTab === "my-invoices" && (
                <div id="my-invoices" className="content-section">
                    <p>Invoice #1: $500 (Paid)</p>
                    <p>Invoice #2: $250 (Pending)</p>
                </div>
            )}
            {activeTab === "my-projecthistory" && (
                <div id="my-projecthistory" className="content-section">
                    <p>Project History Content</p>
                </div>
            )}
        </div>
    );
}
