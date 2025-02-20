export default function Analytics() {
    return (
        <div>
            <h4> Analytics </h4>
            <div>
                <input type="search" />
                <select>
                    <option this="This Year"> This Year </option>
                </select>
            </div>
            <div className="Cards">
                <div className="totalSalesCard">
                    <p> TOTAL SALES </p>
                    <p> <b> $ 23,090.00</b></p>
                    <p> Compared to ($19,340.00 last year)</p>
                </div>
                <div className="purchasesCard">
                    <p> PURCHASES </p>
                    <p> <b> $ 14,850.00</b></p>
                    <p> Compared to ($19,340.00 last year)</p>
                </div>
                <div className="returnsCard">
                    <p> RETURNS</p>
                    <p> <b> $ 6,525.00</b></p>
                    <p> Compared to ($4.310.00 last years)</p>
                </div>
                <div className="marketingCard">
                    <p> Marketing goal for <b> the past year</b></p>
                    <p>$ 4,520.00</p>
                    <p> You reached $4.520.00</p>
                </div>
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
        </div>
    )
}