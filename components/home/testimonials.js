import Image from "next/image";
import Reveal from "../Reveal";
import React from "react";
import Slider from "react-slick";
import styles from "../../src/styles/Home/testimonials.module.css"

function Testimonials() {
  const settings = {
    dots: true, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };
  const data = [
    { id:'1', url:"/profileimg/6 (10).png", name:'Dyumna', course:'SPANISH (A1 & A2)' },
    { id:'2', url:"/profileimg/6 (9).png", name:'Nipun', course:'SPANISH (A1 & A2)' },
    { id:'3', url:"/profileimg/6 (8).png", name:'Prisha', course:'GERMAN (A1 - B2)' },
    { id:'4', url:"/profileimg/10 (2).jpg", name:'Aparna', course:'FRENCH (A1 & A2)' },
    { id:'9', url:"/profileimg/10 (1).jpeg", name:'PRISHA', course:'FRENCH (A1 & A2)' },
    { id:'10', url:"/profileimg/10 (3).jpeg", name:'KUSHIK', course:'FRENCH (A1)' },
    { id:'11', url:"/profileimg/10 (4).jpeg", name:'JAIRAJ', course:'FRENCH (A1 - B1)' },
    { id:'12', url:"/profileimg/10 (2).jpeg", name:'Isha', course:'SPANISH (A1 - B1)' },
    { id:'5', url:"/profileimg/10 (7).jpg", name:'Sanyam', course:'SPANISH (A1)' },
    { id:'6', url:"/profileimg/10 (8).jpg", name:'Anmol', course:'SPANISH (A1 & A2)' },
    { id:'7', url:"/profileimg/10 (9).jpg", name:'Anoushka', course:'FRENCH (A1 & A2)' },
    { id:'8', url:"/profileimg/10 (10).jpeg", name:'Deepshikha', course:'GERMAN (A1)' }
  ];
  return (
    <div className={styles.slidercontainer}>
      <Reveal><div className={styles.heading}><div className={styles.heading1}>TESTIMONIALS</div></div></Reveal>
      <Slider className={styles.slider} {...settings}>
        {data.map(data => <div className={styles.cardcontainer} key={data.id}>
          <div className={styles.card} style={{ height: '160px' }}>
            <div className={styles.imgcontainer} style={{ marginBottom: 0 }}>
              <Image className={styles.img} src={data.url} width={400} height={400} alt={data.name} />
              <div className={styles.info}>
                <div className={styles.name}>{data.name}</div>
                <div className={styles.boldtext}>{data.course}</div>
              </div>
            </div>
          </div>
        </div>)}
      </Slider>
    </div>
  );
}
export default Testimonials;
