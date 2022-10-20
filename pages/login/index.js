import Logo from '../../components/Logo'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import styles from '../../styles/Login.module.css'

export default function Login() {
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
    <div className={styles.form}>
      <div>
      <Image src='/images/user.png' width='25px' height ='25px' alt='#'/>
      <input type={'text'}  placeholder='Usuário'></input>
      </div>
    <div>
    <Image src='/images/lock.png' width='25px' height ='25px' alt='#'/>
      <input type={'password'} placeholder='Senha'></input>
      </div>
    <div><p></p></div>
    <Link href='/menu'><a>Login</a></Link>
    </div>


    </>

  )
}
