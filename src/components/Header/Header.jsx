import React, { useState, useEffect, useRef } from 'react';
import logoHeader from './img/logo-header.webp';
import basket from './img/Basket.webp';
import find from './img/Find.webp';
import style from './Navbar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const [openMyProfile, setOpenMyProfile] = useState(false);
    const { id } = useParams();
    const [nav, setNav] = useState(false);
    const menusRef = useRef(null);

    useEffect(() => {

        const handleClickOutside = (event) => {
            if (menusRef.current && !menusRef.current.contains(event.target)) {
                setOpenMyProfile(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


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
    const dispatch = useDispatch();
    const handleAuth = () => {
        dispatch({ type: 'LOG_OUT' });
    };
    const email = useSelector((state) => state.email);
    const smallName = email.split('@')[0];

    const capitalizeFirstLetter = (str) => {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const name = capitalizeFirstLetter(smallName);
    const nameLeter = name.charAt(0);
    return (
        <header className='pt-3 gap-1 sm:gap-4 bg-white border-b border-grey-border pb-3'>
            <div className='z-50 flex items-center sm:justify-between px-5 sm:px-8 max-w-screen-ct mx-auto'>
                <div className="flex items-center gap-2.5">
                    <Link to="/" ><img src={logoHeader} alt="Logo" /></Link>
                    <Link to="/" className="brand-name">Byway</Link>
                </div>
                <div className={style.input}>
                    <nav className={nav ? [style.menu, style.active].join(' ') : style.menu}>
                        <div className={nav ? [style.category, style.active].join(' ') : style.category}>
                            <ul className={`flex flex-wrap ${nav && 'flex-col relative'}`}>
                                <li>
                                    <Link to="/categories" className={` leading-5 font-medium hover:text-blue transition-all duration-300 tb:pt-0 ${nav ? 'text-white text-2xl' : 'text-grey-700 text-sm'}`}>
                                        Category
                                    </Link>
                                </li>
                                {isLoggedIn && nav && (<div className=' left-[-35%] absolute text-center items-center justify-center top-[80px]  flex flex-col gap-4 border-t border-t-grey-text-light p-6'>
                                    <Link to="/myprofile/profile" className="text-center underline-menu group textMyProfile justify-center">
                                        Profile
                                        <span className="underline-menu-span"></span>
                                    </Link>
                                    <Link to="/categories/:id/details/shoppingcart" className="justify-center underline-menu group textMyProfile">
                                        Order&nbsp;Page
                                        <span className="underline-menu-span"></span>
                                    </Link>
                                    <Link to="/myprofile/my-courses" className="flex justify-center underline-menu group textMyProfile">
                                        My&nbsp;Courses
                                        <span className="underline-menu-span"></span>
                                    </Link>
                                    <a href="https://example.com/help" target="_blank" className="underline-menu group textMyProfile">
                                        Help
                                        <span className="underline-menu-span"></span>
                                    </a>
                                    <button className="underline-menu group textMyProfile text-2xl " onClick={() => { setOpenMyProfile(); handleAuth(); }}>
                                        <p className=' text-2xl'> Logout</p>
                                        <span className="underline-menu-span"></span>
                                    </button>
                                </div>)}
                            </ul>
                        </div>
                    </nav>

                    <label htmlFor="searchInput" className="hidden ft:flex border border-gray-700 rounded-lg sm:max-w-full px-2.5 tb:ml-8 tb:mr-10 py-2 gap-3 basis-[100%] tb:basis-[57%]">
                        <button type="button"><img src={find} alt="Search" /></button>
                        <input id="searchInput" type="search" className=' text-grey-700 text-sm leading-5 font-medium w-full focus:outline-none input-shadow ' placeholder="Search courses" />
                    </label>
                    <nav className={nav ? [style.menu_teach, style.active].join(' ') : [style.menu_teach]}>
                        <ul className={`flex flex-wrap `}
                        >
                            <li>
                                {isLoggedIn ? (<Link to="/myprofile/profile" className={` leading-5 font-medium hover:text-blue transition-all duration-300 tb:pt-0  ${nav ? 'text-white text-2xl' : 'text-grey-700 text-sm'}`}>
                                    Teach on Byway
                                </Link>) : (<Link to="/login" className={` leading-5 font-medium hover:text-blue transition-all duration-300 tb:pt-0  ${nav ? 'text-white text-2xl' : 'text-grey-700 text-sm'}`}>
                                    Teach on Byway
                                </Link>)}

                            </li>

                        </ul>
                    </nav>
                </div>

                <div className={nav ? [style.button_sign, style.active].join(' ') : [style.button_sign]}>


                    {isLoggedIn ? (<Link to={`/categories/${id}/details/shoppingcart`} className={`ml-auto ${nav && [style.basket]}`} ><img src={basket} alt="Basket" /></Link>) : (<Link to="/login" className={`ml-auto ${nav && [style.basket]}`} ><img src={basket} alt="Basket" /></Link>)}




                    {isLoggedIn ? (
                        <div className={style.mymenu} ref={menusRef}  >
                            <button
                                onClick={() => setOpenMyProfile(prevState => !prevState)}
                                className='flex hover:bg-sl-blue duration-300 w-10 h-10 rounded-full bg-grey-700 items-center justify-center text-base font-medium text-white'>
                                {nameLeter}
                            </button>

                            <div

                                className={`absolute opacity-0 bg-white border rounded-2xl top-[60px] border-blue flex flex-col right-0 min-w-80 max-w-max z-[300] transition-all duration-300
                              ${openMyProfile && 'opacity-100 duration-300'}`}
                            >
                                <div className='flex items-center gap-4 py-5 px-6'>
                                    <div className='flex duration-300 w-60w h-60w rounded-full bg-grey-700 items-center justify-center text-base font-medium text-white'> {nameLeter}</div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-base font-medium text-text-dark'>{name}</p>
                                        <p className='text-xs font-normal text-grey-800'>{email}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 border-y border-y-grey-text-light p-6'>
                                    <Link to="/myprofile/profile" className="underline-menu group textMyProfile">
                                        Profile
                                        <span className="underline-menu-span"></span>
                                    </Link>
                                    <Link to="/categories/:id/details/shoppingcart" className="underline-menu group textMyProfile">
                                        Order Page
                                        <span className="underline-menu-span"></span>
                                    </Link>
                                    <Link to="/myprofile/my-courses" className="underline-menu group textMyProfile">
                                        My Courses
                                        <span className="underline-menu-span"></span>
                                    </Link>
                                </div>
                                <div className='flex flex-col gap-4 p-6'>


                                    <a href="https://example.com/help" target="_blank" className="underline-menu group textMyProfile">
                                        Help
                                        <span className="underline-menu-span"></span>
                                    </a>
                                    <button className="underline-menu group textMyProfile" onClick={() => { setOpenMyProfile(); handleAuth(); }}>
                                        Logout
                                        <span className="underline-menu-span"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="p-2.5 gap-x-6 box-border bg-grey-700 text-sm text-white border border-grey-700 items-center hover:bg-white hover:text-grey-700 sm:bg-white sm:text-grey-700 sm:hover:bg-grey-700 sm:hover:text-white transition-all duration-300 transform">
                                Log In
                            </Link>
                            <Link to="/signup" className="p-2.5 gap-x-6 box-border text-sm border-grey-700 bg-grey-700 text-white items-center sm:border-grey-700 border hover:bg-white hover:text-grey-700 transition-all duration-300 transform">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>

                <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                    {nav ? <AiOutlineClose size={25} color='grey' /> : <AiOutlineMenu size={25} />}
                </div>
            </div>
        </header >
    );
}

export default Header;
