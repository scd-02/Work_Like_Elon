import logo from '../Assests/LOGO.png';

const Header = () => {
    return (  
        <div className="header">
            <nav class="navbar bg-body-tertiary">
                <div class="container">
                    <a class="navbar-brand" href="#">
                      <img src={logo} alt="Logo" width="40" />
                    </a>
                    <h2>DO-IT!</h2>
                    <a class="navbar-brand" href="#">
                      <img src={logo} alt="Logo" width="40" />
                    </a>
                </div>
            </nav>
        </div>
    );
}
 
export default Header;