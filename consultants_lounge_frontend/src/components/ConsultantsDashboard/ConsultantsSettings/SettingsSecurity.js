import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../../styles/ConsultantDB/SettingsSecurity.css';

export default function SettingsSecurity() {
  const { tab } = useParams();
  const tabs = [
    { id: 'account', label: 'Account' },
    { id: 'security', label: 'Privacy & Security' },
    { id: 'payment', label: 'Payments' },
    { id: 'notifications', label: 'Notifications' },
  ];
  const [isPublic, setIsPublic] = useState(true);
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);


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

      <div className="settings-content">
        {/* Password */}
        <div className="section-block">
            <div className="section-label">Password</div>
            <div className="section-fields">
                <div className="password-header">
                <h3>Change Password</h3>
                <p>Changing your password will log you out of all your Consultants Lounge sessions.</p>
                </div>

                <div className="input-group single-col">
                <label>Current Password</label>
                <input type="password" />
                </div>

                <div className="input-group two-col">
                <div>
                    <label>New Password</label>
                    <input type="password" />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" />
                </div>
            </div>

                <button className="primary-btn">Save New Password</button>
            </div>
            </div>

        {/* Two-Factor Authentication */}
        <div className="section-block two-col">
          <div className="section-title">Two-Factor Authentication</div>
          <div className="section-subtitle">
            <p>
              Make your account more secure with two-factor authentication. Each time you login you’ll be asked to
              enter your password and an authorization code. To enable two-factor authentication, you will need to
              enter a valid phone number.
            </p>
            <div className="toggle-container" onClick={() => setIsTwoFactorEnabled(!isTwoFactorEnabled)}>
            <div className={`toggle ${isTwoFactorEnabled ? 'enabled' : 'disabled'}`}></div>
            <span>{isTwoFactorEnabled ? 'Enabled' : 'Disabled'}</span>
            </div>
          </div>
        </div>

        {/* Profile Visibility */}
        <div className="section-block two-col">
          <div className="section-title">Privacy</div>
          <div className="section-subtitle">
            <h3>Profile Visibility</h3>
            <div className="toggle-group">
            <button
                className={`toggle-btn ${isPublic ? 'active' : ''}`}
                onClick={() => setIsPublic(true)}
            >
                Public
            </button>
            <button
                className={`toggle-btn ${!isPublic ? 'active' : ''}`}
                onClick={() => setIsPublic(false)}
            >
                Private
            </button>
            </div>
          </div>
        </div>

        {/* Delete Account */}
        <div className="section-block two-col my-account">
        <div className="section-title">My Account</div>
            <div className="section-subtitle">
                <div className="section-subtitle-text">
                    <h3>Delete My Account</h3>
                    <p>Delete your account and all data associated with it.</p>
                </div>
                <button className="danger-btn">Delete Account</button>
            </div>
        </div>
      </div>
    </div>
  );
}
