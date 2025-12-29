import styles from '@/app/ui/hero.module.css'

export const Hero = () => {

    return (

        <section className={styles.hero}>
            <div className={styles.main_visual}>   
                <picture>
                    <source media="(min-width: 768px)" srcSet="/images/mv.webp"/>
                    <img src="/images/mv_sp.webp" alt="Megaman Star Force" />
                </picture>
            </div>

            <div className={styles.bg_effect}>
                <video src="/images/bg_shooting_star.mp4" autoPlay loop playsInline muted></video>
            </div>

        </section>
    )
}
