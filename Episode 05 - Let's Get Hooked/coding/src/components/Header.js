const Header = () =>{
    return (
        <div className  ="header">
            <div className="logo-container">
                <img  
                    className="logo"
                    src="https://img.freepik.com/free-vector/food-logo-template_23-2148766603.jpg" 
                    alt ="food-logo" 
                />
            </div>
            <div className ="nav-items ">
                <ul className="unorderd list">
                    <li>Home </li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;