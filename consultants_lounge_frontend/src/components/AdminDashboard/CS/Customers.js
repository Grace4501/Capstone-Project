import '../../../styles/Customers.css';
export default function Customers(){
    return(
        <div className="Customer">
            <button> + Add Customer </button>
            <select>
              <option> Newest</option>
              <option> Oldest </option>
            </select>
        </div>
    )
}