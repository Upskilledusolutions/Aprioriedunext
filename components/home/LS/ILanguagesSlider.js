import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import styles from "../../../src/styles/Languageclub/languageslider.module.css"

function LanguagesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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

  const texts = {1:"We are thrilled to introduce you to the French Language Club, a vibrant community dedicated to the exploration, learning, and appreciation of the beautiful French language.",
2: "Welcome to our Spanish Language Club! We are thrilled to provide a vibrant and inclusive space for individuals interested in exploring the Spanish language and Hispanic culture.",
3: "Whether you're a beginner taking your first steps in Italian or an advanced learner looking to deepen your understanding,",
4: "We extend a hearty welcome to all language enthusiasts ready to immerse themselves in the captivating world of German language and culture.",
5: "The Sanskrit Language Club is a vibrant community dedicated to celebrating and preserving the ancient language of Sanskrit"}
  return (
    <div className={styles.slidercontainer}>
      <Slider className={styles.slider} {...settings}>
        <div className={styles.cardcontainer}>
        <Link href="/LanguageClub/FrenchLC" className={styles.link}>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={"/languageclub/1 (6).jpg"} width={400} height={400} alt="image"/>
          </div>
          <div>
            <div className={styles.heading}>French Language Club</div>
            <div className={styles.text}>{texts[1].slice(0,100)}...</div>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
        </Link>
        </div>

        <Link href="/LanguageClub/SpanishLC" className={styles.link}>
        <div className={styles.cardcontainer}>
        <div className={styles.card}>
        <div className={styles.imgcontainer}>
            <Image className={styles.img} src={"/languageclub/1 (2).jpg"} width={400} height={400} alt="image"/>
          </div>
          <div>
            <div className={styles.heading}>Spanish Language Club</div>
            <div className={styles.text}>{texts[2].slice(0,100)}...</div>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
        </div>
        </Link>

        <Link href="/LanguageClub/GermanLC" className={styles.link}>
        <div className={styles.cardcontainer}>
        <div className={styles.card}>
        <div className={styles.imgcontainer}>
            <Image className={styles.img} src={"/languageclub/1 (4).jpg"} width={400} height={400} alt="image"/>
          </div>
          <div>
            <div className={styles.heading}>German Language Club</div>
            <div className={styles.text}>{texts[4].slice(0,100)}...</div>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
        </div>
        </Link>

        {/* <Link href="/LanguageClub/ItalianLC" className={styles.link}>
        <div className={styles.cardcontainer}>
        <div className={styles.card}>
        <div className={styles.imgcontainer}>
            <Image className={styles.img} src={"/languageclub/1 (3).jpg"} width={400} height={400} alt="image"/>
          </div>
          <div>
            <div className={styles.heading}>Italian Language Club</div>
            <div className={styles.text}>{texts[3].slice(0,100)}...</div>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
        </div>
        </Link> */}

        {/* <Link href="/LanguageClub/SanskritLC" className={styles.link}>
        <div className={styles.cardcontainer}>
        <div className={styles.card}>
        <div className={styles.imgcontainer}>
            <Image className={styles.img} src={"/languageclub/2 (12).jpeg"} width={400} height={400} alt="image"/>
          </div>
          <div>
            <div className={styles.heading}>Sanskrit Language Club</div>
            <div className={styles.text}>{texts[5].slice(0,100)}...</div>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
        </div>
        </Link> */}

      </Slider>
    </div>
  );
}

export default LanguagesSlider;