import {NavLink} from 'react-router-dom'

export default function Navbar(){
    return(

        <nav>

            <NavLink 
            className={({ isActive}) => isActive? "active" : ""} 
            to='/'>Home</NavLink>
            <NavLink
             className={({ isActive}) => isActive? "active" : ""} 
            to='/videos'>Videos</NavLink>
            <NavLink
             className={({ isActive}) => isActive? "active" : ""} 
            to='/contact'>CONTACT</NavLink>
            <NavLink
             className={({ isActive}) => isActive? "active" : ""} 
            to='/about'>ABOUT</NavLink>


            
        </nav>
    )
}