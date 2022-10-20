import Link from 'next/link'
import Generate from '../generate'
import Scan from '../scan'
import styles from '../../styles/Home.module.css'

export default function Menu() {
    return (
        <div className={styles.container}>
        <h1>Menu</h1>
        <Link href='/generate'><a>Gerar QR Code</a></Link>
        <div></div>
        <Link href='/scan'><a>Scanear QR Code</a></Link>
        <div></div>
        <Link href='/login'><a>Sair</a></Link>
        </div>
    )
}