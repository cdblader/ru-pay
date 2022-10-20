import Logo from '../components/Logo'
import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Página Principal</title>
      <meta name="keywords" content="Cardápio, RU, Pagamentos, Pix, Restaurante Universitário"></meta>
      <meta name="description" content="Sistema de pagamentos de RUs"></meta>
    </Head>
    <div className={styles.title}>
     <Logo/>
    </div>
    <div className={styles.text}>
      <p>Sistema de pagamento online de Restaurantes Universitários</p>
    </div>
    </>

  )
}
