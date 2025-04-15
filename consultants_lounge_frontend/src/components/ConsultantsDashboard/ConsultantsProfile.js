import { useState, useEffect } from 'react';
import '../../styles/ConsultantDB/Consultants.css';
import '../../styles/ConsultantDB/ConsultantsProfile.css';
import defaultProfile from '../../resources/DefaultProfile.png';
import editIcon from '../../resources/edit.png';

export default function ConsultantsProfile() {
    {/* Profile */}
    const [profileImg, setProfileImg] = useState(defaultProfile);
    const [name, setName] = useState("Consultants Name");
    const [bio, setBio] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    const [tempBio, setTempBio] = useState(bio);
    const [bioEditModal, setBioEditModal] = useState(false);

    const handleProfileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setProfileImg(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSaveBio = () => {
        setBio(tempBio);
        setBioEditModal(false);
    };

    {/* Skills */}
    const [skills, setSkills] = useState([
        "Financial Modeling", "Financial Planning and Analysis", "Excel Expert", "Valuation", "Market Research"
    ]);
    const [newSkill, setNewSkill] = useState("");
    const [skillsEditModal, setSkillsEditModal] = useState(false);

    {/* Employment */}
    const initialEmploymentData = {
        company: "",
        city: "",
        country: "",
        title: "",
        startDate: "",
        endDate: "",
        isCurrent: false,
        description: ""
    };

    const [employmentHistory, setEmploymentHistory] = useState([
        { company: "Company Name", title: "Financial Manager", startDate: "2016-09-01", endDate: "2020-05-01", description: "A brief job description here." }
    ]);
    const [employmentHistoryModal, setEmploymentHistoryModal] = useState(false);
    const [newEmployment, setNewEmployment] = useState({ ...initialEmploymentData });
    const [editingEmploymentIndex, setEditingEmploymentIndex] = useState(null);

    const handleSaveEmployment = () => {
        if (
            newEmployment.title.trim() &&
            newEmployment.company.trim() &&
            newEmployment.startDate
        ) {
            const updated = [...employmentHistory];
            if (editingEmploymentIndex !== null) {
                updated[editingEmploymentIndex] = newEmployment;
                setEmploymentHistory(updated);
            } else {
                setEmploymentHistory([...employmentHistory, newEmployment]);
            }
            setNewEmployment({ ...initialEmploymentData });
            setEmploymentHistoryModal(false);
            setEditingEmploymentIndex(null);
        }
    };

    {/* Education */}
    const initialEducationData = {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        isCurrent: false,
        description: ""
    };

    const [educationHistory, setEducationHistory] = useState([
        { school: "University of Toronto", degree: "Masters of Business Administration", startDate: "2016-09-01", endDate: "2020-05-01" }
    ]);
    const [newEducation, setNewEducation] = useState({ ...initialEducationData });
    const [educationHistoryModal, setEducationHistoryModal] = useState(false);
    const [editingEducationIndex, setEditingEducationIndex] = useState(null);

    const handleSaveEducation = () => {
        if (
            newEducation.school.trim() &&
            newEducation.degree.trim() &&
            newEducation.startDate
        ) {
            const updated = [...educationHistory];
            if (editingEducationIndex !== null) {
                updated[editingEducationIndex] = newEducation;
                setEducationHistory(updated);
            } else {
                setEducationHistory([...educationHistory, newEducation]);
            }
            setNewEducation({ ...initialEducationData });
            setEducationHistoryModal(false);
            setEditingEducationIndex(null);
        }
    };

    {/* Languages */}
    const [languages, setLanguages] = useState([
        { language: "English", proficiency: "Fluent" }
    ]);
    const [newLanguage, setNewLanguage] = useState({ language: "", proficiency: "" });
    const [editingLanguageIndex, setEditingLanguageIndex] = useState(null);
    const [languageOptions, setLanguageOptions] = useState([]);
    const [languageModal, setLanguageModal] = useState(false);

    const handleSaveLanguage = () => {
        if (newLanguage.language.trim() && newLanguage.proficiency) {
            const updated = [...languages];
            if (editingLanguageIndex !== null) {
                updated[editingLanguageIndex] = newLanguage;
                setLanguages(updated);
            } else {
                setLanguages([...languages, newLanguage]);
            }
            setNewLanguage({ language: "", proficiency: "" });
            setLanguageModal(false);
            setEditingLanguageIndex(null);
        }
    };

    useEffect(() => {
        fetch('/resources/ConsultantLanguageOptions.json')
            .then(res => res.json())
            .then(data => {
                console.log("Loaded language options:", data["Proficiency-Options"]);
                setLanguageOptions(data["Proficiency-Options"]);
            })
            .catch(err => console.error('Failed to load language options', err));
    }, []);  
    
    return (
        <div className="ConsultantsProfile">
            <h1>My Profile</h1>

            <div className="profile-section">
                <div className='bio-section'>
                    
                </div>
                <div className="photo-column">
                    <img src={profileImg} alt="Profile" className="profile-photo" />
                    <input
                        type='file'
                        id='profile-photo'
                        style={{display: 'none'}}
                        onChange={handleProfileChange}
                    />
                    <label htmlFor='profile-photo' className='profile-photo-add'>Add Photo</label>
                </div>

                <div className="profile-info">
                    {/* Consultant's Name */}
                    <div className="row-header">
                        <h2 className="profile-name">{name}</h2>
                        <img 
                            src={editIcon} 
                            alt="Edit" 
                            className="edit-icon"
                            onClick={() => {
                                setTempBio(bio);
                                setBioEditModal(true);
                            }}
                        />
                    </div>

                    <p className="profile-title">Financial Manager</p>

                    <p className="profile-bio">{bio}</p>

                    {/* Skills Section */}
                    <div className="row-header">
                        <h4>Skills</h4>
                        <img 
                            src={editIcon} 
                            alt="Edit" 
                            className="edit-icon" 
                            onClick={() => setSkillsEditModal(true)}
                        />
                    </div>

                    <ul className="skills-list">
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>

                    {/* Employment History Section */}
                    <div className="employment-history-section">
                        <div className="row-header">
                            <h4>Employment History</h4>
                            <button 
                                className="add-button"
                                onClick={() => {
                                    setEditingEmploymentIndex(null);
                                    setNewEmployment({ ...initialEmploymentData });
                                    setEmploymentHistoryModal(true);
                                }}
                            >
                                +
                            </button>
                        </div>
                        <ul className="employment-list">
                            {employmentHistory.map((job, index) => {
                                const formatDate = (dateString) => {
                                    const date = new Date(dateString);
                                    const options = { year: 'numeric', month: 'long' };
                                    return date.toLocaleDateString('en-US', options);
                                };

                                return (
                                    <li key={index}>
                                        <div className="row-header">
                                            <strong>{job.title} | {job.company}</strong>
                                            <img 
                                                src={editIcon} 
                                                alt="Edit" 
                                                className="edit-icon"
                                                onClick={() => {
                                                    setEditingEmploymentIndex(index);
                                                    setNewEmployment(job);
                                                    setEmploymentHistoryModal(true);
                                                }}
                                            />
                                        </div>
                                        <p>
                                            {formatDate(job.startDate)} - {job.isCurrent ? "Present" : formatDate(job.endDate)}
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>

                    </div>

                    {/* Education Section */}
                    <div className="education-history-section">
                        <div className="row-header">
                            <h4>Education</h4>
                            <button 
                                className="add-button"
                                onClick={() => {
                                    setEditingEducationIndex(null);
                                    setNewEducation({ ...initialEducationData });
                                    setEducationHistoryModal(true);
                                }}
                            >
                                +
                            </button>
                        </div>
                        <ul className="education-list">
                            {educationHistory.map((education, index) => {
                                const formatDate = (dateString) => {
                                    const date = new Date(dateString);
                                    const options = { year: 'numeric', month: 'long' };
                                    return date.toLocaleDateString('en-US', options);
                                };

                                return (
                                    <li key={index}>
                                        <div className="row-header">
                                            <strong>{education.degree} | {education.school}</strong>
                                            <img 
                                                src={editIcon} 
                                                alt="Edit" 
                                                className="edit-icon"
                                                onClick={() => {
                                                    setEditingEducationIndex(index);
                                                    setNewEducation(education);
                                                    setEducationHistoryModal(true);
                                                }}
                                            />
                                        </div>
                                        <p>{formatDate(education.startDate)} - {formatDate(education.endDate)}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Languages Section */}
                    <div className="language-section-container">
    <div className="language-header">
        <h4>Languages</h4>
    </div>

    <div className="language-body">
        <div className="language-list-horizontal">
            {languages.map((entry, index) => (
                <div key={index} className="language-item">
                    <div className="language-name">{entry.language}</div>
                    <div className="language-level">{entry.proficiency}</div>
                </div>
            ))}
        </div>

        <div className="language-actions-vertical">
            <button
                className="circle-button"
                onClick={() => {
                    setEditingLanguageIndex(null);
                    setNewLanguage({ language: "", proficiency: "" });
                    setLanguageModal(true);
                }}
            >
                +
            </button>

            <img
                src={editIcon}
                alt="Edit"
                className="edit-icon"
                onClick={() => {
                    setLanguageModal(true);
                }}
            />
        </div>
    </div>
</div>


                </div>
            </div>

            {/* Bio Edit Modal */}
            {bioEditModal && (
                <div className='modal'>
                    <div className='modal-content large-modal'>
                        <button className='close-button' onClick={() => setBioEditModal(false)}>×</button>
                        <h2>Overview</h2>
                        <p className='modal-description'>
                            Use this space to show clients you have the skills and experience they're looking for.
                            <ul>
                                <li>Describe your strength and skills</li>
                                <li>Highlight projects, accomplishments and education.</li>
                            </ul>
                        </p>
                        <div className='textarea-wrapper'>
                            <textarea
                                maxLength={3000}
                                value={tempBio}
                                onChange={(e) => setTempBio(e.target.value)}
                            />
                        </div>
                        <div className='char-count'>{3000 - bio.length} characters left</div>
                        <div className='modal-buttons'>
                            <button className='cancel-button' onClick={() => setBioEditModal(false)}>Cancel</button>
                            <button className='save-button' onClick={handleSaveBio}>Save</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Skills Edit Modal */}
            {skillsEditModal && (
                <div className='modal'>
                    <div className='modal-content large-modal'>
                        <button className='close-button' onClick={() => setSkillsEditModal(false)}>×</button>
                        <h2>Skills</h2>
                        <p className='modal-description'>
                            Keeping your skills up to date helps you stand out to potential clients.
                        </p>

                        <div className='textarea-wrapper'>
                            <div className='tag-input-wrapper' onClick={() => document.getElementById('tag-input').focus()}>
                                {skills.map((skill, index) => (
                                    <div key={index} className='skill-pill'>
                                        {skill}
                                        <span className='remove-skill' onClick={() =>
                                            setSkills(skills.filter((_, i) => i !== index))
                                        }>×</span>
                                    </div>
                                ))}

                                <input
                                    id='tag-input'
                                    type='text'
                                    value={newSkill}
                                    onChange={(e) => setNewSkill(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && newSkill.trim()) {
                                            e.preventDefault();
                                            if (!skills.includes(newSkill.trim()) && skills.length < 15) {
                                                setSkills([...skills, newSkill.trim()]);
                                            }
                                            setNewSkill("");
                                        } else if (e.key === 'Backspace' && !newSkill && skills.length > 0) {
                                            setSkills(skills.slice(0, -1));
                                        }
                                    }}
                                    className='tag-input'
                                    disabled={skills.length >= 15}
                                />
                                <span className='placeholder-text'>Type a skill</span>
                            </div>
                            <p className="max-skills-note">
                                Maximum 15 skills
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Employment History Edit Modal */}
            {employmentHistoryModal && (
            <div className="modal">
                <div className="modal-content large-modal padded-modal">
                <button className="close-button" onClick={() => setEmploymentHistoryModal(false)}>×</button>
                <h2>Add Employment</h2>
                <div className="modal-description">
                    {/* Company Input */}
                    <label>Company</label>
                    <input
                    type="text"
                    value={newEmployment.company}
                    onChange={(e) => setNewEmployment({ ...newEmployment, company: e.target.value })}
                    />

                    {/* Location Fields */}
                    <div className="input-pair">
                    <div className="input-field">
                        <label>City</label>
                        <input
                        type="text"
                        value={newEmployment.city}
                        onChange={(e) => setNewEmployment({ ...newEmployment, city: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <label>Country</label>
                        <input
                        type="text"
                        value={newEmployment.country}
                        onChange={(e) => setNewEmployment({ ...newEmployment, country: e.target.value })}
                        />
                    </div>
                    </div>

                    {/* Title Input */}
                    <label>Title</label>
                    <input
                    type="text"
                    value={newEmployment.title}
                    onChange={(e) => setNewEmployment({ ...newEmployment, title: e.target.value })}
                    placeholder="Ex. Financial Manager"
                    />

                    {/* Date Fields */}
                    <div className="input-pair">
                    <div className="input-field">
                        <label>Start</label>
                        <input
                        type="date"
                        value={newEmployment.startDate}
                        onChange={(e) => setNewEmployment({ ...newEmployment, startDate: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <label>End</label>
                        <input
                        type="date"
                        value={newEmployment.endDate}
                        onChange={(e) => setNewEmployment({ ...newEmployment, endDate: e.target.value })}
                        />
                    </div>
                    </div>

                    {/* Current Job Checkbox */}
                    <label className="currently-working-label">
                    <input
                        type="checkbox"
                        checked={newEmployment.isCurrent}
                        onChange={() => setNewEmployment({ ...newEmployment, isCurrent: !newEmployment.isCurrent })}
                        className="currently-working-checkbox"
                    />
                    I am currently working here
                    </label>

                    {/* Description */}
                    <label>Description</label>
                    <textarea
                    value={newEmployment.description}
                    onChange={(e) => setNewEmployment({ ...newEmployment, description: e.target.value })}
                    />
                </div>

                {/* Modal Action Buttons */}
                <div className="modal-buttons">
                    <button className="cancel-button" onClick={() => setEmploymentHistoryModal(false)}>Cancel</button>
                    <button className="save-button" onClick={handleSaveEmployment}>Save</button>
                </div>
                </div>
            </div>
            )}

            {/* Education Edit Modal */}
            {educationHistoryModal && (
                <div className="modal">
                    <div className="modal-content large-modal padded-modal">
                        <button className="close-button" onClick={() => setEducationHistoryModal(false)}>×</button>
                        <h2>Add Education</h2>
                        <div className="modal-description">
                            {/* School Input */}
                            <label>School</label>
                            <input
                                type="text"
                                value={newEducation.school}
                                onChange={(e) => setNewEducation({ ...newEducation, school: e.target.value })}
                            />

                            {/* Degree Input */}
                            <label>Degree</label>
                            <input
                                type="text"
                                value={newEducation.degree}
                                onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                            />

                            {/* Date Fields (Start & End Date in same row) */}
                            <div className="input-pair">
                                <div className="input-field">
                                    <label>Start</label>
                                    <input
                                        type="date"
                                        value={newEducation.startDate}
                                        onChange={(e) => setNewEducation({ ...newEducation, startDate: e.target.value })}
                                    />
                                </div>
                                <div className="input-field">
                                    <label>End</label>
                                    <input
                                        type="date"
                                        value={newEducation.endDate}
                                        onChange={(e) => setNewEducation({ ...newEducation, endDate: e.target.value })}
                                    />
                                </div>
                            </div>

                {/* Save and Cancel Buttons */}
                <div className="modal-buttons">
                    <button className="cancel-button" onClick={() => setEducationHistoryModal(false)}>Cancel</button>
                    <button className="save-button" onClick={handleSaveEducation}>Save</button>
                </div>
            </div>
        </div>
    </div>
            )}

            {/* Language Edit Modal */}
            {languageModal && (
                <div className="modal">
                    <div className="modal-content large-modal padded-modal">
                        <button className="close-button" onClick={() => setLanguageModal(false)}>×</button>
                        <h2>Add Language</h2>

                        <div className="modal-description">
                            <div className="input-pair">
                                {/* Language Text Input */}
                                <div className="input-field">
                                    <label>Language</label>
                                    <input
                                        type="text"
                                        value={newLanguage.language}
                                        onChange={(e) =>
                                            setNewLanguage({ ...newLanguage, language: e.target.value })
                                            
                                        }
                                        placeholder="e.g. French"
                                    />
                                </div>

                                {/* Proficiency Dropdown + Description */}
                                <div className="input-field">
                                    <label>Proficiency</label>
                                    {Array.isArray(languageOptions) && languageOptions.length > 0 ? (
                                        <select
                                            value={newLanguage.proficiency}
                                            onChange={(e) =>
                                                setNewLanguage({ ...newLanguage, proficiency: e.target.value })
                                            }
                                        >
                                            <option value="">Select proficiency</option>
                                            {languageOptions.map((option, index) => (
                                                <option key={index} value={option.label}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <p>Loading options...</p>
                                    )}

                                    {newLanguage.proficiency && (
                                        <div className="proficiency-description">
                                            {
                                                languageOptions.find(
                                                    (opt) => opt.label === newLanguage.proficiency
                                                )?.description
                                            }
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Save / Cancel Buttons */}
                        <div className="modal-buttons">
                            <button className="cancel-button" onClick={() => setLanguageModal(false)}>
                                Cancel
                            </button>
                            <button className="save-button" onClick={handleSaveLanguage}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
