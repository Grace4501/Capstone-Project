import './Signup.css';
import logoBackground from '../resources/LogoBackground.jpg';
import googleLogo from '../resources/GoogleLogo.png';
export default function Signup() {
    return (
        <div className="Signup">
            <div style={{
                backgroundImage: `url(${logoBackground})`, backgroundSize: 'cover', backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }} className="logo-container">
                <h1> Company </h1>
                <h5> Logo </h5>
            </div>
            <div className="form-container">
                <form>
                    <h4> Create Your Account </h4>
                    <div>
                        <label> Name </label>
                        <input type="text" />
                    </div>
                    <div >
                        <label>Email:</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" />
                    </div>
                    <div className="buttons">
                        <button className="login-button"> LOGIN </button>
                        <button className="google"> <img src={googleLogo} alt='GoogleLogo'></img>SIGN UP WITH GOOGLE </button>
                    </div>
                </form>
            </div>
        </div>
    )
}