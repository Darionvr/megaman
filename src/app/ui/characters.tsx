'use client'
import styles from '@/app/ui/characters.module.css'
import Title from './titles'
import { useEffect, useRef} from "react";
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
        {/*  <div className={styles.character_list}>
          <div className={styles.swiper}> 
            <div className={styles.slide}>
              <div className={styles.background_color} ></div>
              <div className={styles.background_image}> </div>
              <div className={styles.details}>
                <p className={styles.name}> CHARACTER NAME</p>
          
              </div>
              <div className={styles.img_wrap}>
                <picture>
                  <source />
                  <img src="" alt="" />
                </picture>
              </div>
            </div>
          </div>
          <div id='prev' className={styles.left_button}></div>
          <div id='next' className={styles.right_button}></div>
        </div> */}

        <swiper-container 
        ref={swiperRef} 
        space-between="30" 
        navigation="true" 
        thumbs-swiper=".thumbs"
          slides-per-view="1" 
          style={{ width: "100%", height: "500px" }} >
          {data.map((item) => (
            <swiper-slide key={item.id}>
              <div style={{ backgroundColor: item.backgroundColor, padding: "2rem", borderRadius: "12px", textAlign: "center", }} >
                <img src={`/images/characters/${item.picture}`} alt={item.name} style={{ maxWidth: "300px", margin: "0 auto" }} />
                <h2>{item.name}</h2>
                <p dangerouslySetInnerHTML={{ __html: item.description }} style={{ maxWidth: "600px", margin: "1rem auto" }} />
              </div>
            </swiper-slide>
          ))}
        </swiper-container>

        <swiper-container ref={thumbsRef} 
        class="thumbs" 
        space-between="10" 
        slides-per-view="5" 
        watch-slides-progress="true" 
        style={{ marginTop: "20px", height: "120px" }} >
        {data.map((item) => (
          <swiper-slide key={`thumb-${item.id}`}>
            <img src={`/images/characters/${item.thumbnail}`} alt={`${item.name} thumbnail`} style={{ width: "100%", height: "100%", objectFit: "contain", cursor: "pointer", }} />
          </swiper-slide>
        ))}
      </swiper-container>

      </div>

    </section>
  )
}
