import React, { useState, useEffect } from 'react';
import '../../styles/BusinessMyProfile.css';
import Profile from '../../resources/Profile.png';
import Edit from '../../resources/edit.png';

export default function BusinessMyProfile() {
  // State for managing profile picture
  const [profilePic, setProfilePic] = useState(() => {
    return localStorage.getItem('profilePic') || '';
  });
  // States to manage editable fields
  const [ownerName, setOwnerName] = useState(() => {
    return localStorage.getItem('ownerName') || 'Business Owner Name';
  });
  const [role, setRole] = useState(() => {
    return localStorage.getItem('role') || 'Financial Manager';
  });
  const [description, setDescription] = useState(() => {
    return localStorage.getItem('description') ||
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.';
  });

  // State for edit mode
  const [isEditingOwner, setIsEditingOwner] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  // Save profile data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('profilePic', profilePic);
  }, [profilePic]);

  useEffect(() => {
    localStorage.setItem('ownerName', ownerName);
  }, [ownerName]);

  useEffect(() => {
    localStorage.setItem('role', role);
  }, [role]);

  useEffect(() => {
    localStorage.setItem('description', description);
  }, [description]);

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
      <br />
      <br />
      <br />
      <br />
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
            <button
              onClick={() => setIsEditingOwner(!isEditingOwner)}
              className="edit-btn"
            >
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
            <button
              onClick={() => setIsEditingDescription(!isEditingDescription)}
              className="edit-btn"
            >
              <img src={Edit} alt="Edit Description Button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
