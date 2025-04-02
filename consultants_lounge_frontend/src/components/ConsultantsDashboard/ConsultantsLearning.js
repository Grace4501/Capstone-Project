import { useState, useEffect } from 'react';
import '../../styles/ConsultantDB/Consultants.css';
import '../../styles/ConsultantDB/ConsultantLearning.css';

export default function ConsultantsLearning() {
    const [activeTab, setActiveTab] = useState('courses');
    const [data, setData] = useState({ courses: [], resources: [] });

    // List of colors for course backgrounds
    const courseColors = ['#d9eae8', '#e6f2f7', '#f9f2e0'];

    useEffect(() => {
        fetch('/ConsultantHome.json')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    return (
        <div className="ConsultantsLearning">
            <h1>My Learning</h1>
            
            {/* Tabs */}
            <div className="tabs">
                <button 
                    className={activeTab === 'courses' ? 'active' : ''} 
                    onClick={() => setActiveTab('courses')}
                >
                    Courses
                </button>
                <button 
                    className={activeTab === 'resources' ? 'active' : ''} 
                    onClick={() => setActiveTab('resources')}
                >
                    Resources
                </button>
            </div>
            
            {/* Content */}
            <div className="content">
                {activeTab === 'courses' ? (
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <div className="courses-container">
                            {data.courses.map((course, index) => (
                                <div 
                                    key={index} 
                                    className="course-card" 
                                    style={{ backgroundColor: courseColors[index % courseColors.length] }}
                                >
                                    <img src={course.img || 'placeholder.jpg'} alt={course.name} className="course-img" />
                                    <div className="course-content">
                                        <h3>{course.name}</h3>
                                        <p>{course.description}</p>
                                    </div>
                                    <button className="start-button">Start</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="resources-container">
                            {data.resources.map((resource, index) => (
                                <div 
                                    key={index} 
                                    className="resource-card"
                                    style={{ backgroundColor: courseColors[index % courseColors.length] }}>
                                    <div className="resource-content">
                                        <h3>{resource.title}</h3>
                                    </div>
                                    <button className="resource-button">Read now</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
