import Image from "next/image";
import Reveal from "../Reveal";
import React from "react";
import Slider from "react-slick";
import styles from "../../src/styles/Home/testimonials.module.css"

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.slidercontainer}>
    <div className={styles.cover}></div>
    <Image className={styles.background} src={'/assests/bg4.jpg'} width={2000} height={2000} alt='image'></Image>
    <Reveal>
      <div className={styles.heading}>
        <div className={styles.heading1}>Testimonials</div>
      </div>
    </Reveal>
      <Slider className={styles.slider} {...settings}>

        {/* <div className={styles.cardcontainer}>
        <div className={styles.card}>
        <Reveal>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={"/profileimg/7.webp"} width={400} height={400} alt="image"/>
          </div>
        </Reveal>
          <Reveal>
          <div>
            <div className={styles.name}>Swastik</div>
            <div className={styles.boldtext}>READING CLUB</div>
            <div className={styles.description}>As a student at the coaching institute, I can't express how much I enjoy the vocab quizzes, storytelling activities, and writing contests. These engaging activities not only enhance my language skills but also ignite my creativity. And the best part? I consistently manage to win prizes! It's incredibly motivating to see my efforts rewarded.</div>
          </div>
          </Reveal>
        </div>
        </div> */}


        <div className={styles.cardcontainer}>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={"/profileimg/8.webp"} width={400} height={400} alt="image"/>
          </div>
          <div>
            <div className={styles.name}>Sara</div>
            <div className={styles.boldtext}>READING CLUB</div>
            <div className={styles.description}>As a student here, I can confidently say that all the teachers are not only excellent but also incredibly helpful. Their dedication to our growth and learning is commendable. Since joining, my confidence has soared. The personalized attention, engaging lessons, and supportive environment have truly transformed my educational experience.</div>
          </div>
        </div>
        </div>

        <div className={styles.cardcontainer}>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={"/profileimg/6 (10).png"} width={400} height={400} alt="image"/>
          </div>
          <div>
            <div className={styles.name}>Dyumna</div>
            <div className={styles.boldtext}>SPANISH FOUNDATION (A1 & A2)</div>
            <div className={styles.description}>The beginner level Spanish lessons took up a very holistic approach towards understanding the language and to gain the ability to start speaking it a little by the end of the modules. Dominic sir's way of teaching helped me in initiating and engaging in basic conversation in Spanish. Overall, it was a wonderful learning experience.</div>
          </div>
        </div>
        </div>

        <div className={styles.cardcontainer}>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={"/profileimg/6 (9).png"} width={400} height={400} alt="image"/>
          </div>
          <div>
            <div className={styles.name}>Nipun Banerjee</div>
            <div className={styles.boldtext}>SPANISH FOUNDATION (A1 & A2)</div>
            <div className={styles.description}>The overall content delivery was phenomenal. The level of interaction even in an online session made the whole experience fruitful. The content itself was extremely informative and the most important part of the classes that made it different and effective was the practice of correct pronunciation. That itself is something that is hard to grasp and teach.</div>
          </div>
        </div>
        </div>

        <div className={styles.cardcontainer}>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={"/profileimg/6 (8).png"} width={400} height={400} alt="image"/>
          </div>
          <div>
            <div className={styles.name}>Prisha Chhabra</div>
            <div className={styles.boldtext}>GERMAN FOUNDATION & INTERMEDIATE (A1, A2, B1 & B2)</div>
            <div className={styles.description}>The 10-day Spanish foundation course with Apriori Education completely changed the way I look at learning a new language. I am thankful to be aware of how enriching, fun and lasting the knowledge of an interesting language like Spanish can be. From the first class till the last, you learn every aspect of its practicality when you come around to speaking it.</div>
          </div>
        </div>
        </div>

      </Slider>
    </div>
  );
}

export default Testimonials;
