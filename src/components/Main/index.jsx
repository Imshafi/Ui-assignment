import React from 'react'
import styles from './styles.module.css';
import Group253 from '../images/Group253.png';
import Image6 from '../images/Image6.png';
import MaskGroup1 from '../images/MaskGroup1.png'
import MaskGroup2 from '../images/MaskGroup2.png'
// import MaskGroup3 from '../images/MaskGroup3.png'
import MaskGroup4 from '../images/MaskGroup4.png'
// import ballbearing from '../icons/ballbearing.png'
import box from '../icons/box.png'
import bxbxscar from '../icons/bxbxscar.png'
import fasolidsolarpanel from '../icons/fasolidsolarpanel.png'
import gridiconspin from '../icons/gridiconspin.png'
import Group49 from '../icons/Group49.png'
// import siglyphdrill from '../icons/siglyphdrill.png'
import Vector1 from '../icons/Vector1.png'
import Vector2 from '../icons/Vector2.png'
import Vector3 from '../icons/Vector3.png'
import Vector4 from '../icons/Vector4.png'
import Vector5 from '../icons/Vector5.png'
import Vector6 from '../icons/Vector6.png'
import Vector from '../icons/Vector.png'

function Main() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.sideBarWrapper}>
                <ul>
                    <li>
                        <img src={Group253} alt="can't get image" />
                        <span>Power tools</span>
                    </li>
                    <li>
                        <img src={bxbxscar} alt="can't get image" />
                        <span>automotive maintenance &</span>
                    </li>
                    <li>
                        <img src={fasolidsolarpanel} alt="can't get image" />
                        <span>solar</span>
                    </li>
                    <li>
                        <img src={gridiconspin} alt="can't get image" />
                        <span>office supplies</span>
                    </li>
                    <li>
                        <img src={box} alt="can't get image" />
                        <span>material handiling</span>
                    </li>
                    <li>
                        <img src={Vector} alt="can't get image" />
                        <span>pumps</span>
                    </li>
                    <li>
                        <img src={Vector6} alt="can't get image" />
                        <span>hand tools</span>
                    </li>
                    <li>
                        <img src={Vector5} alt="can't get image" />
                        <span>medical supplies</span>
                    </li>
                    <li>
                        <img src={Vector4} alt="can't get image" />
                        <span>testing & measuring</span>
                    </li>
                    <li>
                        <img src={Vector3} alt="can't get image" />
                        <span>agriculture</span>
                    </li>
                    <li>
                        <img src={Vector2} alt="can't get image" />
                        <span>cleaning</span>
                    </li>
                    <li>
                        <img src={Vector1} alt="can't get image" />
                        <span>saftey</span>
                    </li>
                    <li>
                        <img src={Group49} alt="can't get image" />
                        <span>electrical</span>
                    </li>
                </ul>
                <div>See all categories</div>
            </div>
            <div className={styles.productMainWrapper}>
                <div className={styles.offerWrapper}>
                    <img src={MaskGroup1} alt="can't get image" className={styles.offerImg} />
                    <img src={MaskGroup2} alt="can't get image" className={styles.offerImg} />
                </div>
                <div className={styles.offerBanner}>
                    <img src={Group253} className={styles.offerBannerImg} />
                </div>
                <div className={styles.branchProductWrapper}>
                    <div className={styles.branchProductHeader}>
                        <h2>IB Power</h2>
                        <button>View More</button>
                    </div>
                    <div className={styles.itemsWrapper}>
                        <div className={styles.item}>
                            <div className={styles.itemImgWrapper}>
                                <img src={Image6} className={styles.product} alt="can't get image" />
                            </div>
                            <h2>Product Name</h2>
                            <div className={styles.offerItemPrice}>
                                <span className={styles.act}><del>Rs.999</del></span>
                                <span className={styles.offerPercentage}>49% OFF</span>
                            </div>
                            <h1>Rs.499</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.offerBanner}>
                    <img src={MaskGroup4} className={styles.offerBannerImg} />
                </div>
                <div className={styles.branchProductWrapper}>
                    <div className={styles.branchProductHeader}>
                        <h2>Hand tools</h2>
                        <button>View More</button>
                    </div>
                    <div className={styles.itemsWrapper}>
                        <div className={styles.item}>
                            <div className={styles.itemImgWrapper}>
                                <img src={Image6} alt="can't get image" className={styles.product} />
                            </div>
                            <h2>Product Name</h2>
                            <div className={styles.offerItemPrice}>
                                <span className={styles.act}><del>Rs.999</del></span>
                                <span className={styles.Percentage}>49% OFF</span>
                            </div>
                            <h1>Rs.499</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.branchProductWrapper}>
                    <div className={styles.branchProductHeader}>
                        <h2>Power tools</h2>
                        <button>View More</button>
                    </div>
                    <div className={styles.itemsWrapper}>
                        <div className={styles.item}>
                            <div className={styles.itemImgWrapper}>
                                <img src={Image6} className={styles.product} alt="can't get image" />
                            </div>
                            <h2>Product Name</h2>
                            <div className={styles.offerItemPrice}>
                                <span className={styles.act}><del>Rs.999</del></span>
                                <span className={styles.offerPercentage}>49% OFF</span>
                            </div>
                            <h1>Rs.499</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    // </div >
  )
}

export default Main;