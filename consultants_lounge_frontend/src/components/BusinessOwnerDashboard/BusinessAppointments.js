import { useState } from 'react'
import Options2 from '../../resources/Options2.png'
import Calendar from '../../components/BusinessOwnerDashboard/Calender.js';
import './styles/BusinessAppointments.css'

export default function BusinessAppointments() {
    const [activeTab, setActiveTab] = useState("tasks");

    const [timelineTasks, setTimelineTasks] = useState([
        { id: 1, name: "Morning Routine", time: "06:00 AM" },
        { id: 2, name: "Project Review", time: "01:00 PM" },
        { id: 3, name: "BusinessCalls", time: "08:00 AM" }
    ]); // Manage tasks for the timeline


    const [newAppointment, setNewAppointment] = useState({ name: "", time: "" }); // State for new appointment input

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
        <div>
     <br/>
      <br/>
      <br/>
      <br/>
            <h2> Appointments </h2>
            <button onClick={() => setActiveTab("tasks")}>Tasks</button>
            <button onClick={() => setActiveTab("calendar")}> Calendar </button>
            {/* Navigation sections */}
            {activeTab === "tasks" && (
                <div>
                    <div>
                        <h6> Schedule Tasks</h6>
                        <button> <img src={Options2} /></button>
                        <p> 20th September 2020</p>
                        <button> Previous </button>
                        <button> Next  </button>
                        <br />
                        <div>
                            <button> Day </button>
                            <button> Week</button>
                            <button> Month  </button>
                            <button> Year </button>
                        </div>
                        <br />
                        <input
                                type="text"
                                placeholder="Appointment Name"
                                value={newAppointment.name}
                                onChange={(e) => setNewAppointment({ ...newAppointment, name: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Time"
                                value={newAppointment.time}
                                onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                            />
                        <button onClick={handleAddAppointment}>+ Add Appointment </button>
                        <button>+ Add Task</button>
                    </div>
                    <div>
                        <h6> Today Tasks </h6>
                        <button> <img src={Options2} /></button>
                    </div>
                    <div>
                        <h6> Timeline</h6>
                        <button> Day </button>
                        <button> Week</button>
                        <button> Month  </button>
                        <button> Year </button>
                        <p> 20th September 2020</p>
                        <div>
                        </div>
                        <ul>
                            {timelineTasks.map((task) => (
                                <li  key={task.id}>
                                    <p><strong>{task.name}</strong></p>
                                   <p> {task.time}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {activeTab === "calendar" && (
                <div>
                    <Calendar />
                </div>
            )}
        </div>
    );
}