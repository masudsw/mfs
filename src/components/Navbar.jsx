import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div>MFS</div>
            <div><Link to='/login'> Login</Link>| <Link to='/registration'>Registrar</Link></div>
            
        </div>
    );
};

export default Navbar;