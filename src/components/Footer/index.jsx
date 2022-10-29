import React from 'react'
import styles from './styles.module.css';

function Footer() {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.headFootContainer}>
        <div className={styles.item}>
            Shop By Catergory
        </div>
        <div className={styles.item}>
            Shop By Brand
        </div>
        <div className={styles.item}>
            Popular Searches
        </div>
        </div>
        <hr></hr>
        <div className={styles.downContainer}>
            <div>
            <p>LED Lights</p>
            <p>Paints</p>
            <p>Corporate Gifts </p>
            <p>Geysers </p>
            <p>Welding </p>
            </div>
            <div>
            <p>Power Tools </p>
            <p>Pumps </p>
            <p>Safety </p>
            <p>Bearings </p>
            <p>Cleaning </p>
            </div>
            <div>
            <p>Electrical </p>
            <p>Electronics & Robotics </p>
            <p>Fasteners </p>
            <p>Furniture, Hospitality and Food </p>
            <p>Service </p>
            </div>
            <div>
            <p>Industrial Automation</p>
            <p>Lab Supplies</p>
            <p>Machinery</p>
            <p>Machining Accessories</p>
            <p>Medical Supplies & Equipment</p>
            </div>
            <div>
            <p>Plumbing</p>
            <p>Pneumatics</p>
            <p>Security</p>
            </div>
        </div>
        <hr></hr>
        <div className={styles.secondFooter}>
        <div>
        <b>Company</b>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Careers</p>
        <p>Sell On Industry buying</p>
        <p>Articles</p>
        </div>
        <div>
            <b>Help</b>
            <p>FAQS</p>
            <p>Report Infringement</p>
            <p>Cancellations & Returns</p>
            </div>
            <div className={styles.lastSearch}>
                <div>
                <input type="email" name="email" placeholder='Enter Email Address' />
                </div>
                <div>
                <input type="button" value="Sign" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer