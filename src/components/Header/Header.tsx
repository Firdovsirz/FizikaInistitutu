"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Header.module.scss";
import EmailIcon from '@mui/icons-material/Email';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import PhysicsLogo from "@/../public/assets/Header/physics-logo.png";

export default function Header() {
    return (
        <header className={styles['header-container']}>
            <div className={styles['header-main']}>
                <div className={styles['header-logo-container']}>
                    <Image src={PhysicsLogo} alt='PHYSICS INSTITUTION' className={styles['header-logo-img']}/>
                    <div className={styles['header-logo-txt']}>
                        <p>AZƏRBAYCAN RESPUBLİKASI ELM VƏ TƏHSİL NAZİRLİYİ</p>
                        <p><span>FİZİKA İNSTİTUTU</span></p>
                    </div>
                </div>
                <div className={styles['header-tools']}>
                    <div className={styles['header-lang-changer']}>
                        <div>
                            <SmartDisplayIcon style={{color: "#224285", fontSize: 30, marginRight: 5}}/>
                            <p>Video</p>
                        </div>
                        <div>
                            <EmailIcon style={{color: "#224285", fontSize: 30, marginRight: 5}}/>
                            <p>E-poçt</p>
                        </div>
                        <div className={styles['header-lang-container']}>
                            <p>Az</p>
                            <p>En</p>
                            <p>Ru</p>
                        </div>
                    </div>
                    <div className={styles['header-search-container']}></div>
                </div>
            </div>
            <nav className={styles['header-nav-container']}>
                <ul>
                    <li>İNSTİTUT HAQQINDA</li>
                    <li>ELMİ FƏALİYYƏT</li>
                    <li>DİSSERTASİYA ŞURASI</li>
                    <li>BEYNƏLXALQ ƏMƏKDAŞLIQ</li>
                    <li>MEDİA</li>
                    <li>XƏBƏRLƏR</li>
                    <li>ELANLAR</li>
                    <li>
                        <Link href="/contact">ƏLAQƏ</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
