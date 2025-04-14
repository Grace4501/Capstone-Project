import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../../styles/ConsultantDB/WorkHistory.css';
import noHistory from '../../../resources/project_history.png';

export default function History() {
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
            to={`/Consultants/work/${tabItem.id}`}
            className={tab === tabItem.id ? 'tab active' : 'tab'}
          >
            {tabItem.label}
          </Link>
        ))}
      </div>

      {/* Tab Content */}
      <div className="work-content">
        <div className="WorkHistory">
            <div className="History-title">
                <h1>No Project History</h1>
            </div>
            <div className="contentHistory">
                <img src={noHistory} alt="no-History" className="no-History-img" />
                <p className="no-History-txt">You Have No Projects</p>
            </div>
        </div>
      </div>
    </div>
  );
}
