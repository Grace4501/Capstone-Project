import '../../../styles/CostumerService.css';
import { Routes,Route,Link  } from "react-router-dom"
import Contacts from "./Contacts.js"
import Customers from "./Customers.js"

export default function CostumerService(){
    return(
  <div className="customerservice">
      <div>
        <h2>Customer Service</h2>
        <Link to="/customer-service/customers" > Customers  </Link>
        <Link to="/customer-service/contacts"> Contacts </Link>
        </div>
        <Routes>
          <Route path="/customers" element={<Customers />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
    </div>
    )
}