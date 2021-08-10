import React from 'react'
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.rightNavbar}>
                <h1>Hello</h1>
                <h2>Guest User</h2>
            </div>
            <div className={styles.centerNavbar}>
                <h1>Expense Manager</h1>
            </div>
            <div className={styles.leftNavbar}>
            <img src="https://img.icons8.com/fluency-systems-regular/48/000000/user.png" alt="user_logo" />
            </div>
        </div>
    )
}

export { Navbar };
