import './Home.css'
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
                <p> Total Customers </p>
                <br/>
                <p> 2,420 </p>
            </div>
            <div className="card">
                <p> Members</p>
                <br/>
                <p> 1,210</p>
            </div>
            <div className ="card">
                <p> Active now</p>
                <br/>
                <p> 316</p>
            </div>
            </div>
            <div className="Filters">
            <button> More Filters </button>
            <input type="search" placeholder='Search'></input>
            </div>
            <div className="Data"> 
            </div>
            <div className="previous-next-buttons">
            <button> Previous </button>
            <button> Next </button>
            <p> Page 1 of 10</p>
            </div>
        </div>
    );
}