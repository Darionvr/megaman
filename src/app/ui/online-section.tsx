import styles from '@/app/ui/online.module.css'
import Title from './titles'

export const Online = () => {
    return (
        <section id='online' className={styles.online_section}>
            <Title title='ONLINE' />
            <div className={styles.wrap}>
                <div className={styles.img_left}>
                    <div className={styles.denpakun}>
                        <img className={styles.denpakun_full} src="/images/pic_online_denpakun_main.png" alt="Denpakun" />
                        <img className={styles.denpakun_shadow1} src="/images/pic_online_denpakun_shadow01.png" alt="Denpakun shadow 1" />
                        <img className={styles.denpakun_shadow2} src="/images/pic_online_denpakun_shadow02.png" alt="Denpakun shadow 2" />
                        <img className={styles.denpakun_ring1} src="/images/pic_online_denpakun_ring.png" alt="Denpakun ring" />
                        <img className={styles.denpakun_ring2} src="/images/pic_online_denpakun_ring.png" alt="Denpakun ring" />
                    </div>
                </div>
                <div className={styles.text}>
                    <p>From battling to trading cards, the powered up online functions will let you experience the Mega Man series at its finest!</p>
                </div>
                <div className={styles.img_right}>
                    <img src="/images/pic_online_card.png" alt="Online cards" />
                </div>
            </div>
            <div className={styles.img_list}>
                <div>
                    <img src="/images/thumb_online_ss01_en.jpg" alt="Online Screenshot" />
                </div>
                <div>
                    <img src="/images/thumb_online_ss02_en.jpg" alt="Online Screenshot" />
                </div>
                <div>
                    <img src="/images/thumb_online_ss03_en.jpg" alt="Online Screenshot" />
                </div>

            </div>
        </section>
    )
}
