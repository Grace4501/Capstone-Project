import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../../styles/ConsultantDB/SettingsPayment.css';

export default function SettingsPayment() {
  const { tab } = useParams();

  const tabs = [
    { id: 'account', label: 'Account' },
    { id: 'security', label: 'Privacy & Security' },
    { id: 'payment', label: 'Payments' },
    { id: 'notifications', label: 'Notifications' },
  ];

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

      {/* Page Content */}
      <div className="settings-content">
        {/* Banking Information */}
        <div className="section-block two-col">
          <div className="section-title">Banking Information</div>
          <div className="section-subtitle">
            <p>Provide your banking information where we can deposit your payment.</p>
            <button className="primary-btn">Add Bank Account</button>
          </div>
        </div>

        {/* Tax Documents */}
        <div className="section-block two-col">
          <div className="section-title">Tax Documents</div>
          <div className="section-subtitle">
            <p>This will help us provide better search/job matching experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
