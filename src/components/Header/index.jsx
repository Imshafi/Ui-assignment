import React from 'react';
import styles from './styles.module.css';
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from 'react-router-dom';



function Header() {
  return (
    <div className={styles.headerContainer}>
        <div className={styles.hContainer}>
        <div>
            <h4>Logo Here</h4>
        </div>
        <div className='search'>
            <select>
                <option >Power tools</option>
                <option >Automotive Maintenance</option>
                <option >solar</option>
                <option >office</option>
                <option >material</option>
                <option >pumps</option>
            </select>
            <input type="text" name="search" />
            <AiOutlineSearch />
        </div>
        <div className={styles.navbar}>
            <ul>   
                <li>
            <NavLink to='/signin' activeClassName="active-link">
            <IoMdContact />
            </NavLink>
            Sign In
            </li>
            <li>
            <NavLink to='/maps' activeClassName="active-link">
            <SiGooglemaps />
            </NavLink>
            Track
            </li>
            <li>
            <NavLink to='/cart' activeClassName="active-link">
            <AiOutlineShoppingCart />
            </NavLink>
            Your Order
            </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Header;