import React, {useState} from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import './navbar.css'

function Navbar () {
        const [menu, setMenu] = useState(0);
        // const [scroll, setScroll] = useState(0);



        const menuitem = [
            {
                name: "Home",
                url: "/",
            },
            {
                name: "About us",
                url: "aboutus",
            },
            {
                name: "GitHub",
                url: "https://github.com",
            } 
        ];


        return (
            
            <nav className='navbar'>
                <a href="/" className='navbar_title'>PixelArt</a>
                <ul className='navbar_items_container'>
                    {
                        menuitem.map((menu, index) => (
                            <li className='navbar_item' key={index}>
                                <a href={menu.url} title={menu.name}>{menu.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className='navbar-mobile'>
                    <HiMenuAlt3 className="navbar-mobile-menu" onClick={() => setMenu((menu+1)%2)} />
                    {menu
                        ?
                            <ul className="navbar-mobile-list">
                            {
                                menuitem.map((menu) => (
                                    <li className='navbar_mobile-list-item'>
                                        <a href={menu.url} title={menu.name}>{menu.name}</a>
                                    </li>
                                ))
                            }
                            </ul>
                        : null}
                    
                </div>
            </nav>
        )
}

export default Navbar;