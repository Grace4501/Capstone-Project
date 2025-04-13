import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../../styles/ConsultantDB/SettingsAccount.css';

export default function SettingsAccount() {
  const { tab } = useParams();
  const [languages, setLanguages] = useState([{ language: '', proficiency: '' }]);
  const [languageOptions, setLanguageOptions] = useState([]);

  const tabs = [
    { id: 'account', label: 'Account' },
    { id: 'security', label: 'Privacy & Security' },
    { id: 'payment', label: 'Payments' },
    { id: 'notifications', label: 'Notifications' },
  ];

  useEffect(() => {
    fetch('/resources/ConsultantLanguageOptions.json')
      .then((res) => res.json())
      .then((data) => setLanguageOptions(data["Proficiency-Options"]));
  }, []);

  const handleAddLanguage = () => {
    setLanguages([...languages, { language: '', proficiency: '' }]);
  };

  const handleLanguageChange = (index, field, value) => {
    const updated = [...languages];
    updated[index][field] = value;
    setLanguages(updated);
  };

  const handleRemoveLanguage = (index) => {
    const updated = [...languages];
    updated.splice(index, 1);
    setLanguages(updated);
  };

  return (
    <div className="ConsultantsSettings">
      <h2>Settings</h2>

      {/* Tab Navigation */}
      <div className="settings-tabs">
        {tabs.map((tabItem) => (
          <Link
            key={tabItem.id}
            to={`/ConsultantsSettings/${tabItem.id}`}
            className={tab === tabItem.id ? 'tab active' : 'tab'}
          >
            {tabItem.label}
          </Link>
        ))}
      </div>

      {/* Settings Content */}
      <div className="settings-content">

        {/* Account Info */}
        <div className="section-block">
          <div className="section-label">Account Info</div>
          <div className="section-fields">
            <div className="input-group two-col">
              <div>
                <label>First Name</label>
                <input type="text" />
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="input-group single-col">
              <label>Email Address</label>
              <input type="email" />
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="section-block">
        <div className="section-label">Location</div>
        <div className="section-fields">
            <div className="input-group full-width">
            <label className="subtext">
                This will help us provide a better search/job matching experience
            </label>
            <input type="text" placeholder="Enter your city" />
            </div>
        </div>
        </div>

        {/* Language */}
        <div className="section-block">
          <div className="section-label">Language</div>
          <div className="section-fields">
            {languages.map((lang, index) => (
              <div key={index} className="input-group language-row">
                <div className="form-field aligned-field">
                  <label htmlFor={`language-${index}`}>
                    {index === 0 ? 'Primary Language' : 'Language'}
                  </label>
                  <input
                    id={`language-${index}`}
                    type="text"
                    value={lang.language}
                    onChange={(e) => handleLanguageChange(index, 'language', e.target.value)}
                  />
                </div>
                <div className="form-field aligned-field">
                  <label htmlFor={`proficiency-${index}`}>Proficiency</label>
                  <select
                    id={`proficiency-${index}`}
                    value={lang.proficiency}
                    onChange={(e) => handleLanguageChange(index, 'proficiency', e.target.value)}
                  >
                    <option value="">Select</option>
                    {languageOptions.map((opt, i) => (
                      <option key={i} value={opt.label}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                {index !== 0 && (
                  <button
                    type="button"
                    className="remove-language-btn"
                    onClick={() => handleRemoveLanguage(index)}
                    aria-label="Remove Language"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            <button className="add-language-btn" onClick={handleAddLanguage}>
              Add Language
            </button>
          </div>
        </div>

        {/* Phone Number */}
        <div className="section-block">
          <div className="section-label">Phone Number</div>
          <div className="section-fields">
            <div className="input-group single-col">
              <input type="tel" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
