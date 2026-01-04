'use client'
import styles from '@/app/ui/characters.module.css'
import Title from './titles'
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import data from "@/app/data/characters.json";


export const Characters = () => {

  const swiperRef = useRef(null);
  const thumbsRef = useRef(null);
  useEffect(() => {
    register();
  }, []);


  return (
    <section id='characters'>
      <Title title='CHARACTERS' />
      <p className={styles.lead}>
        Blast Off to Adventure with an All-Star Cast
      </p>
      <div className={styles.wrap}>
        <div className={styles.character_list}>



          <swiper-container
            
            class={`mySwiper`}
            ref={swiperRef}
            space-between={30}
            navigation="true"
            thumbs-swiper=".thumbs"
            slides-per-view={1}
            >
            {data.map((item) => (
              <swiper-slide key={item.id} className={styles.slide}>

                <div className={styles.background_color} style={{ backgroundColor: item.backgroundColor }} ></div>
                <div className={styles.background_image} style={{ backgroundImage: item.backgroundImage }}> </div>
                <div className={styles.details}>
                  <p className={styles.name}> {item.name}</p>
                  <div className={styles.description}>
                    <p> {item.description}
                    </p> </div>

                </div>
                <div className={styles.img_wrap}>
                  <picture>
                    <source />
                    <img src={`/images/characters/${item.picture}`} alt={item.name} />
                  </picture>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
          <swiper-container ref={thumbsRef}
            class={`thumbs`}
            space-between={10}
            slides-per-view={5}
            watch-slides-progress="true"
           >
 
            {data.map((item) => (
              <swiper-slide key={`thumb-${item.id}`} >
                <div className={styles.thumb_slide}>
                <img src={`/images/characters/${item.thumbnail}`} alt={`${item.name} thumbnail`} />
                  
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>

      </div>

    </section>
  )
}
