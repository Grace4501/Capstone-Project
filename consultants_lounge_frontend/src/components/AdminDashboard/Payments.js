export default function Payments() {
    return (
        <div>
            <div>
                <h2> Payments </h2>
                <p><b>Click On The Row and See The Pricing Package That The Client Recieved</b></p>
                <div className="topContainer" >
                    <ul>
                        <li> <select>
                            <option>Invoice</option>
                        </select>
                        </li>
                        <li> Date </li>
                        <li> Status</li>
                        <li> Customer</li>
                        <li> Purchase </li>
                    </ul>
                </div>
                <div className="paymentsData">

                </div>
                <div className="bottomContainer">
                    <button>← Previous</button>
                    <nav>
                        <ul>
                            <li> 1</li>
                            <li> 2 </li>
                            <li> 3 </li>
                            <li> ... </li>
                            <li> 8 </li>
                            <li> 9 </li>
                            <li> 10 </li>
                        </ul>
                    </nav>
                    <button>PaymentsNext →</button>
                </div>
            </div>
        </div>
    )
}