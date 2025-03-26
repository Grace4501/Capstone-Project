import '../../styles/CRM.css';
export default function CRM(){
    return(
    <div className='crm'> 
        <h2>CRM</h2>
        <div>
            <div className="crmdetails"> 
                <ul> 
           <li className ="appointments"> <b> Appointments </b> </li>
           <li className = "email"> <b> Email </b> </li>
           <li> <b>Export - CSV - Like Exporting Contact Information</b></li>
           </ul>
           </div>
        </div>
    </div>
    )
}