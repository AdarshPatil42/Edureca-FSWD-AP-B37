import './Header.css';

function Header({locationChange, nameChange}){

    return(
        <div className="header">
            <div className="header-form">
            <select onchange={(event)=>{locationChange(event.target.value)}} className="form-control form-select">
                <option>Select</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Kolhapur">Kolhapur</option>
                <option value="Delhi">Delhi</option>
            </select>
            <input onInput={(event)=>{nameChange(event.target.value)}} className="form-control " type="text" placeholder='Search for a Restaurant' name="location"></input>
            </div>
        </div>
    );
}

export default Header;