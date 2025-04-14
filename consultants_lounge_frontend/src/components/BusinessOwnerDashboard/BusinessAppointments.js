import { useState, useEffect } from 'react';
import Options2 from '../../resources/Options2.png';
import Calendar from '../../components/BusinessOwnerDashboard/Calender.js';
import '../../styles/BusinessAppointments.css';

export default function BusinessAppointments() {
    // Initialize state from localStorage or default values
    const [activeTab, setActiveTab] = useState(
        localStorage.getItem('activeTab') || "tasks"
    );
    const [timelineTasks, setTimelineTasks] = useState(() => {
        const savedTasks = localStorage.getItem('timelineTasks');
        return savedTasks ? JSON.parse(savedTasks) : [
            { id: 1, name: "Morning Routine", time: "06:00 AM" },
            { id: 2, name: "Project Review", time: "01:00 PM" },
            { id: 3, name: "BusinessCalls", time: "08:00 AM" }
        ];
    });
    const [newAppointment, setNewAppointment] = useState(
        JSON.parse(localStorage.getItem('newAppointment')) || { name: "", time: "" }
    );

    // Save state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    useEffect(() => {
        localStorage.setItem('timelineTasks', JSON.stringify(timelineTasks));
    }, [timelineTasks]);

    useEffect(() => {
        localStorage.setItem('newAppointment', JSON.stringify(newAppointment));
    }, [newAppointment]);

    const handleAddAppointment = () => {
        if (newAppointment.name && newAppointment.time) {
            const newTask = {
                id: timelineTasks.length + 1, // Generate unique ID
                name: newAppointment.name,
                time: newAppointment.time,
            };
            setTimelineTasks([...timelineTasks, newTask]); // Add new appointment to the timelineTasks array
            setNewAppointment({ name: "", time: "" }); // Reset the input fields
        }
    };

    return (
        <div className="appointments-container">
            <br />
            <br />
            <br />
            <h2>Appointments</h2>
            <div className="tab-buttons">
                <button onClick={() => setActiveTab("tasks")}>Tasks</button>
                <button onClick={() => setActiveTab("calendar")}>Calendar</button>
            </div>
            {activeTab === "tasks" && (
                <div>
                    <div className="tasks-timeline-wrapper">
                        <div className="schedule-tasks">
                            <h3>Schedule Tasks</h3>
                            <input
                                type="text"
                                placeholder="Appointment Name"
                                value={newAppointment.name}
                                onChange={(e) =>
                                    setNewAppointment({ ...newAppointment, name: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Time"
                                value={newAppointment.time}
                                onChange={(e) =>
                                    setNewAppointment({ ...newAppointment, time: e.target.value })
                                }
                            />
                            <button onClick={handleAddAppointment}>+ Add Appointment</button>
                            <button>+ Add Tasks</button>
                        </div>
                        <div className="timeline">
                            <h3>Timeline</h3>
                            <ul>
                                {timelineTasks.map((task) => (
                                    <li key={task.id}>
                                        <p><strong>{task.name}</strong></p>
                                        <p>{task.time}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <br/>
                    <div className="today-tasks">
                        <h3>Today Tasks</h3>
                        <button><img src={Options2} alt="Options" /></button>
                    </div>
                </div>
            )}
            {activeTab === "calendar" && (
                <div className="calendar-section">
                    <Calendar />
                </div>
            )}
        </div>
    );
}
