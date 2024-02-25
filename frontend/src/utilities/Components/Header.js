import logo from '../Assests/LOGO.png';

const Header = () => {
    return (  
        <div className="header">
            <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                      <img src={logo} alt="Logo" width="40" />
                    </a>
                    <h2 style={{color: 'black'}}>DO-IT!</h2>
                    <a className="navbar-brand" href="#">
                      <img src={logo} alt="Logo" width="40" />
                    </a>
                </div>
            </nav>
        </div>
    );
}
 
export default Header;