import './Header.css';

function Header(){
    return(
        <div className="header">
            <div className="header-form">
            <select className="form-control form-select">
                <option>Select</option>
                <option>Mumbai</option>
                <option>Pune</option>
                <option>Kolhapur</option>
                <option>Delhi</option>
            </select>
            <input className="form-control " type="text" placeholder='Search for a Restaurant' name="location"></input>
            </div>
        </div>
    );
}

export default Header;