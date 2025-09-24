import {NavLink} from "react-router-dom"
import "./nav.css"
export default function Navbar(){
return(
<>
<header>
    <nav className="navContainer">
        <div className="logo">
            <h2>LOGO</h2>
        </div>

        <ul className="navlinks">
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/add">Add User</NavLink></li>

 </ul>
    </nav>
</header>



</>

)

}