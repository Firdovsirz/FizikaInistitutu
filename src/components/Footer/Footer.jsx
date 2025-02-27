"use client";

import React from 'react';
import styles from "./Footer.module.scss";
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
    return (
        <footer className={styles['footer-container']}>
            <div className={styles['footer-anchors']}>
                <div>
                    <h2>İnstitut haqqında</h2>
                    <ul>
                        <li>Rəhbərlik</li>
                        <li>Elmi şöbələr</li>
                        <li>İnstitutun rekvizitləri</li>
                    </ul>
                </div>
                <div>
                    <h2>Elmi fəaliyyət</h2>
                    <ul>
                        <li>Əsas elmi istiqamət</li>
                        <li>Konfranslar, seminarlar</li>
                        <li>Doktorantura</li>
                    </ul>
                </div>
                <div>
                    <h2>Beynəlxalq əməkdaşlıq</h2>
                    <ul>
                        <li>Təşkilatlar</li>
                        <li>Müqavilələr</li>
                        <li>Tədbirlər</li>
                        <li>Görüşlər</li>
                        <li>Təqaüd proqramları</li>
                    </ul>
                </div>
                <div>
                    <h2>Qalereya</h2>
                    <ul>
                        <li>Fotoqalereya</li>
                        <li>Videoqalereya</li>
                    </ul>
                </div>
            </div>
            <div className={styles['footer-details']}>
                <div className={styles['footer-additional-info']}>
                    <div className={styles['footer-location']}>
                        <PlaceIcon className={styles['footer-location-icon']} />
                        <p>33 Hüseyn Cavid Prospekti, Bakı 1141</p>
                    </div>
                    <div className={styles['footer-mail']}>
                        <EmailIcon className={styles['footer-mail-icon']} />
                        <p>info@physics.science.az</p>
                    </div>
                </div>
                <div className={styles['footer-line']} />
                <div className={styles['footer-copyright']}>
                    <div className={styles['footer-copyright-container']}>
                        <CopyrightIcon className={styles['footer-copyright-icon']}/>
                        <p>1945 - 2025 Fizika Inistitutu</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
