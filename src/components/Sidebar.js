import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../data/logo.png.png';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
const Sidebar = () => {
    const { activeMenu, setActiveMenu, screensize } = useStateContext();
    const handleCloseSideBar = () => {
        if (activeMenu && screensize <= 900) {
            setActiveMenu(false)
        }
    }
    const activeLink = 'flex items-center gap-5 pl-4 rounded-lg text-white text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 rounded-lg text-md text-gray-700 hover:bg-light-gray m-2';
    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow:auto 
        md:hover:overflow-auto pb-10'>
            {activeMenu && (<>
                <div className='flex justify-between items-center'>
                    <Link to="/" onClick={handleCloseSideBar}
                        className="items-center w-44 ml-3 mt-4 flex">
                        <img src={logo} /></Link>
                    <TooltipComponent content="Menu" position='BottomCenter'>
                        <button type="button" onClick={() => setActiveMenu(
                            (prevActiveMenu) => !prevActiveMenu)}
                            className="text-xl rounded-full p-3 
                    hover:bg:light-gray mt-4 block md:hidden">
                            <MdOutlineCancel />
                        </button>
                    </TooltipComponent>
                </div>
                <div className='mt-10'>
                    {links.map((item) => (
                        <div key={item.title}>
                            {item.links.map((link) => (
                                <NavLink to={`/${link.name}`}
                                    key={link.name}
                                    onClick={handleCloseSideBar}
                                    className={({ isActive }) =>
                                        isActive ? activeLink : normalLink}>
                                    {link.icon}
                                    <span className="text-gray-400 m-2 capitalize">{link.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </div>
            </>)}
        </div>
    )
}

export default Sidebar