import React, { useState, useEffect } from 'react';
import logoHeader from './img/logo-header.webp';
import basket from './img/Basket.webp';
import find from './img/Find.webp';
import style from './Navbar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';

const Header = () => {
    const { id } = useParams();
    const [nav, setNav] = useState(false);

    useEffect(() => {
        if (nav) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [nav]);
    return (
        <header className='pt-3 gap-1 sm:gap-4 bg-white border-b border-grey-border pb-3 '>
            <div className='z-50 flex  items-center sm:justify-between px-5 sm:px-8 max-w-screen-ct mx-auto '>
                <div className="flex   items-center gap-2.5">
                    <Link to="/" ><img src={logoHeader} alt="Logo" /></Link>
                    <Link to="/" className="brand-name">Byway</Link>
                </div>
                <div className={style.input}>

                    <nav className={nav ? [style.menu, style.active].join(' ') : style.menu}>
                        <div className={nav ? [style.category, style.active].join(' ') : style.category}>
                            <ul className='flex flex-wrap'>
                                <li>
                                    <Link to="/categories" className='text-grey-700 text-sm leading-5 font-medium hover:text-blue transition-all duration-300 tb:pt-0'>
                                        Category
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>


                    <label htmlFor="searchInput" className="hidden ft:flex  border border-gray-700 rounded-lg  sm:max-w-full px-2.5 tb:ml-8 tb:mr-10 py-2 gap-3  basis-[100%]  tb:basis-[57%] ">
                        <button type="button" ><img src={find} alt="Search" /></button>
                        <input id="searchInput" type="text" className='text-grey-700  text-sm leading-5 font-medium w-full focus:outline-none' placeholder="Search courses" />
                    </label>
                    <nav className={nav ? [style.menu_teach, style.active].join(' ') : [style.menu_teach]}>
                        <ul className='flex flex-wrap'>
                            <li>

                                <Link to="/myprofile/profile" className='text-grey-700 text-sm leading-5 font-medium hover:text-blue transition-all duration-300 tb:pt-0'>
                                    Teach on Byway
                                </Link>

                            </li>
                        </ul>
                    </nav>

                </div>
                <div className={nav ? [style.button_sign, style.active].join(' ') : [style.button_sign]}>
                    <Link to={`/categories/${id}/details/shoppingcart`} ><img src={basket} alt="Basket" /></Link>

                    <Link to="/login" className="p-2.5  gap-x-6 box-border bg-grey-700 text-sm text-white border border-grey-700  items-center   hover:bg-white hover:text-grey-700 sm:bg-white sm:text-grey-700 sm:hover:bg-grey-700  sm:hover:text-white transition-all duration-300 transform ">Log In</Link>
                    <Link to="/signup" className="p-2.5  gap-x-6 box-border  text-sm border-grey-700 bg-grey-700  text-white items-center sm:border-grey-700   border hover:bg-white hover:text-grey-700  sm: transition-all duration-300 transform ">Sign Up</Link>
                </div>
                <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                    {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>
            </div >



        </header >
    );
}

export default Header;