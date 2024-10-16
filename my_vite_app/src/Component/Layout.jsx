import {Link, Outlet } from "react-router-dom"

function Layout(){
    return(
        <>
        <nav className="navbar bg-success ">
        <ul className="navbar-nav d-flex flex-row ">
            <li>
                <Link className="nav-link text-white me-3 ms-5" to='/'>Home</Link>
            </li>
            <li>
                <Link className="nav-link text-white" to='/Contact'>Contacts</Link>
            </li>
        </ul>
        </nav>

        <Outlet/>

        </>

    )
}

export default Layout