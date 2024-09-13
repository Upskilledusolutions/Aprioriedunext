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
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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

  const data = [
    {
      id:'1',
    url:"/profileimg/6 (10).png",
    name:'Dyumna',
    course:'SPANISH (A1 & A2)',
    desc:"Learning French has been a delightful journey! The classes are engaging, and the teachers are incredibly supportive. I love how we practice speaking through fun activities. My confidence has skyrocketed, and I can now chat with my friends in French! I can’t wait to explore more of the language.",
},
{
  id:'2',
  url:"/profileimg/6 (9).png",
  name:'Nipun',
  course:'SPANISH (A1 & A2)',
  desc:'The overall content delivery was phenomenal. The level of interaction even in an online session made the whole experience fruitful. The content itself was extremely informative and the most important part of the classes that made it different and effective was the practice of correct pronunciation. That itself is something that is hard to grasp and teach.'
},
{
  id:'3',
  url:"/profileimg/6 (8).png",
  name:'Prisha',
  course:'GERMAN (A1 - B2)',
  desc:'The Spanish foundation course with Apriori Education completely changed the way I look at learning a new language. I am thankful to be aware of how enriching, fun and lasting the knowledge of an interesting language like Spanish can be. From the first class till the last, you learn every aspect of its practicality when you come around to speaking it.'
},
{
  id:'4',
  url:"/profileimg/10 (2).jpg",
  name:'Aparna',
  course:'FRENCH (A1 & A2)',
  desc:"Learning French has been a delightful journey! The classes are engaging, and the teachers are incredibly supportive. I love how we practice speaking through fun activities. My confidence has skyrocketed, and I can now chat with my friends in French! I can’t wait to explore more of the language."
},
{
  id:'9',
  url:"/profileimg/10 (1).jpeg",
  name:'PRISHA',
  course:'FRENCH (A1 & A2)',
  desc:"I took the French course to enhance my travel experiences. The practical vocabulary and phrases I learned were invaluable during my recent trip to Paris! The classes are interactive and filled with cultural insights. I came back with not just memories, but a desire to continue learning. Truly enriching!"
},
{
  id:'10',
  url:"/profileimg/10 (3).jpeg",
  name:'KUSHIK',
  course:'FRENCH (A1)',
  desc:"Starting from scratch, I was nervous about learning French. But the friendly environment and supportive peers made it enjoyable. The lessons were very engaging, making it easy to remember new words. I can now introduce myself confidently in French, and I'm excited to learn more!"
},
{
  id:'11',
  url:"/profileimg/10 (4).jpeg",
  name:'JAIRAJ',
  course:'FRENCH (A1 - B1)',
  desc:"French has become a passion for me! The advanced-level classes challenge me to think critically about language nuances. The instructors are knowledgeable and encourage us to explore literature and culture. I’m now preparing for a study abroad program in France, and I feel well-prepared thanks to this course."
},
{
  id:'12',
  url:"/profileimg/10 (2).jpeg",
  name:'Isha',
  course:'SPANISH (A1 - B1)',
  desc:"Spanish has opened up a whole new world for me! The advanced course has deepened my understanding of the language and culture. The discussions on literature and history are fascinating. I feel confident speaking with native speakers now, and I’m excited to travel to Spain soon!"
},
{
  id:'5',
  url:"/profileimg/10 (7).jpg",
  name:'Sanyam',
  course:'SPANISH (A1)',
  desc:"Learning Spanish through this course has been a rewarding experience. The instructors are patient and accommodating, and they make complex topics manageable. I enjoyed the group discussions and cultural activities, which made learning more relatable. I feel confident discussing my work in Spanish now!"
},
{
  id:'6',
  url:"/profileimg/10 (8).jpg",
  name:'Anmol',
  course:'SPANISH (A1 & A2)',
  desc:"Joining the Spanish course was one of the best decisions I’ve made! The classes are dynamic, with a perfect mix of grammar and conversation. I can now engage comfortably in simple dialogues, which has boosted my confidence. The supportive environment encourages everyone to participate and learn together."
},
{
  id:'7',
  url:"/profileimg/10 (9).jpg",
  name:'Anoushka',
  course:'FRENCH (A1 & A2)',
  desc:"As a professional, I was skeptical about balancing work and learning French. However, the flexible schedule and interactive lessons made it easy! The emphasis on real-life conversations helped me tremendously. This course has opened up new career opportunities for me."
},
{
  id:'8',
  url:"/profileimg/10 (10).jpeg",
  name:'GERMAN',
  course:'FRENCH (A1)',
  desc:"I enrolled in the French course to help my kids. To my surprise, I enjoyed it just as much! The curriculum is well-structured, and the playful approach makes learning fun. Now, we practice together at home, and it's a great bonding experience. Highly recommend it for families!"
},

]


  return (
    <div className={styles.slidercontainer}>
    <Reveal>
      <div className={styles.heading}>
        <div className={styles.heading1}>TESTIMONIALS</div>
      </div>
    </Reveal>
      <Slider className={styles.slider} {...settings}>

        {data.splice(0,8).map(data=><div className={styles.cardcontainer}>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
            <div className={styles.img}>
              <Image className={styles.img} src={data.url} width={400} height={400} alt="image"/>
            </div>
            <div>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.boldtext}>{data.course}</div>
            </div>
          </div>
          <div>
            <div className={styles.description}>{data.desc}</div>
          </div>
        </div>
        </div>)}

        {/* <div className={styles.cardcontainer}>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
          <div className={styles.img}>
            <Image className={styles.img} src={"/profileimg/10 (5).jpg"} width={400} height={400} alt="image"/>
            </div>
            <div>
            <div className={styles.name}>Priyanka</div>
            <div className={styles.boldtext}>GERMAN FOUNDATION & INTERMEDIATE (A1 - B2)</div>
            </div>
          </div>
          <div>
            <div className={styles.description}>The 10-day Spanish foundation course with Apriori Education completely changed the way I look at learning a new language. I am thankful to be aware of how enriching, fun and lasting the knowledge of an interesting language like Spanish can be. From the first class till the last, you learn every aspect of its practicality when you come around to speaking it.</div>
          </div>
        </div>
        </div>

        <div className={styles.cardcontainer}>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
          <div className={styles.img}>
            <Image className={styles.img} src={"/profileimg/10 (4).jpg"} width={400} height={400} alt="image"/>
            </div>
            <div>
            <div className={styles.name}>Vishaka</div>
            <div className={styles.boldtext}>GERMAN FOUNDATION & INTERMEDIATE (A1 - B2)</div>
            </div>
          </div>
          <div>
            <div className={styles.description}>The 10-day Spanish foundation course with Apriori Education completely changed the way I look at learning a new language. I am thankful to be aware of how enriching, fun and lasting the knowledge of an interesting language like Spanish can be. From the first class till the last, you learn every aspect of its practicality when you come around to speaking it.</div>
          </div>
        </div>
        </div>

        <div className={styles.cardcontainer}>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
          <div className={styles.img}>
            <Image className={styles.img} src={"/profileimg/10 (3).jpg"} width={400} height={400} alt="image"/>
            </div>
            <div>
            <div className={styles.name}>Nandini</div>
            <div className={styles.boldtext}>GERMAN FOUNDATION & INTERMEDIATE (A1 - B2)</div>
            </div>
          </div>
          <div>
            <div className={styles.description}>The 10-day Spanish foundation course with Apriori Education completely changed the way I look at learning a new language. I am thankful to be aware of how enriching, fun and lasting the knowledge of an interesting language like Spanish can be. From the first class till the last, you learn every aspect of its practicality when you come around to speaking it.</div>
          </div>
        </div>
        </div>

        <div className={styles.cardcontainer}>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
          <div className={styles.img}>
            <Image className={styles.img} src={"/profileimg/10 (2).jpg"} width={400} height={400} alt="image"/>
            </div>
            <div>
            <div className={styles.name}>Aparna</div>
            <div className={styles.boldtext}>GERMAN FOUNDATION & INTERMEDIATE (A1 - B2)</div>
            </div>
          </div>
          <div>
            <div className={styles.description}>The 10-day Spanish foundation course with Apriori Education completely changed the way I look at learning a new language. I am thankful to be aware of how enriching, fun and lasting the knowledge of an interesting language like Spanish can be. From the first class till the last, you learn every aspect of its practicality when you come around to speaking it.</div>
          </div>
        </div>
        </div>

        <div className={styles.cardcontainer}>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
          <div className={styles.img}>
            <Image className={styles.img} src={"/profileimg/10 (6).jpg"} width={400} height={400} alt="image"/>
            </div>
            <div>
            <div className={styles.name}>Mandika</div>
            <div className={styles.boldtext}>GERMAN FOUNDATION & INTERMEDIATE (A1 - B2)</div>
            </div>
          </div>
          <div>
            <div className={styles.description}>The 10-day Spanish foundation course with Apriori Education completely changed the way I look at learning a new language. I am thankful to be aware of how enriching, fun and lasting the knowledge of an interesting language like Spanish can be. From the first class till the last, you learn every aspect of its practicality when you come around to speaking it.</div>
          </div>
        </div>
        </div> */}

      </Slider>
    </div>
  );
}

export default Testimonials;
