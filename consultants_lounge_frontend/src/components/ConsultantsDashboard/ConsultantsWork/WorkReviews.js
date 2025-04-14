import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../../styles/ConsultantDB/WorkReviews.css';

export default function WorkReviews() {
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
    fetch('/resources/ConsultantsReview.json')
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
        <div className="WorkReviews">
          <div className="Reviews-title">
            <h1>Reviews</h1>
          </div>
          <div className="contentReviews">
            <p className="Reviews-txt">
              Review some of the business owners you've worked with. Let others know about your experience.
            </p>
          </div>

          <div className="review-list">
            {data.Consultants?.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-left">
                  <img src={review.img} alt={review.name} className="reviewer-img" />
                </div>
                <div className="review-right">
                  <p className="review-name">{review.name}</p>
                  <p className="review-title">{review.title}</p>
                  <p className="review-desc">{review.description}</p>
                  <div className="review-meta">
                    <div className="review-info">
                      <div>
                        <strong>Project</strong>
                        <p>{review.colab}</p>
                      </div>
                      <div>
                        <strong>Date</strong>
                        <p>{review.colabDate}</p>
                      </div>
                    </div>
                    <button className="review-btn">Review Business Owner</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
