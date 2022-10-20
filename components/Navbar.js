import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <>
        <ul className={styles.navbar}>
            <li>
                <Link href='/'>
                <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href='/'>
                <a>Contato</a>
                </Link>
            </li>
            <li>
                <Link href='/'>
                <a>Sobre Nós</a>
                </Link>
            </li>
            <li>
            <Link href='/login'>
                <a>Login</a>
                </Link>
            </li>

        </ul>
        <div className={styles.line}></div>
        </>

    )
}