import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Menu() {
    return (
        <div className={styles.container}>
        <h1>Menu</h1>
         <Link href='/login'><a>Sair</a></Link>
        </div>
    )
}