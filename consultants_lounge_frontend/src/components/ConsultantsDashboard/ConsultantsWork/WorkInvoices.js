import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../../styles/ConsultantDB/WorkInvoices.css';

export default function WorkInvoices() {
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
        <div className="WorkInvoices">
            <div className="Invoices-title">
                <h1>My Invoices</h1>
            </div>
            <div className="contentInvoices">
                <p className="Invoices-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button className='Invoices-btn'>Create Invoice</button>
            </div>
        </div>
      </div>
    </div>
  );
}
