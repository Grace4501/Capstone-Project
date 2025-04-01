import '../../../styles/Analytics.css';
import CreditCard from '../../../resources/CreditCard.png';
import PercentTag from '../../../resources/PercentTag.png';
import ShoppingCart from '../../../resources/ShoppingCart.png';
import Percent from '../../../resources/Percent.png'

export default function Analytics() {
    return (
        <div className='Analytics'>
            <h4> Analytics </h4>
            <div className='AnalyticFilter'>
                <input type="search" placeholder='Search...' />
                <select>
                    <option this="This Year"> This Year </option>
                </select>
            </div>
            <div className="AnalyticCards">
                <div className="totalSalesCard">
                    <img src={ShoppingCart} />
                    <p style={{ color: "green" }}> +16.24% </p>
                    <br />
                    <p> TOTAL SALES </p>
                    <p> <b> $ 23,090.00</b></p>
                    <p> Compared to ($19,340.00 last year)</p>
                </div>
                <div className="purchasesCard">
                    <img src={CreditCard} />
                    <p style={{ color: "red" }}> -10.82% </p>
                    <br />
                    <p> PURCHASES </p>
                    <p> <b> $ 14,850.00</b></p>
                    <p> Compared to ($19,340.00 last year)</p>
                </div>
                <div className="returnsCard">
                    <img src={PercentTag} />
                    <p style={{ color: "green" }}> +7.33% </p>
                    <br />
                    <p> RETURNS</p>
                    <p> <b> $ 6,525.00</b></p>
                    <p> Compared to ($4.310.00 last years)</p>
                </div>
                <div className="marketingCard">
                    <p> Marketing goal for <b> the past year</b></p>
                    <p style={{ float: "left", left: "1px" }}>$ 4,520.00</p>
                    <img style={{ width: "100px" }} src={Percent} />
                    <p style={{ float: "left" }}> You reached <b>$4,520.00/$8,000.00</b></p>
                </div>
            </div>
            <div className="AdminSales">
                <div className="salesAnalytics">
                    <h4> Sales Analytics </h4>
                    <label> Marketing Sales </label>
                    <label> Online Sales</label>
                </div>
                <div className="recentSales">
                    <p> Recent Sales </p>
                    <p> ... </p>
                    <div className="customerData">
                    </div>
                </div>
            </div>
            <div className="latestInvoices">
                <button> Generate Report </button>
                <p> ... </p>
                <ul>
                    <li> Invoice No. </li>
                    <li> Customer Name </li>
                    <li> Date </li>
                    <li> Amount </li>
                    <li> Email </li>
                    <li> Product ID </li>
                    <li> Status </li>
                    <li> Options </li>
                </ul>
            </div>
        </div>
    )
}