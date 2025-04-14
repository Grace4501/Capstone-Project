import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../../styles/ConsultantDB/SettingsNotifications.css';

export default function SettingsNotifications() {
  const { tab } = useParams();

  const tabs = [
    { id: 'account', label: 'Account' },
    { id: 'security', label: 'Privacy & Security' },
    { id: 'payment', label: 'Payments' },
    { id: 'notifications', label: 'Notifications' },
  ];

  const [notifications, setNotifications] = useState({
    jobInvite: true,
    missingBank: true,
  });

  const toggleNotification = (type) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
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

      {/* Notification Toggles */}
      <div className="settings-content">
        <div className="section-block two-col">
          <div className="section-title">Notifications</div>
          <div className="notification-list">
            <div className="notification-item">
              <span>You have been invited to a job</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={notifications.jobInvite}
                  onChange={() => toggleNotification('jobInvite')}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="divider" />
            <div className="notification-item">
              <span>You must add banking information</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={notifications.missingBank}
                  onChange={() => toggleNotification('missingBank')}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
