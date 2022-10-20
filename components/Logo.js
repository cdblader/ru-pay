import Image from 'next/image'
import styles from '../styles/Logo.module.css'

export default function Logo() {
    return (
        <>
        <Image src='/images/logo.png' width='100px' height ='90px' alt='#'/>
        <div></div>
        <Image src='/images/rupay.png' width='200px' height ='40px' alt='#'/>
        </>
    )
}