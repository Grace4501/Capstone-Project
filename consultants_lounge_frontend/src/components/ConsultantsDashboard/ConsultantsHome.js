import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ConsultantDB/ConsultantsHome.css';

export default function ConsultantsHome() {
  const [data, setData] = useState({ courses: [], resources: [] });

  useEffect(() => {
    fetch('/ConsultantHome.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="ConsultantsHome">
      <h1>Welcome Back, Consultant Name!</h1>

      {/* Profile Completion Card */}
      <div className="profile-card">
        <div className="profile-left">
          <div className="avatar-placeholder" />
          <p className="add-photo">Add Photo</p>
        </div>
        <div className="profile-center">
          <h2>5%</h2>
          <p>of your profile is complete</p>
        </div>
        <div className="profile-right">
          <div className="progress-bar">
            <div className="filled" style={{ width: '5%' }}></div>
          </div>
          <p className="profile-description">Complete your profile to get matched with clients who are looking for your skillset.</p>
          <Link to="/ConsultantsProfile">
            <button className="primary-btn-home">Complete Profile</button>
          </Link>
        </div>
      </div>

      {/* Courses */}
      <div className="section">
        <div className="section-header">
          <h2>Popular Courses</h2>
          <Link to="/ConsultantsLearning">View All</Link>
        </div>
        <div className="card-grid">
          {data.courses.map((course, i) => (
            <div className="card" key={i}>
              <img src={course.img} alt={course.name} />
              <p className="course-label">COURSE</p>
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <span>{course.lessons} lessons • {course.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* News & Articles */}
      <div className="section">
        <div className="section-header">
            <h2>News & Articles</h2>
            <Link to="/ConsultantsLearning">View All</Link>
        </div>

        <div className="resource-wrapper">
            <div className="card-grid">
            {data.resources.map((resource, i) => (
                <div className="resource-card-home" key={i}>
                <p className="resource-label">RESOURCES</p>
                <h3>{resource.title}</h3>
                <button className="primary-btn-home">Read Now</button>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}