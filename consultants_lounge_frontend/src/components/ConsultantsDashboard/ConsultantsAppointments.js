import { useState, useEffect } from 'react';
import '../../styles/ConsultantDB/Consultants.css';
import '../../styles/ConsultantDB/ConsultantsAppointments.css';
import noAppointments from '../../resources/no_appointments.png';


export default function ConsultantsAppointments() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/ConsultantHome.json')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    return (
        <div className="ConsultantsAppointments">
            <h1>Appointments</h1>

            {/* Content */}
            <div className="content">
                <img src={noAppointments} alt="no-appointments" className='no-appointments-img' />
                <p className='no-appointments-txt'>You Have No Appointments</p>
            </div>
        </div>
    );
}
