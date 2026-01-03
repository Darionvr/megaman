import styles from '@/app/ui/hero.module.css'
import Image from 'next/image'


export const Hero = () => {

    return (

        <section className={styles.hero}>
            <div className={styles.main_visual}>
                <picture>
                    <source media="(min-width: 768px)" srcSet="/images/mv.webp" />
                    <img src="/images/mv_sp.webp" alt="Megaman Star Force" />
                </picture>
            </div>

            <div className={styles.bg_effect}>
                <video src="/images/bg_shooting_star.mp4" autoPlay loop playsInline muted></video>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.mv_left}>
                    <div className={styles.img_wrap}>
                        <Image src={'/images/logo_title_en.png'} alt="Megaman Logo" width={1352} height={904} />
                    </div>
                    <div className={styles.text_copy}>
                        <div className={styles.copy}>
                            <p className={styles.bottom}>Featuring all 7 games</p>
                            <p className={styles.upper}>Featuring all 7 games</p>
                        </div>
                        <div className={styles.copy}>
                            <p className={styles.bottom}>in the Mega Man</p>
                            <p className={styles.upper}>in the Mega Man</p>
                        </div>
                        <div className={styles.copy}>
                            <p className={styles.bottom}>Star Force series!</p>
                            <p className={styles.upper_2}>Star Force series!</p>
                        </div>

                    </div>
                    <div className={styles.wishlist}>
                        <div className={styles.denpakun}></div>
                        <p className={styles.wishlist_title}>Pre-Order Here!</p>

                        <ul className={styles.wishlist_list}>
                            <li>
                                <a href="#">Nintendo eShop</a>
                            </li>
                            <li>
                                <a href="#">PlayStation Store</a>
                            </li>
                            <li>
                                <a href="#">Microsoft Store</a>
                            </li>
                            <li>
                                <a href="#">Steam Store</a>
                            </li>
                        </ul>
                    </div>


                </div>
                <div className={styles.mv_center}>
                    <p> Available
                        <br />
                        <span> March 27, 2026</span>
                    </p>
                </div>
                <div className={styles.mv_right}>
                    <ul>
                        <li>
                            <img className={styles.hover_off} src="/images/menu/menu_about.svg" alt="about menu" />
                            <img className={styles.hover_on} src="/images/menu/menu_about___on.svg" alt="about hover" />
                            <p>About</p>
                        </li>
                        <li>
                            <img className={styles.hover_off} src="/images/menu/menu_titlelist.svg" alt="title list menu" />
                            <img className={styles.hover_on} src="/images/menu/menu_titlelist___on.svg" alt="about hover" />

                            <p>Title List</p>
                        </li>
                        <li>
                            <img className={styles.hover_off} src="/images/menu/menu_online.svg" alt="online menu" />
                            <img className={styles.hover_on} src="/images/menu/menu_online___on.svg" alt="about hover" />

                            <p>Online</p>
                        </li>
                        <li>
                            <img className={styles.hover_off} src="/images/menu/menu_character.svg" alt="character menu" />
                            <img className={styles.hover_on} src="/images/menu/menu_character___on.svg" alt="about hover" />

                            <p>Characters</p>
                        </li>
                    </ul>
                </div>
            </div>


        </section>
    )
}
