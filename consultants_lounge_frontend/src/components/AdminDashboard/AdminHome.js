import '../../styles/AdminHome.css';
import DecreasingData from '../../resources/DescreasingData.png';
import IncreasingData from '../../resources/IncreasingData.png';
export default function Home() {
    return (
        <div className="Home">
            <div className="container-welcome-buttons">
                <div className="Welcome">
                   {/* The name of the administrator will appear here when they signed in*/}
                <h4> Welcome back, User</h4>
                <br/>
                <p> Track manage and forecast your customers and orders.</p>
              </div>
              <div className="buttons">
                <button className= "import"> Import </button>
                <button className="add">+Add</button>
                </div>
            </div>
            <div className="Cards"> 
            <div className="card">
                <h6> Total Customers </h6>
                <br/>
                <h5> 2,420 </h5>
                <br/>
                <img  className="IncreasingData" src={IncreasingData}   />
                <p> <b> ↑ 40% </b> vs last month </p>
            </div>
            <div className="card">
                <h6> Members</h6>
                <br/>
                <h5> 1,210</h5>
                <br/>
                <img className="DecreasingData" src={DecreasingData}   />
                <p> <b> ↓ 10% </b> vs last month </p>
            </div>
            <div className ="card">
                <h6> Active now</h6>
                <br/>
                <h5> 316</h5>
                <br/>
                <img  className="IncreasingData" src={IncreasingData}   />
                <p> <b> ↑ 20% </b> vs last month </p>
            </div>
            </div>
            <div className="Filters">
           <button className="alltime"> All time X </button>
           <button className="country"> US, AU, +4   X </button>
            <button className="more-filters"> More Filters </button>
            <input type="search" placeholder='Search'></input>
            </div>
            {/* Backend and frontend integration*/}
            <div className="Data"> 
            </div>
            <div className="previous-next-buttons">
            <button className="previous"> Previous </button>
            <button className="next"> Next </button>
           </div>
            <p className="select-pages"> Page 1 of 10</p>
        </div>
    );
}