import React, { useState } from 'react';
import '../../styles/BusinessMyProfile.css'
import Profile from '../../resources/Profile.png';
import Edit from '../../resources/Edit.png';


export default function BusinessMyProfile() {
  // State to manage profile picture
  const [profilePic, setProfilePic] = useState('');
  // States to manage editable fields
  const [ownerName, setOwnerName] = useState('Business Owner Name');
  const [role, setRole] = useState('Financial Manager');
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.');

  // State for edit mode
  const [isEditingOwner, setIsEditingOwner] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file); // Create a URL for the selected file
      setProfilePic(fileURL); // Update the state
    }
  };

  return (
    <div>
        <br/>
      <br/>
      <br/>
      <br/>
      <h2>My Profile</h2>
      <div className="profile-container"> {/* Container for the entire page */}
      <div className="profile-section"> {/* Profile picture section */}
        <div>
          <img src={profilePic || Profile} alt="Profile" className="profile-pic" />
          <br />
          <br />
          <button className="add-photo-btn">
            <label htmlFor="upload-photo" style={{ cursor: 'pointer' }}>
              Add Photo
            </label>
            <input
              type="file"
              id="upload-photo"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </button>
        </div>
      </div>
      <div className="info-section"> {/* Editable fields section */}
        <div className="owner-info">
          <h3>
            {isEditingOwner ? (
              <input
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
              />
            ) : (
              ownerName
            )}
          </h3>
          <h5>
            {isEditingOwner ? (
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            ) : (
              role
            )}
          </h5>
          <button onClick={() => setIsEditingOwner(!isEditingOwner)} className="edit-btn">
            <img src={Edit} alt="Edit Owner Button" />
          </button>
        </div>
        <div className="description-section">
          <h4>Business Description</h4>
          <p>
            {isEditingDescription ? (
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            ) : (
              description
            )}
          </p>
          <button onClick={() => setIsEditingDescription(!isEditingDescription)} className="edit-btn">
            <img src={Edit} alt="Edit Description Button" />
          </button>
        </div>
      </div>
    </div>
    </div>
  );

}

