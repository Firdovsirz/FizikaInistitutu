"use client";

import React from 'react';
import styles from "./page.module.scss";
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export default function page() {
    const mapEmbed = `
        < iframe
    src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.534585323807!2d49.81123201130384!3d40.374209358107564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dea14e80255%3A0xbf43d3ea73b59b7d!2sANAS%20H.M.%20Abdullayev%20Institute%20of%20Physics!5e1!3m2!1str!2saz!4v1740748973901!5m2!1str!2saz"
    width = "600"
    height = "450"
    style = "border:0;"
    allowfullscreen = ""
    loading = "lazy"
    referrerpolicy = "no-referrer-when-downgrade" >
</ >
        `;
    return (
        <>
            <Header />
            <main className={styles['contact-main']}>
                <h1>Elaqe</h1>
                <div className={styles['contact-main-details']}>
                    <div>
                        <h2>Unvan</h2>
                        <p>33 Hüseyn Cavid Prospekti, Bakı 1141</p>
                    </div>
                    <div>
                        <h2>Direktorun qəbul otağı</h2>
                        <p>	(994 12) 000 00 00,  director@physics.science.az, secretary@physics.science.az</p>
                    </div>
                    <div>
                        <h2>Təhsil şöbəsi</h2>
                        <p>(994 12) 000 00 00,  ph.d@physics.science.az</p>
                    </div>
                    <div>
                        <h2>İctimaiyyətlə əlaqələr şöbəsi</h2>
                        <p>	(994 12) 000 00 00,  pr@physics.science.az</p>
                    </div>
                    <div>
                        <h2>www.ict.az</h2>
                        <p>(994 12) 000 00 00,  physics@physics.science.az</p>
                    </div>
                    <div>
                        <h2>Tədris İnnovasiya Mərkəzi</h2>
                        <p>	(994 12) 000 00 00,  training_center@physics.science.az</p>
                    </div>
                </div>
                <div className={styles['contact-map-container']}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.563169837159!2d49.81123201130384!3d40.374209358107564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dea14e80255%3A0xbf43d3ea73b59b7d!2sANAS%20H.M.%20Abdullayev%20Institute%20of%20Physics!5e0!3m2!1str!2saz!4v1740749116185!5m2!1str!2saz"
                        loading="lazy" />
                </div>

            </main>
            <Footer />
        </>
    )
}
