import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../../styles/ConsultantDB/WorkInvites.css';
import noInvites from '../../../resources/invites.png';

export default function WorkInvites() {
  const { tab } = useParams();
  const [data, setData] = useState([]);

  const tabs = [
    { id: 'invites', label: 'My Invites' },
    { id: 'current', label: 'Current Projects' },
    { id: 'new', label: 'New Projects' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'invoices', label: 'My Invoices' },
    { id: 'history', label: 'My Project History' },
  ];

  useEffect(() => {
    fetch('/ConsultantHome.json')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="ConsultantsWork">
      <h2>My Work</h2>

      {/* Tab Navigation */}
      <div className="work-tabs">
        {tabs.map((tabItem) => (
          <Link
            key={tabItem.id}
            to={`/ConsultantsWork/${tabItem.id}`}
            className={tab === tabItem.id ? 'tab active' : 'tab'}
          >
            {tabItem.label}
          </Link>
        ))}
      </div>

      {/* Tab Content */}
      <div className="work-content">
        <div className="WorkInvites">
            <div className="invite-title">
                <h1>My Invites</h1>
            </div>
            <div className="contentInvites">
                <img src={noInvites} alt="no-Invites" className="no-Invites-img" />
                <p className="no-Invites-txt">You Have No Invitations</p>
            </div>
        </div>
      </div>
    </div>
  );
}
